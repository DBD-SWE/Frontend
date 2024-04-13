import React from 'react';

type Props = {
  color: string;
  title: string;
};

const ChartLabel = ({ color, title }: Props) => {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="h-4 w-4 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <p>{title}</p>
    </div>
  );
};

export default ChartLabel;
