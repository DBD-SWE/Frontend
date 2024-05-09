import AdvancedTable from '@/(general)/components/table/activity-log/activity-log';
import { getActivitiesLog } from '@/lib/actions/activityLog';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default async function ActivityLog() {
  const { data, message, status } = await getActivitiesLog();

  if (status === 'error') {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{message}</p>
        <Link href="/activity-log">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  const columns = [
    { name: 'Name', uid: 'name', sortable: true },
    { name: 'Action', uid: 'action', sortable: true },
    { name: 'Ip Address', uid: 'ip_address', sortable: true },
    { name: 'Status', uid: 'status', sortable: true },
    { name: 'Time', uid: 'time' },
  ];

  const statusOptions = [
    { name: 'Success', uid: 'success', color: 'success' },
    { name: 'Failed', uid: 'failed', color: 'danger' },
  ];
  // {
  //   action: 'Login',
  //   ip_address: '192.168.1.1',
  //   status: 'Success',
  //   time: '2023-04-28T14:22:30Z',
  //   id: 1,
  //   content_type: 'user',
  //   user: {
  //     id: 1,
  //     name: 'Tony Reichert',
  //     role: 'Administrator',
  //     team: 'Management',
  //     status: 'Verified',
  //     age: '29',
  //     avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  //     ban: 'Active',
  //     email: 'tony.reichert@example.com',
  //   },
  // },
  // {
  //   id: 346,
  //   actor: 1,
  //   actor_ip: '127.0.0.1',
  //   action_type: 'Read',
  //   action_time: '2024-05-09T19:14:53.482406Z',
  //   remarks: 'User: jean.paul.bassil@outlook.com -- Action Type: Read -- Path: /activitylog/ -- Path Name: activitylog-list',
  //   status: 'Success',
  //   content_type: null,
  //   object_id: null,
  //   content_object: null
  // }

  const tableData = data?.activities.map((activity: any) => {
    return {
      id: activity.id,
      name: activity.actor,
      action: activity.action_type,
      ip_address: activity.actor_ip,
      status: activity.status,
      time: new Date(activity.action_time).toLocaleString(),
    };
  });
  return (
    <div className="my-12 flex w-full flex-col">
      <AdvancedTable
        activityLogs={tableData}
        columns={columns}
        statusOptions={statusOptions}
      />
    </div>
  );
}
