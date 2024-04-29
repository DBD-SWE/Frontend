import React from 'react';
import SummaryCard from './SummaryCard';

type Props = {};
const data = [
  {
    title: 'Guest Houses',
    amount: 130,
    lastModified: 'Jan 8, 2024',
    icon: 'icons/guestHouses.svg',
    color: '#A7141C',
  },
  {
    title: 'Attractions',
    amount: 86,
    lastModified: 'Feb 12, 2024',
    icon: '/icons/location.png',
    color: '#2ECC71',
  },
  {
    title: 'Custom Users',
    amount: 16,
    lastModified: 'Jan 8, 2024',
    icon: '/icons/user.png',
    color: '#2463EB',
  },
  {
    title: 'Featured Services',
    amount: 24,
    lastModified: 'Jan 8, 2024',
    icon: '/icons/starIcon.png',
    color: '#FFD767',
  },
  {
    title: 'Districts',
    amount: 12,
    lastModified: 'Jan 8, 2024',
    icon: '/icons/lebanon.png',
    color: '#FF6B00',
  },
];
const SummaryCardsList = (props: Props) => {
  return (
    <div className="my-10 grid auto-cols-max grid-flow-row grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4 max-2xl:grid-cols-[repeat(auto-fill,minmax(330px,1fr))] max-sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-sm:pb-6">
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
