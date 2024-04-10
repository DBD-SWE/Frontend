import React from 'react';
import ChartLabel from './ChartLabel';

type Props = {};

const ChartLabels = (props: Props) => {
  const data = [
    { color: '#FF0000', title: 'Blat' },
    { color: '#FF0000', title: 'Blat' },
    { color: '#FF0000', title: 'Blat' },
    { color: '#FF0000', title: 'Blat' },
    { color: '#FF0000', title: 'Blat' },
    { color: '#FF0000', title: 'Blat' },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.map((item, index) => (
        <ChartLabel key={index} color={item.color} title={item.title} />
      ))}
    </div>
  );
};

export default ChartLabels;
