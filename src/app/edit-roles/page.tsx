import { PageTitle, SubTitle } from '@/components/text';
import { RoleName, EditTable } from './components/index';
export default function EditRoles() {
  const mockPermissions = [
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
  

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col">
        <PageTitle>Roles & Permissions</PageTitle>
        <SubTitle
          content={[
            'Administrator Role',
            '○',
            'Detailed Permissions ',
            '○',
            'Edit',
          ]}
        />
      </div>
      <div>
        <RoleName defaultRoleName="Administrator" />
      </div>
      <div>
        <EditTable  data={mockPermissions}/>
      </div>
    </div>
  );
}
