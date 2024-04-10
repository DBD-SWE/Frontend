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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
