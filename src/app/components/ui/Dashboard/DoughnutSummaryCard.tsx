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
    <div className="min-w-[80%] rounded-lg px-8 py-12 shadow-lg md:min-w-[500px]">
      <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
        <p className="text-xl font-semibold">Total {title}</p>
        <p className="mt-1 text-4xl font-bold">{total}</p>
        <p className="mt-3 text-xs opacity-60">
          Services distribution on districts <br />
          Last modified - {lastModified}
        </p>
      </div>
      <div className="mt-12 flex w-full flex-col items-center justify-between space-y-10 sm:mt-0 sm:flex-row sm:items-end sm:space-y-0">
        <ChartLabelsList colors={colors} labels={labels} />
        <div className="w-45 h-45 sm:h-40 sm:w-40">
          <DoughnutChart
            labels={labels}
            stats={stats}
            colors={colors}
          />
        </div>
      </div>
    </div>
  );
};

export default PieSummaryCard;
