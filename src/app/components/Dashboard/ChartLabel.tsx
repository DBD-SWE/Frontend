import React from 'react';

type Props = {
  color: string;
  title: string;
};

const ChartLabel = ({ color, title }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-4 w-4 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p className='text-sm'>{title}</p>
    </div>
  );
};

export default ChartLabel;
