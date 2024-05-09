import AdvancedTable from '@/(general)/components/table/users-table';
import { getUsers } from '@/lib/actions/users';
import { TableColumnType, User } from '@/lib/types';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default async function Users() {
  const { data, message, status } = await getUsers();

  if (status === 'error') {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{message}</p>
        <Link href="/users">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  const roleMap = {
    1: 'Administrator',
    2: 'Developer',
    3: 'Support',
    4: 'Data Entry',
    5: 'Other',
  };

  const tableData: User[] = data?.users.map((entry: any) => {
    return {
      id: entry.id,
      name: entry.user_info
        ? entry.user_info.first_name + ' ' + entry.user_info.last_name
        : 'Unknown',
      role: roleMap[entry.type],
      status: entry.invited ? 'Not Verified' : 'Verified',
      avatar: entry.user_info ? entry.user_info.image : '',
      ban: entry.banned ? 'Active' : 'Inactive',
      email: entry.email,
    };
  });

  const tableColumns: TableColumnType[] = [
    { name: 'Name', uid: 'name', sortable: true },
    { name: 'Role', uid: 'role', sortable: true },
    { name: 'Status', uid: 'status', sortable: true },
    { name: 'Avatar', uid: 'avatar', sortable: true },
    { name: 'Ban', uid: 'ban', sortable: true },
    { name: 'Email', uid: 'email', sortable: true },
    { name: 'actions', uid: 'actions' },
  ];

  const statusOptions = [
    { name: 'Verified', uid: 'verified', color: 'success' },
    { name: 'Not Verified', uid: 'unverified', color: 'warning' },
  ];

  const bannedOptions = [
    { name: 'Active', uid: 'active', color: 'success' },
    { name: 'Banned', uid: 'banned', color: 'danger' },
  ];

  return (
    <div className="my-12 flex w-full flex-col">
      <AdvancedTable
        users={tableData}
        columns={tableColumns}
        statusOptions={statusOptions}
        bannedOptions={bannedOptions}
      />
    </div>
  );
}
