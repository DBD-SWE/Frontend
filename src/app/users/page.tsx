import { PageTitle, SubTitle } from '@/components/text';
import { Button } from '@nextui-org/react';

export default function Users() {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle>Users</SubTitle>
        </div>
        {/* <Button>Download</Button> */}
      </div>
    </div>
  );
}
