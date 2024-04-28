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
    <div className="flex h-full flex-col items-center">
      <div
        className="flex w-full items-start justify-between space-x-24 rounded-t px-6 py-6 shadow-sm max-sm:px-4 md:space-x-0 md:py-6"
        style={{ borderBottom: `2px solid ${color}` }}
      >
        <div>
          <p className="mb-4 text-sm font-semibold max-sm:mb-1 sm:text-base">
            Total {title}
          </p>
          <p
            className={`mb-1 text-2xl font-bold sm:text-4xl`}
            style={{ color: color }}
          >
            {amount}
          </p>
          <p className="text-[.6rem] text-zinc-500">
            Last modified - {lastModified}
          </p>
        </div>
        <Image src={icon} alt={title} width={20} height={20} />
      </div>
    </div>
  );
};

export default SummaryCard;
