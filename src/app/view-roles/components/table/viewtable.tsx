'use client';
import React, { useState } from 'react';
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
} from '@nextui-org/react';
import Image from 'next/image';
import { SearchIcon } from './SearchIcon';

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
const Edit = (
  <Image
    src={'/images/RoleImages/whiteEdit.png'}
    alt="edit"
    width={15}
    height={15}
    className="ml-2"
  />
);
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
  const [filterValue, setFilterValue] = useState('');

  // Filter data based on filterValue
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(filterValue.toLowerCase()),
    ),
  );

  return (
    <div>
      <div className="mb-4 flex flex-col items-center justify-between p-4 sm:flex-row sm:items-end">
        <Input
          isClearable
          classNames={{
            base: 'w-full sm:max-w-xs md:max-w-sm',
            inputWrapper: ['border-1', 'rounded'],
          }}
          placeholder="Search by name..."
          size="sm"
          value={filterValue}
          variant="bordered"
          startContent={<SearchIcon className="text-default-300" />}
          onClear={() => setFilterValue('')}
          onChange={(e) => setFilterValue(e.target.value)}
        />

        <Button
          color="primary"
          className="h-8 w-full rounded px-5 text-xs sm:w-auto sm:shrink-0"
          endContent={Edit}
        >
          Edit Permissions
        </Button>
      </div>
      <p className="z-10 mb-1 ml-4 text-xs font-light leading-6 text-zinc-500">
        Detailed{' '}
        <span className="font-medium italic underline">Administrator</span>{' '}
        Permissions
      </p>
      <Table
        isHeaderSticky
        aria-label="Dynamic Example Table"
        classNames={{
          base: 'max-h-[520px] overflow-scroll',
          table: 'min-h-[400px]',
          wrapper: 'shadow-none mx-4 p-0',
          th: 'h-12',
          tr: 'border-b-[1px] border-[#F4F4F5]',
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={filteredData}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === 'Permissions' ? (
                    item[columnKey as keyof Permission]
                  ) : item[columnKey as keyof Permission] === 'Yes' ? (
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
    </div>
  );
}
