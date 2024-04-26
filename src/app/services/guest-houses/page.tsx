import React from 'react';
import { Title } from '../components';
import { PageTitle, SubTitle } from '@/components/text';
import { DownloadButton } from '@/components/button';
import AdvancedTable from '@/components/ui/table/guestHouses-table';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>Guest Houses</PageTitle>
          <SubTitle content={['Services', 'Guest Houses']} />
        </div>
        <DownloadButton />
      </div>
      <div className="mt-6">
        <AdvancedTable />
      </div>
    </div>
  );
};

export default page;
