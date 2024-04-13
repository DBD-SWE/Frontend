import Image from 'next/image';
import React from 'react';

type Props = {
  title: string; // Title of the summary card
  amount: number; // Amount to be displayed
  lastModified: string; // Last modified date/time
  color: string; // Color theme for certain elements in the card
  icon: string; // Icon image source
};

const SummaryCard = ({ title, amount, lastModified, color, icon }: Props) => {
  return (
    <div className="flex h-full min-w-64 flex-col items-center">
      <div className="flex w-full items-start justify-between space-x-24 rounded-xl px-6 py-10 shadow-xl md:space-x-0">
        <div>
          <p className="mb-4 text-base font-bold sm:text-base">Total {title}</p>
          <p
            className={`text-[${color}] mb-2 text-2xl font-extrabold sm:text-4xl`}
          >
            {amount}
          </p>
          <p className="text-[.6rem] opacity-60">
            Last modified - {lastModified}
          </p>
        </div>
        <Image src={icon} alt={title} width={30} height={30} />
      </div>
      <div className={`h-[4px] w-[95%] rounded-full bg-[${color}]`}></div>
    </div>
  );
};

export default SummaryCard;
