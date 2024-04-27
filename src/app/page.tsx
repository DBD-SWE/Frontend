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

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>Dashboard</PageTitle>
          <SubTitle content={['Dashboard']} />
        </div>
        <Button color="primary" className="h-8 rounded px-4 text-sm">
          Download
        </Button>
      </div>
      <div className="flex w-full flex-col">
        <SummaryCardsList />
        <div className="w-full flex flex-col gap-8 mb-4 xl:flex-row">
          <DoughnutSummaryCard
            title="Summary"
            total={100}
            lastModified="15th, Jan, 2024"
            labels={['First', 'Second', 'Third']}
            stats={[30, 40, 30]}
            colors={['#FF0000', '#00FF00', '#0000FF']}
          />
          <ActivityLog />
        </div>
      </div>
    </div>
  );
}
