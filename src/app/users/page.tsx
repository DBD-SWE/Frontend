import { PageTitle, SubTitle } from '@/components/text';
import { DownloadButton } from '@/components/ui/button';

export default function Users() {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle>Users</SubTitle>
        </div>
        <DownloadButton />
      </div>
    </div>
  );
}
