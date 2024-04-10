import { useState } from 'react';
import Image from 'next/image';
import SummaryCard from './components/ui/Dashboard/SummaryCard';

export default function Home() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <SummaryCard
        title="Guest Houses"
        amount={130}
        lastModified="Jan 8, 2024"
        icon="icons/guestHouses.svg"
        color="#A7141C"
      />
    </div>
  );
}
