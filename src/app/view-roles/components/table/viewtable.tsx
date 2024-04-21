'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import Image from 'next/image';
import check from '../../../../../public/images/RoleImages/check.png';
import negative from '../../../../../public/images/RoleImages/negative.png';

interface Permission {
  key: string;
  Permissions: string;
  Read: string;
  Create: string;
  Update: string;
  Delete: string;
}

// Define the interface for the component props
interface ViewTableProps {
  data: Permission[]; // This prop will be used to pass the row data
}

// Define the columns based on the Permission interface
const columns = [
  {
    key: 'Permissions',
    label: 'Permissions',
  },
  {
    key: 'Read',
    label: 'Read',
  },
  {
    key: 'Create',
    label: 'Create',
  },
  {
    key: 'Update',
    label: 'Update',
  },
  {
    key: 'Delete',
    label: 'Delete',
  },
];

export default function ViewTable({ data }: ViewTableProps) {
  return (
    <Table
      isHeaderSticky
      aria-label="Dynamic Example Table"
      classNames={{
        base: 'max-h-[520px] overflow-scroll',
        table: 'min-h-[400px]',
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>
                {columnKey === 'Permissions' ? (
                  getKeyValue(item, columnKey)
                ) : getKeyValue(item, columnKey) === 'Yes' ? (
                  <Image src={check} alt="Check" />
                ) : (
                  <Image src={negative} alt="Negative" />
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
