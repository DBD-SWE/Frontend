'use client';
import React from 'react';
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

export default function EditTable({ data }: EditTableProps) {
  // Function to handle permission toggle
  const handlePermissionChange = (itemKey: string, permissionKey: keyof Permission) => {
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
    <div>
      {/* <Button
        color="primary"
        className="mb-4 h-8 w-full rounded px-5 text-xs sm:w-auto sm:shrink-0"
      >
        Save Changes
      </Button> */}
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
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
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
                      checked={item[column.key as keyof Permission] as boolean}
                      onChange={() => handlePermissionChange(item.key, column.key as keyof Permission)}
                    />
                  )}
                </TableCell>
              ))}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
