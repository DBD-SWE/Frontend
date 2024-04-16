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
    <div className="flex items-center justify-center">
      {/* <DoughnutSummaryCard
        title="Services"
        total={216}
        lastModified="Jan 8, 2024"
        stats={[200, 40, 20]}
        labels={['Blat', 'Amchit', 'Mastita']}
        colors={['#ff0000', '#3d85c6', '#f4cccc']}
      /> */}
      <ActivityLog />
    </div>
  );
}
