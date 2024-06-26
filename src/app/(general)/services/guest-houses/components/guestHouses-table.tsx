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
  User,
  Pagination,
  Selection,
  SortDescriptor,
} from '@nextui-org/react';
import { PlusIcon } from '../../../../../../public/icons/jsx/PlusIcon';
import { VerticalDotsIcon } from '@/(general)/components/table/VerticalDotsIcon';
import { ChevronDownIcon } from '@/(general)/components/table/ChevronDownIcon';
import { SearchIcon } from '@/(general)/components/table/SearchIcon';
import Image from 'next/image';
import { GuestHouse, TableColumnType } from '@/lib/types';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const INITIAL_VISIBLE_COLUMNS = [
  'name',
  'address',
  'bathrooms',
  'bedrooms',
  'rating',
  'actions',
];

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

type Props = {
  guestHouses: GuestHouse[];
  columns: TableColumnType[];
};

export default function App({ guestHouses, columns }: Props) {
  const [categoryFilter, setCategoryFilter] = React.useState<Selection>('all');
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([]),
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS),
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'rating',
    direction: 'ascending',
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(guestHouses.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredGuestHouses = [...guestHouses];

    if (hasSearchFilter) {
      filteredGuestHouses = filteredGuestHouses.filter((guestHouse) =>
        guestHouse.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    // if (
    //   categoryFilter !== 'all' &&
    //   Array.from(categoryFilter).length !== statusOptions.length
    // ) {
    //   filteredGuestHouses = filteredGuestHouses.filter((guestHouse) =>
    //     Array.from(categoryFilter).includes(guestHouse.category),
    //   );
    // }
    return filteredGuestHouses;
  }, [filterValue, hasSearchFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: GuestHouse, b: GuestHouse) => {
      const first = a[sortDescriptor.column as keyof GuestHouse] as number;
      const second = b[sortDescriptor.column as keyof GuestHouse] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (guestHouse: GuestHouse, columnKey: React.Key) => {
      const cellValue = guestHouse[columnKey as keyof GuestHouse];

      switch (columnKey) {
        case 'accessibility':
          let bgColor = 'bg-red-50';
          let textColor = 'text-red-500';
          if (guestHouse.accessibility === 'Accessible') {
            bgColor = 'bg-green-50';
            textColor = 'text-green-500';
          }
          return (
            <div
              className={`flex w-[100px] flex-row items-center justify-center gap-1 py-1 ${bgColor} rounded-full capitalize text-default-600`}
            >
              <p className={`text-xs ${textColor}`}>{cellValue}</p>
            </div>
          );
        case 'rating':
          return (
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  alt="star"
                  src={
                    i < guestHouse.rating
                      ? '/icons/star.png'
                      : '/icons/emptyStar.png'
                  }
                  width={10}
                  height={10}
                />
              ))}
            </div>
          );
        case 'name':
          return (
            <User
              avatarProps={{
                radius: 'full',
                size: 'sm',
                src: guestHouse.images[0],
              }}
              classNames={{
                description: 'text-default-500',
              }}
              description={guestHouse.address}
              name={cellValue}
            >
              {guestHouse.address}
            </User>
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
                  <DropdownItem
                    startContent={ViewIcon}
                    href={`/services/guest-houses/${guestHouse.id}`}
                  >
                    View
                  </DropdownItem>
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
          return (
            <div className="flex items-center justify-start">{cellValue}</div>
          );
      }
    },
    [],
  );

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
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Link href={`guest-houses/create`}>
              <Button
                className="rounded bg-foreground text-background"
                endContent={<PlusIcon />}
                size="sm"
              >
                Create Guest House
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {guestHouses.length} guest houses
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
  }, [filterValue, visibleColumns, onSearchChange, onRowsPerPageChange]);

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
      aria-label="Example table with custom cells, pagination and sorting"
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
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No guest house found'} items={sortedItems}>
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
