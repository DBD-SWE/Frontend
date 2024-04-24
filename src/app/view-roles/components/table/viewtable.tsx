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

interface Permission {
  key: string;
  Permissions: string;
  Read: string;
  Create: string;
  Update: string;
  Delete: string;
}

interface ViewTableProps {
  data: Permission[];
}

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
        th: 'h-12',
        tr: 'border-b-[1px] border-[#F4F4F5]',
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
                  <Image
                    src={'/images/RoleImages/check.png'}
                    width={20}
                    height={20}
                    alt="Positive"
                    className="object-contain"
                  />
                ) : (
                  <Image
                    src={'/images/RoleImages/negative.png'}
                    width={20}
                    height={20}
                    alt="Negative"
                    className="object-contain"
                  />
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
