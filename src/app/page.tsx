import React, { useState } from 'react';
import Image from 'next/image';
import SummaryCardsList from './_components/ui/Dashboard/SummaryCardsList';
import { Doughnut } from 'react-chartjs-2';
import DoughnutChart from './_components/ui/Dashboard/DoughnutChart';
import ChartLabelsList from './_components/ui/Dashboard/ChartLabelsList';
import DoughnutSummaryCard from './_components/ui/Dashboard/DoughnutSummaryCard';

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
    </div>
  );
}
