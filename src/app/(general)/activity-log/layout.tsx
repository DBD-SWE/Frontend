import { Button } from '@nextui-org/react';
import { PageTitle, SubTitle } from '@/(general)/components/text';

export default function ActivityLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>Activity Log</PageTitle>
          <SubTitle content={['Activity Log', '○', 'Activity Log Details']} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      {/* Table Section */}
      {children}
    </div>
  );
}
