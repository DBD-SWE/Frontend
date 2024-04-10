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
    <div className="h-full flex flex-col items-center min-w-72">
      <div className="w-full flex items-start justify-between rounded-xl space-x-24 md:space-x-0 px-6 py-10 shadow-xl">
        <div>
          <p className="mb-4 text-base sm:text-base font-bold">Total {title}</p>
          <p className={`text-[${color}] mb-2 text-2xl sm:text-4xl font-extrabold`}>
            {amount}
          </p>
          <p className="text-[.6rem] opacity-60">Last modified - {lastModified}</p>
        </div>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className={`h-[4px] w-[95%] rounded-full bg-[${color}]`}></div>
    </div>
  );
};

export default SummaryCard;
