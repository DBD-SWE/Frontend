import React from 'react';
import { PageTitle, SubTitle } from '@/(general)/components/text';
import AdvancedTable from './components/guestHouses-table';
import { Button } from '@nextui-org/react';
import { getGuestHousesData } from '@/lib/actions/guestHouses';
import Link from 'next/link';
import { GuestHouse, TableColumnType } from '@/lib/types';

type Props = {};

const page = async (props: Props) => {
  const { data, message, status } = await getGuestHousesData();

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

  const tableData: GuestHouse[] = data?.guestHouses.map((entry: any) => {
    return {
      id: entry.id,
      name: entry.name,
      address: entry.district.name,
      coordinates: `${entry.location_coordinates_lat}, ${entry.location_coordinates_long}`,
      description: entry.description,
      bathrooms: entry.number_of_bathrooms,
      bedrooms: entry.number_of_bedrooms,
      rating: entry.rating,
      accessibility: entry.accessibility ? 'Accessible' : 'Not Accessible',
      images: entry.images,
    };
  });

  const tableColumns: TableColumnType[] = [
    { name: 'Name', uid: 'name', sortable: true },
    { name: 'Bathrooms', uid: 'bathrooms', sortable: true },
    { name: 'Bedrooms', uid: 'bedrooms', sortable: true },
    { name: 'Rating', uid: 'rating', sortable: true },
    { name: 'Accessibility', uid: 'accessibility', sortable: true },
    { name: 'actions', uid: 'actions' },
  ];

  return (
    <div className="my-12">
      <AdvancedTable guestHouses={tableData} columns={tableColumns} />
    </div>
  );
};

export default page;
