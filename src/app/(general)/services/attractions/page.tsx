import React from 'react';
import AdvancedTable from './components/attractions-table';
import { getAttractionsData } from '@/lib/actions/attractions';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Attraction, TableColumnType } from '@/lib/types';

type Props = {};

const page = async (props: Props) => {
  const { data, message, status } = await getAttractionsData();

  if (status === 'error') {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{message}</p>
        <Link href="/services/guest-houses">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  const attractions: Attraction[] = data?.attractions.map((entry: any) => {
    return {
      id: entry.id,
      name: entry.name,
      address: entry.district.name,
      images: entry.images,
    };
  });

  const attractionsColumns: TableColumnType[] = [
    { name: 'Name', uid: 'name', sortable: true },
    { name: 'Actions', uid: 'actions' },
  ];

  return (
    <div className="my-12">
      <AdvancedTable attractions={attractions} columns={attractionsColumns} />
    </div>
  );
};

export default page;
