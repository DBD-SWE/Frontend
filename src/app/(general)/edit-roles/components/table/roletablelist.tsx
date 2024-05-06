// src/constants/permissions.ts

export interface Permission {
    key: string;
    Permissions: string;
    Read: boolean;
    Create: boolean;
    Update: boolean;
    Delete: boolean;
  }
  
  export const mockPermissions: Permission[] = [
    {
      key: '1',
      Permissions: 'User Management',
      Read: true,
      Create: true,
      Update: true,
      Delete: false,
    },
    {
      key: '2',
      Permissions: 'Role Management',
      Read: true,
      Create: false,
      Update: false,
      Delete: false,
    },
    {
      key: '3',
      Permissions: 'Settings',
      Read: true,
      Create: true,
      Update: true,
      Delete: true,
    },
    {
      key: '4',
      Permissions: 'Guest Houses Management',
      Read: true,
      Create: false,
      Update: true,
      Delete: false,
    },
    {
      key: '5',
      Permissions: 'Attractions Management',
      Read: false,
      Create: true,
      Update: false,
      Delete: true,
    },
    {
      key: '6',
      Permissions: 'Dashboard Management',
      Read: true,
      Create: false,
      Update: true,
      Delete: false,
    },
    {
      key: '7',
      Permissions: 'Activity Log Management',
      Read: true,
      Create: true,
      Update: false,
      Delete: true,
    },
  ];
  