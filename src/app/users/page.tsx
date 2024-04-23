import { PageTitle, SubTitle } from '@/components/ui/text';
import { DownloadButton } from '@/components/ui/button';
import AdvancedTable from '@/components/ui/table/guestHouses-table';

export default function Users() {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users']} />
        </div>
        <DownloadButton />
      </div>
      {/* Table Section */}
      <div className="mt-6">
        <AdvancedTable />
      </div>
    </div>
  );
}
