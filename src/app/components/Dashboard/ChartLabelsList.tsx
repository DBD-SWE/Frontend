import React from 'react';
import ChartLabel from './ChartLabel';

type Props = {
  colors: string[];
  labels: string[];
};

const ChartLabels = ({ colors, labels }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {labels.map((label, index) => (
        <ChartLabel key={label} color={colors[index]} title={label} />
      ))}
    </div>
  );
};

export default ChartLabels;
