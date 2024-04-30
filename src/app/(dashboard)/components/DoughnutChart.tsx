'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2'; // A React wrapper for Chart.js 2
import {
  Chart as ChartJS, // The core of Chart.js
  ArcElement, // Arc elements are used to represent the data in a doughnut chart
  Tooltip, // Tooltips show information about a specific data point
  Legend, // The legend helps users understand the charted data
  DoughnutController, // The controller for doughnut type charts
} from 'chart.js';

// Registering the components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

type Props = {
  labels: string[]; // Labels for the doughnut chart sectors
  stats: number[]; // Data for the doughnut chart sectors
  colors: string[]; // Colors for the doughnut chart sectors
};

const DoughnutChart = ({ labels, stats, colors }: Props) => {
  // Preparing the data for the Doughnut chart
  const data = {
    labels: labels,
    datasets: [
      {
        data: stats,
        backgroundColor: colors,
        hoverOffset: 7, // Offset to enlarge sectors on hover
      },
    ],
  };

  return (
    <div className="h-full w-full">
      <Doughnut
        data={data}
        options={{
          animation: {
            duration: 2000,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
