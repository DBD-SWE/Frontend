import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  amount: number;
  lastModified: string;
  color: string;
  icon: string;
};

const SummaryCard = ({ title, amount, lastModified, color, icon }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start justify-between space-x-24 rounded-xl p-8 shadow-lg">
        <div>
          <p className="mb-4 text-base sm:text-xl font-bold">Total {title}</p>
          <p className={`text-[${color}] mb-2 text-2xl sm:text-5xl font-extrabold`}>
            {amount}
          </p>
          <p className="text-xs sm:text-base opacity-60">Last modified - {lastModified}</p>
        </div>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className={`h-[4px] w-[95%] rounded-full bg-[${color}]`}></div>
    </div>
  );
};

export default SummaryCard;
