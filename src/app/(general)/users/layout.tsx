import { Button } from '@nextui-org/react';
import { PageTitle, SubTitle } from '@/(general)/components/text';

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users', '○', 'Users List']} />
        </div>
        <Button isDisabled color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      {/* Table Section */}
      {children}
    </div>
  );
}
