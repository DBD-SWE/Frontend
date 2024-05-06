import React from 'react';
import SummaryCardsList from './components/SummaryCards';
import DoughnutSummaryCard from './components/DoughnutSummaryCard';
import ActivityLog from './components/ActivityLog';
import { PageTitle } from '@/(general)/components/text';
import { Button } from '@nextui-org/react';
import TabsComponent from './components/Tabs';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>General Dashboard</PageTitle>
          <TabsComponent />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      <div className="mt-1 flex w-full flex-col">
        <SummaryCardsList />
        <div className="mb-4 flex w-full flex-col gap-8 xl:flex-row">
          <DoughnutSummaryCard
            title="Services"
            total={216}
            lastModified="Jan 8, 2024"
            labels={['Blat', 'Amchit', 'Halat', 'Ehmej', 'Bchelleh']}
            stats={[25, 20, 15, 30, 10]}
            colors={['#FF0000', '#2ECC71', '#FFD767', '#2463EB', '#FF6B00']}
          />
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}
