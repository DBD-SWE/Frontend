import { PageTitle, SubTitle } from '@/(general)/components/text';
import { RoleName, EditTable } from './components/index';
import { mockPermissions } from './components/table/roletablelist';

export default function EditRoles() {
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
      <RoleName defaultRoleName="Administrator" />
      <div className="pt-12">
        <EditTable data={mockPermissions} />
      </div>
    </div>
  );
}
