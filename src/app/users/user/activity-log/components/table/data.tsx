const columns = [
  { name: 'Action', uid: 'action', sortable: true },
  { name: 'Ip Address', uid: 'ip_address', sortable: true },
  { name: 'Status', uid: 'status', sortable: true },
  { name: 'Time', uid: 'time' },
];

const statusOptions = [
  { name: 'Success', uid: 'success', color: 'success' },
  { name: 'Failed', uid: 'failed', color: 'danger' },
];

const activityLogs = [
  {
    action: 'Login',
    ip_address: '192.168.1.1',
    status: 'Success',
    time: '2023-04-28T14:22:30Z',
    id: 1,
  },
  {
    action: 'Failed Login Attempt',
    ip_address: '192.168.1.2',
    status: 'Failed',
    time: '2023-04-28T14:25:10Z',
    id: 2,
  },
  {
    action: 'Viewed Report',
    ip_address: '192.168.1.3',
    status: 'Success',
    time: '2023-04-28T15:00:00Z',
    id: 3,
  },
  {
    action: 'Logout',
    ip_address: '192.168.1.1',
    status: 'Success',
    time: '2023-04-28T16:18:45Z',
    id: 4,
  },
  {
    action: 'Updated Profile',
    ip_address: '192.168.1.4',
    status: 'Success',
    time: '2023-04-28T16:45:20Z',
    id: 5,
  },
];

export { columns, activityLogs, statusOptions };
