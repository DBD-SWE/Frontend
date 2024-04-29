import { PageTitle, SubTitle } from '@/components/text';
import { RoleName } from './components/index';
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
      <div>
        <RoleName 
        defaultRoleName='Administrator'
        />
      </div>
    </div>
  );
}
