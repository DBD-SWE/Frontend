'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Button,
} from '@nextui-org/react';

export default function ViewTable() {
  const mockData = [
    {
      Permissions: 'User Management',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      Permissions: 'Role Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'No',
      Delete: 'No',
    },
    {
      Permissions: 'Settings',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'Yes',
      Delete: 'Yes',
    },
    {
      Permissions: 'Guest Houses Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      Permissions: 'Attractions Management',
      Read: 'No',
      Create: 'Yes',
      Update: 'No',
      Delete: 'Yes',
    },
    {
      Permissions: 'Dashboard Management',
      Read: 'Yes',
      Create: 'No',
      Update: 'Yes',
      Delete: 'No',
    },
    {
      Permissions: 'Activity Log Management',
      Read: 'Yes',
      Create: 'Yes',
      Update: 'No',
      Delete: 'Yes',
    },
  ];

  return (
    <Table
      isHeaderSticky
      aria-label="Permissions table with static data"
      classNames={{
        base: 'max-h-[520px] overflow-scroll',
        table: 'min-h-[420px]',
      }}
    >
      <TableHeader>
        <TableColumn key="Permissions">Permissions</TableColumn>
        <TableColumn key="Read">Read</TableColumn>
        <TableColumn key="Create">Create</TableColumn>
        <TableColumn key="Update">Update</TableColumn>
        <TableColumn key="Delete">Delete</TableColumn>
      </TableHeader>
      <TableBody>
        {mockData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.Permissions}</TableCell>
            <TableCell>{item.Read}</TableCell>
            <TableCell>{item.Create}</TableCell>
            <TableCell>{item.Update}</TableCell>
            <TableCell>{item.Delete}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
