import React from 'react';
import ChartLabel from './ChartLabel';

type Props = {
  colors: string[];
  labels: string[];
};

const ChartLabels = ({ colors, labels }: Props) => {
  return (
    <div className='flex justify-between space-x-4'>
      {labels.map((label, index) => (
        <ChartLabel key={label} color={colors[index]} title={label} />
      ))}
    </div>
  );
};

export default ChartLabels;
