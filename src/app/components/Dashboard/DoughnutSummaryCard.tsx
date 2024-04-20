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
    <div className='rounded-md shadow-sm border border-b-black px-12 py-8 pb-16 flex justify-between gap-12 max-md:flex-col max-sm:w-full min-h-[390px] max-w-[500px]'>
      <div className='flex flex-col justify-between gap-y-8'>
        <div>
          <p className="text-xl font-semibold">Total {title}</p>
          <p className="mt-1 text-4xl font-bold">{total}</p>
          <p className="mt-3 text-xs text-zinc-500">
            Services distribution on districts <br />
            Last modified - {lastModified}
          </p>
        </div>
        <ChartLabelsList colors={colors} labels={labels} />
      </div>
      <div className="self-center md:self-end w-32 h-32 sm:w-52 sm:h-52">
        <DoughnutChart labels={labels} stats={stats} colors={colors} />
      </div>
    </div>
  );
};

export default PieSummaryCard;
