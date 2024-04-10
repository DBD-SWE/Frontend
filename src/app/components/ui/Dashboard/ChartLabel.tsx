import React from 'react';

type Props = {
  color: string;
  title: string;
};

const ChartLabel = ({ color, title }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={`h-4 w-4 bg-[${color}] rounded-full]`}></div>
      <p>{title}</p>
    </div>
  );
};

export default ChartLabel;
