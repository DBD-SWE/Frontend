import React from 'react';
import { PageTitle, SubTitle } from '@/components/text';
import AdvancedTable from './components/attractions-table';
import { Button } from '@nextui-org/react';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>Attractions</PageTitle>
          <SubTitle content={['Services', '○', 'Attractions']} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      <div className="my-12">
        <AdvancedTable />
      </div>
    </div>
  );
};

export default page;
