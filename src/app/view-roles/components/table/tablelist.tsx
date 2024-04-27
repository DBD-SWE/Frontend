interface Permission {
  key: string;
  Permissions: string;
  Read: string;
  Create: string;
  Update: string;
  Delete: string;
}

const mockData: Permission[] = [
  {
    key: '1',
    Permissions: 'User Management',
    Read: 'Yes',
    Create: 'Yes',
    Update: 'Yes',
    Delete: 'No',
  },
  {
    key: '2',
    Permissions: 'Role Management',
    Read: 'Yes',
    Create: 'No',
    Update: 'No',
    Delete: 'No',
  },

  {
    key: '3',
    Permissions: 'Guest Houses Management',
    Read: 'Yes',
    Create: 'No',
    Update: 'Yes',
    Delete: 'No',
  },
  {
    key: '4',
    Permissions: 'Attractions Management',
    Read: 'No',
    Create: 'Yes',
    Update: 'No',
    Delete: 'Yes',
  },
  {
    key: '5',
    Permissions: 'Dashboard Management',
    Read: 'Yes',
    Create: 'No',
    Update: 'Yes',
    Delete: 'No',
  },
  {
    key: '6',
    Permissions: 'Activity Log Management',
    Read: 'Yes',
    Create: 'Yes',
    Update: 'No',
    Delete: 'Yes',
  },
];

export default mockData;
