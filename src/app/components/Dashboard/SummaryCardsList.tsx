import React from 'react';
import SummaryCard from './SummaryCard';

type Props = {};

const SummaryCardsList = (props: Props) => {
  const data = [
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Guest Houses',
      amount: 130,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
  ];
  return (
    <div className="grid auto-cols-max grid-flow-row grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 py-10">
      {data.map((item, index) => (
        <SummaryCard
          key={index}
          title={item.title}
          amount={item.amount}
          lastModified={item.lastModified}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default SummaryCardsList;
