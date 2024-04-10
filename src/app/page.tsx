import { useState } from 'react';
import Image from 'next/image';
import SummaryCardsList from './components/ui/Dashboard/SummaryCardsList';

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <SummaryCardsList />
    </div>
  );
}
