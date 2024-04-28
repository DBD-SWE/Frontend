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
  return (
    <div className="grid auto-cols-max grid-flow-row gap-5 py-10  max-2xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:pb-6">
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
