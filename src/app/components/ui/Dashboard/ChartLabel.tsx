import React from 'react';

type Props = {
  color: string;
  title: string;
};

const ChartLabel = ({ color, title }: Props) => {
  console.log(color);
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={`rounded-full h-4 w-4 bg-[${color}]`}></div>
      <p>{title}</p>
    </div>
  );
};

export default ChartLabel;
