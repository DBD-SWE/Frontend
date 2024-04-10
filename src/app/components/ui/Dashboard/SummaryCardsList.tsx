import React from 'react';
import SummaryCard from './SummaryCard';

type Props = {};

const SummaryCardsList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
    </div>
  );
};

export default SummaryCardsList;
