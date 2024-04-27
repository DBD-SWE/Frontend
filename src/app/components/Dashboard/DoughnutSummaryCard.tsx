import React from 'react';
import ChartLabelsList from './ChartLabelsList';
import DoughnutChart from './DoughnutChart';

// Define the properties for the PieSummaryCard component
type Props = {
  title: string; // The title of the card
  total: number; // The total number to be displayed
  lastModified: string; // The last modified date
  labels: string[]; // The labels for the doughnut chart
  stats: number[]; // The statistics for the doughnut chart
  colors: string[]; // The colors for the doughnut chart
};

const PieSummaryCard = ({
  title,
  total,
  lastModified,
  labels,
  stats,
  colors,
}: Props) => {
  return (
    <div className="flex w-full sm:justify-between max-sm:gap-4 rounded-md border border-b-black max-sm:px-4 py-8 pb-10 shadow-sm flex-col max-sm:py-4 px-4">
      <div className="flex w-full flex-col">
        <div className="w-full">
          <p className="text-xl font-semibold max-sm:text-lg">Total {title}</p>
          <p className="mt-1 text-4xl font-bold max-sm:mt-0 max-sm:text-3xl">
            {total}
          </p>
          <p className="mt-3 text-xs text-zinc-500 max-sm:mt-0">
            Services distribution on districts <br />
            Last modified - {lastModified}
          </p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className="self-center ">
          <ChartLabelsList colors={colors} labels={labels} />
        </div>
        <div className="h-40 w-40 self-center sm:h-80 sm:w-80 md:self-end max-sm:pb-2">
          <DoughnutChart labels={labels} stats={stats} colors={colors} />
        </div>
      </div>
      {/* <div className="sm:hidden">
        <ChartLabelsList colors={colors} labels={labels} />
      </div> */}
    </div>
  );
};

export default PieSummaryCard;
