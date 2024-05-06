import React from 'react';
import Image from 'next/image';

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
        <div className="flex h-full flex-col items-center" key={index}>
          <div
            className="flex w-full items-start justify-between space-x-24 rounded-t px-4 py-6 shadow-sm max-sm:px-4 md:space-x-0 md:py-8"
            style={{ borderBottom: `2px solid ${item.color}` }}
          >
            <div>
              <p className="mb-6 text-sm font-medium max-sm:mb-1 sm:text-sm">
                Total {item.title}
              </p>
              <p
                className={`mb-1 text-2xl font-bold sm:text-4xl`}
                style={{ color: item.color }}
              >
                +{item.amount}
              </p>
              <p className="text-[.6rem] font-light text-zinc-500">
                Last modified - {item.lastModified}
              </p>
            </div>
            <Image
              className="object-contain"
              src={item.icon}
              alt={item.title}
              width={17}
              height={17}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCardsList;
