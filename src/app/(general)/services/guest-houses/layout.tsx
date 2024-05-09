import { Button } from '@nextui-org/react';
import { PageTitle, SubTitle } from '@/(general)/components/text';

export default function GuestHousesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>Guest Houses</PageTitle>
          <SubTitle content={['Services', '○', 'Guest Houses']} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      {children}
    </div>
  );
}