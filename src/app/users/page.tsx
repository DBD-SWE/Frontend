import { PageTitle, SubTitle } from '@/components/text';
import { Button } from '@nextui-org/react';
import AdvancedTable from '@/components/table/users-table';


export default function Users() {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users', '○', 'Users List']} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      {/* Table Section */}
      <div className="my-12 flex w-full flex-col">
        <AdvancedTable />
      </div>
    </div>
  );
}
