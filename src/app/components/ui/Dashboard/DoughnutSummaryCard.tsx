import React from 'react';
import ChartLabelsList from './ChartLabelsList';
import DoughnutChart from './DoughnutChart';

type Props = {};

const PieSummaryCard = (props: Props) => {
  return (
    <div className="min-w-[80%] rounded-lg px-8 py-12 shadow-lg md:min-w-[500px]">
      <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
        <p className="text-xl font-semibold">Total Services</p>
        <p className="mt-1 text-4xl font-bold">216</p>
        <p className="mt-3 text-xs opacity-60">
          Services distribution on districts <br />
          Last modified - Jan 8, 2024
        </p>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-between space-y-10 sm:mt-0 sm:flex-row sm:items-end sm:space-y-0">
        <ChartLabelsList />
        <div className="w-45 h-45 sm:h-40 sm:w-40">
          <DoughnutChart
            labels={['Task', 'Blue', 'Yellow']}
            stats={[300, 50, 100]}
            colors={[
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PieSummaryCard;
