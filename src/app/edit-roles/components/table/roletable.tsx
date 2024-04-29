'use client';
import React from 'react';
import Image from 'next/image';
import {
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from '@nextui-org/react';

interface Permission {
  key: string;
  Permissions: string;
  Read: boolean;
  Create: boolean;
  Update: boolean;
  Delete: boolean;
}

interface EditTableProps {
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

export default function RoleTable({ data }: EditTableProps) {
  const diskette = (
    <div className="flex h-full w-full flex-row items-center">
      <Image
        width={13}
        height={13}
        className="object-contain"
        src={'/images/roles/diskette.png'}
        alt="edit"
      />
    </div>
  );
  // Function to handle permission toggle
  const handlePermissionChange = (
    itemKey: string,
    permissionKey: keyof Permission,
  ) => {
    const newData = data.map((item) => {
      if (item.key === itemKey) {
        return { ...item, [permissionKey]: !item[permissionKey] };
      }
      return item;
    });
    // Here you would typically update the state or context, or perform an API call
    console.log(newData); // For demonstration
  };

  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="pb-8">
          <h1 className="text-base font-medium">Role Permissions</h1>
        </div>
        <Table
          isHeaderSticky
          aria-label="Editable Permissions Table"
          classNames={{
            base: 'max-h-[520px] overflow-scroll',
            table: 'min-h-[400px]',
            wrapper: 'shadow-none mx-4 p-0 max-sm:mx-0',
            th: 'h-12',
            tr: 'border-b-[1px] border-[#F4F4F5]',
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.key}>
                {columns.map((column) => (
                  <TableCell key={`${item.key}-${column.key}`}>
                    {column.key === 'Permissions' ? (
                      item.Permissions
                    ) : (
                      <Checkbox
                        checked={
                          item[column.key as keyof Permission] as boolean
                        }
                        onChange={() =>
                          handlePermissionChange(
                            item.key,
                            column.key as keyof Permission,
                          )
                        }
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end pt-8">
        <Button
          color="primary"
          className="mb-4 h-8 rounded px-5 text-xs"
          endContent={diskette}
        >
          Save Role
        </Button>
      </div>
    </div>
  );
}
