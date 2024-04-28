import React, { useState } from 'react';
import Image from 'next/image';
import SummaryCardsList from './components/Dashboard/SummaryCardsList';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './components/Dashboard/DoughnutChart';
import ChartLabelsList from './components/Dashboard/ChartLabelsList';
import DoughnutSummaryCard from './components/Dashboard/DoughnutSummaryCard';
import ActivityLog from './components/Dashboard/ActivityLog';
import { PageTitle, SubTitle } from './components/text';
import { Button } from '@nextui-org/react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import TabsComponent from './components/Dashboard/Tabs';

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
        <div className="mb-4 flex w-full flex-col gap-8 2xl:flex-row">
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
