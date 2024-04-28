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
        className="flex w-full items-start justify-between space-x-24 rounded-t px-4 py-6 shadow-sm max-sm:px-4 md:space-x-0 md:py-8"
        style={{ borderBottom: `2px solid ${color}` }}
      >
        <div>
          <p className="mb-6 text-sm font-medium max-sm:mb-1 sm:text-sm">
            Total {title}
          </p>
          <p
            className={`mb-1 text-2xl font-bold sm:text-4xl`}
            style={{ color: color }}
          >
            +{amount}
          </p>
          <p className="text-[.6rem] font-light text-zinc-500">
            Last modified - {lastModified}
          </p>
        </div>
        <Image
          className="object-contain"
          src={icon}
          alt={title}
          width={17}
          height={17}
        />
      </div>
    </div>
  );
};

export default SummaryCard;
