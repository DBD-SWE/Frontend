import DeleteCard from './components/card/deletecard';
import ViewCard from './components/card/viewcard';
import roles from '@/roles/components/card/rolecardlist'; // Make sure the import path is correct
import ViewTable from './components/table/viewtable';
import mockData from './components/table/tablelist';
import { PageTitle, SubTitle } from '@/components/text';

export default function ViewRoles() {
  const firstRole = roles[0]; // Get the first element from the roles array
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col">
        <PageTitle>Roles & Permissions</PageTitle>
        <SubTitle
          content={['Administrator Role', '○', 'Detailed Permissions ']}
        />
      </div>
      {/* Body Section */}
      <div className="py-10">
        <div className="pb-8">
          <ViewCard
            iconName={firstRole.iconName}
            roleName={firstRole.roleName}
            userCount={firstRole.userCount}
            listItems={firstRole.listItems}
            borderColor={firstRole.borderColor}
            bulletColor={firstRole.bulletColor}
          />
        </div>
        <div className="mt-4 rounded border-t-[16px] border-t-gray-100 px-4 py-7 shadow-sm">
          <ViewTable data={mockData} />
        </div>
        <div className="mb-4 mt-8">
          <DeleteCard roleName={firstRole.roleName} />
        </div>
      </div>
    </div>
  );
}
