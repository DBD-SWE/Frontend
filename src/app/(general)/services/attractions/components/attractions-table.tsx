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
import { Attraction, TableColumnType } from '@/lib/types';
import Link from 'next/link';

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

const INITIAL_VISIBLE_COLUMNS = ['name', 'actions'];

type Props = {
  attractions: Attraction[];
  columns: TableColumnType[];
};

export default function App({ attractions, columns }: Props) {
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

  const pages = Math.ceil(attractions.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid),
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredAttractions = [...attractions];

    if (hasSearchFilter) {
      filteredAttractions = filteredAttractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    return filteredAttractions;
  }, [filterValue, hasSearchFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Attraction, b: Attraction) => {
      const first = a[sortDescriptor.column as keyof Attraction] as number;
      const second = b[sortDescriptor.column as keyof Attraction] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (attraction: Attraction, columnKey: React.Key) => {
      const cellValue = attraction[columnKey as keyof Attraction];

      switch (columnKey) {
        case 'name':
          return (
            <User
              avatarProps={{
                radius: 'full',
                size: 'sm',
                src: attraction.images[0],
                showFallback: true,
                fallback: (
                  <div className="flex h-full w-full items-center justify-center">
                    <h1 className="text-xs font-semibold text-black">
                      {attraction.name
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
              description={attraction.address}
              name={cellValue}
            >
              {attraction.address}
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
                    href={`/services/attractions/${attraction.id}`}
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
            <Link href="/services/attractions/create">
              <Button
                className="rounded bg-foreground text-background"
                endContent={<PlusIcon />}
                size="sm"
              >
                Create Attraction
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {attractions.length} users
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
      <TableBody emptyContent={'No attraction found'} items={sortedItems}>
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
