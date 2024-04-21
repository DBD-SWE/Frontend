'use client';

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Button,
  getKeyValue,
} from '@nextui-org/react';
import { useAsyncList } from '@react-stately/data';
interface Permission {
  key: string;
  Permissions: string;
  Read: string;
  Create: string;
  Update: string;
  Delete: string;
}
const columns = [
  { key: 'Permissions', label: 'Permissions' },
  { key: 'Read', label: 'Read' },
  { key: 'Create', label: 'Create' },
  { key: 'Update', label: 'Update' },
  { key: 'Delete', label: 'Delete' },
];

export default function ViewTable() {
  const mockData: Permission[] = [
    {
      key: '1',
      Permissions: 'User Management',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      key: '2',
      Permissions: 'Role Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'No',
      Delete: 'No',
    },
    {
      key: '3',
      Permissions: 'Settings',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'Yes',
      Delete: 'Yes',
    },
    {
      key: '4',
      Permissions: 'Guest Houses Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      key: '5',
      Permissions: 'Attractions Management',
      Read: 'No',
      Create: 'Yes',
      Update: 'No',
      Delete: 'Yes',
    },
    {
      key: '6',
      Permissions: 'Dashboard Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      key: '7',
      Permissions: 'Activity Log Management',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'No',
      Delete: 'Yes',
    },
  ];

  const [cursor, setCursor] = useState(0);
  const itemsPerPage = 2;

  let list = useAsyncList<Permission>({
    load: async ({ signal }) => {
      console.log('Loading data...');
      return new Promise((resolve) => {
        setTimeout(() => {
          const startIndex = cursor;
          const endIndex = startIndex + itemsPerPage;
          const items = mockData.slice(startIndex, endIndex);
          setCursor(endIndex); // Update cursor to new position
          resolve({ items });
        }, 1000); // Simulate network delay
      });
    },
  });

  return (
    <Table
      isHeaderSticky
      aria-label="Permissions table with dynamic data loading"
      classNames={{
        base: 'max-h-[520px] overflow-scroll',
        table: 'min-h-[420px]',
      }}
      bottomContent={
        cursor < mockData.length && !list.isLoading ? (
          <div className="flex w-full justify-center p-4">
            <Button onClick={() => list.reload()} disabled={list.isLoading}>
              {list.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {list.items.map((item, index) => (
          <TableRow key={item.key}>
            {columns.map((column) => (
              <TableCell key={`${index}-${column.key}`}>
                {item[column.key as keyof Permission]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}