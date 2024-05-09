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
import { ChevronDownIcon } from './ChevronDownIcon';
import { SearchIcon } from './SearchIcon';
import Image from 'next/image';
import { ActivityLog, StatusOptions, TableColumnType } from '@/lib/types';

function formatDateTime(isoString: string): string {
  // Create a new Date object from the ISO string
  const date = new Date(isoString);

  // Custom function to format the date as "24 Jun 2024"
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Custom function to format the time as "8:43 PM"
  const formatTime = (date: Date): string => {
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    const isPM = hour >= 12;
    const formattedHour = (hour % 12 === 0 ? 12 : hour % 12).toString();
    return `${formattedHour}:${minute} ${isPM ? 'PM' : 'AM'}`;
  };

  // Combine formatted date and time
  return `${formatDate(date)}, ${formatTime(date).toLowerCase()}`;
}
const icons: {
  [key: string]: { border: string; icon: string };
} = {
  'guest-house': {
    border: 'border-[#A7141C]',
    icon: '/icons/house.png',
  },
  attraction: {
    border: 'border-[#2ECC71]',
    icon: '/icons/location.png',
  },
  user: {
    border: 'border-[#2463EB]',
    icon: '/icons/user-2.png',
  },
  other: {
    border: 'border-black',
    icon: '/icons/other.png',
  },
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

interface BanStatusProperties {
  bg: string; // Extend or modify as necessary based on the ChipProps['color'] type
  text: string;
}

const statusMap: Record<string, BanStatusProperties> = {
  failed: { bg: 'bg-red-50', text: 'text-red-400' },
  success: { bg: 'bg-green-50', text: 'text-green-400' },
};

type statusColor =
  | 'primary'
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | undefined;

const INITIAL_VISIBLE_COLUMNS = [
  'name',
  'action',
  'ip_address',
  'status',
  'time',
];

type User = ActivityLog;

type Props = {
  activityLogs: ActivityLog[];
  columns: TableColumnType[];
  statusOptions: StatusOptions[];
};

export default function AdvancedTable({
  activityLogs,
  columns,
  statusOptions,
}: Props) {
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

  const pages = Math.ceil(activityLogs.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...activityLogs];

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
  }, [activityLogs, filterValue, statusFilter]);

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
            name={user.name}
          ></User>
        );
      case 'action':
        let actionStyle = icons[user['content_type']]
          ? icons[user['content_type']]
          : icons['other'];

        return (
          <div className="flex items-center">
            <div
              className={`${actionStyle.border} flex h-[20px] w-[20px] flex-row items-center justify-center rounded-full border-[1px]`}
            >
              <Image
                width={10}
                height={10}
                src={actionStyle.icon}
                alt="action icon"
                className="object-contain"
              />
            </div>
            <p className="rounded border-[1px] border-transparent px-3 py-1 font-medium">
              {cellValue}
            </p>
          </div>
        );
      case 'status':
        return (
          <div
            className={`flex w-[60px] flex-row items-center justify-center gap-1 py-1 ${statusMap[(cellValue as any as string).toLowerCase()].bg} rounded capitalize text-default-600`}
          >
            <p
              className={`text-xs ${statusMap[(cellValue as any as string).toLowerCase()].text}`}
            >
              {cellValue}
            </p>
          </div>
        );
      case 'time':
        return formatDateTime(cellValue as string);
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
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {activityLogs.length} logs
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
    activityLogs.length,
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
