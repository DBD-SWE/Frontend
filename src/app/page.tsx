import React, { useState } from 'react';
import Image from 'next/image';
import SummaryCardsList from './components/Dashboard/SummaryCardsList';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './components/Dashboard/DoughnutChart';
import ChartLabelsList from './components/Dashboard/ChartLabelsList';
import DoughnutSummaryCard from './components/Dashboard/DoughnutSummaryCard';
import ActivityLog from './components/Dashboard/ActivityLog';

// make the label circle
export default function Home() {
  return (
    <div className="px-2 sm:px-12 py-12 flex flex-col gap-12">
      <SummaryCardsList />
      <div className='flex gap-12 max-md:flex-col'>
        <DoughnutSummaryCard
          title="Test"
          total={100}
          lastModified="21, Jan 2022"
          labels={['First', 'Second', 'Third']}
          stats={[20, 30, 50]}
          colors={['red', 'blue', 'green']}
        />
        <ActivityLog />
      </div>
    </div>
  );
}
