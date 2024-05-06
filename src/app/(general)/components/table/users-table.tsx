'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from '@nextui-org/react';
import { PlusIcon } from '../../../../../public/icons/jsx/PlusIcon';
import { VerticalDotsIcon } from './VerticalDotsIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { SearchIcon } from './SearchIcon';
import { columns, users, statusOptions, bannedOptions } from './data';
import { capitalize } from './utils';
import Image from 'next/image';

const ViewIcon = (
  <Image
    src="/images/general/view.png"
    width={17}
    height={17}
    alt="View User"
  />
);
const EditIcon = (
  <Image
    src="/images/general/edit.png"
    width={17}
    height={17}
    alt="Edit User"
  />
);
const DeleteIcon = (
  <Image
    src="/images/general/delete-colored.png"
    width={17}
    height={17}
    alt="Delete User"
  />
);

const statusColorMap: Record<string, ChipProps['color']> = {
  Verified: 'success',
  'Not Verified': 'warning',
};

interface BanStatusProperties {
  bg: string; // Extend or modify as necessary based on the ChipProps['color'] type
  text: string;
}

const banColorMap: Record<string, BanStatusProperties> = {
  Banned: { bg: 'bg-red-50', text: 'text-red-400' },
  Active: { bg: 'bg-green-50', text: 'text-green-400' },
};

type statusColor =
  | 'primary'
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | undefined;

const INITIAL_VISIBLE_COLUMNS = ['name', 'role', 'status', 'actions'];

type User = (typeof users)[0];

const rolesImages: {
  [key: string]: { iconName: string; borderColor: string };
} = {
  Administrator: {
    iconName: '/images/roles/admin.svg',
    borderColor: 'border-blue-500',
  },
  Developer: {
    iconName: '/images/roles/developer.png',
    borderColor: 'border-green-500',
  },
  Support: {
    iconName: '/images/roles/support.png',
    borderColor: 'border-pink-500',
  },
  'Data Entry': {
    iconName: '/images/roles/dataentry.svg',
    borderColor: 'border-orange-500',
  },
  Other: {
    iconName: '/images/roles/user.png',
    borderColor: 'border-black',
  },
};

export default function AdvancedTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'age',
    direction: 'ascending',
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status),
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{
              radius: 'full',
              size: 'sm',
              src: user.avatar,
              showFallback: true,
              fallback: (
                <div className="flex h-full w-full items-center justify-center">
                  <h1 className="text-xs font-semibold text-black">
                    {user.name
                      .split(' ')
                      .map((name) => name[0])
                      .join('')}
                  </h1>
                </div>
              ),
            }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case 'role':
        let roleImage = rolesImages[cellValue as any as string]
          ? rolesImages[cellValue as any as string]
          : rolesImages['Other'];
        return (
          <div className="flex flex-col ">
            <div
              className={`flex w-[120px] flex-row items-center justify-start rounded-full   px-2 py-1`}
            >
              <div
                className={`${roleImage.borderColor} flex h-[20px] w-[20px] flex-row items-center justify-center rounded-full border-[1px]`}
              >
                <Image
                  width={13}
                  height={13}
                  src={roleImage.iconName}
                  alt="role icon"
                />
              </div>

              <p className="text-bold ml-2 text-xs capitalize">{cellValue}</p>
            </div>
          </div>
        );
      case 'status':
        return (
          <Chip
            className="gap-1 border-none capitalize text-default-600"
            color={statusColorMap[cellValue as any as string]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case 'ban':
        return (
          <div
            className={`flex w-[60px] flex-row items-center justify-center gap-1 py-1 ${banColorMap[cellValue as any as string].bg} rounded-full capitalize text-default-600`}
          >
            <p
              className={`text-xs ${banColorMap[cellValue as any as string].text}`}
            >
              {cellValue}
            </p>
          </div>
        );
      case 'actions':
        return (
          <div className="relative flex items-center justify-end gap-2">
            <Dropdown className="border-1 border-default-200 bg-background">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded">
                <DropdownItem startContent={ViewIcon}>View</DropdownItem>
                <DropdownItem startContent={EditIcon}>Edit</DropdownItem>
                <DropdownItem
                  startContent={DeleteIcon}
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [],
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            classNames={{
              base: 'w-full sm:max-w-[38%]',
              inputWrapper: ['border-1', 'rounded'],
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue('')}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  className="rounded"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Status"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    <Chip
                      className="gap-1 border-none"
                      color={status.color as statusColor}
                      size="sm"
                      variant="dot"
                    >
                      {status.name}
                    </Chip>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  className="rounded"
                >
                  Ban
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Ban Status"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {bannedOptions.map((bannedOption) => (
                  <DropdownItem key={bannedOption.uid} className="capitalize">
                    <Chip
                      className="gap-1 border-none"
                      color={bannedOption.color as statusColor}
                      size="sm"
                      variant="dot"
                    >
                      {bannedOption.name}
                    </Chip>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  className="rounded"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="rounded bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
            >
              Create User
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {users.length} users
          </span>
          <label className="flex items-center text-small text-default-400">
            Rows per page:
            <select
              className="bg-transparent text-small text-default-400 outline-none"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex items-center justify-between px-2 py-2">
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background',
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === 'all'
            ? 'All items selected'
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        // changing the rows border radius
        // first
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        // middle
        'group-data-[middle=true]:before:rounded-none',
        // last
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    [],
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Users Table"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: 'after:bg-foreground after:text-background text-background',
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {capitalize(column.name)}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
