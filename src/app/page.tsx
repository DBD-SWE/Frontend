import { useState } from 'react';
import Image from 'next/image';
import SummaryCardsList from './components/ui/Dashboard/SummaryCardsList';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './components/ui/Dashboard/DoughnutChart';
import ChartLabel from './components/ui/Dashboard/ChartLabel';

// make the label circle
export default function Home() {
  return (
    <div className="flex items-center justify-center">
      {/* <SummaryCardsList /> */}
      {/* <DoughnutChart
        labels={['Task', 'Blue', 'Yellow']}
        stats={[300, 50, 100]}
        colors={['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)']}
      /> */}
      <ChartLabel />
    </div>
  );
}
