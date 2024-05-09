'use client';
import { Button } from '@nextui-org/react';
import { PageTitle, SubTitle } from '@/(general)/components/text';
import { usePathname } from 'next/navigation';

export default function GuestHousesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  const pathArray = pathName.split('/');
  pathArray.shift();

  const subtitles = pathArray
    .map((path, index) => {
      return index < pathArray.length - 1 ? [path, '○'] : [path];
    })
    .flat();

  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>Guest Houses</PageTitle>
          <SubTitle content={subtitles} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      {children}
    </div>
  );
}
