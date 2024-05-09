import React from 'react';
import SummaryCardsList from './components/SummaryCards';
import DoughnutSummaryCard from './components/DoughnutSummaryCard';
import ActivityLog from './components/ActivityLog';
import { Button } from '@nextui-org/react';
import { getDashboardData } from '@/lib/actions/dashboard';
import Link from 'next/link';

export default async function Home() {
  const { status, message, data } = await getDashboardData();

  if (status === 'error') {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{message}</p>
        <Link href="/">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  const summaryCardData = [
    {
      title: 'Guest Houses',
      amount: data?.summaryCardsData.guestHousesCount,
      lastModified: 'Jan 8, 2024',
      icon: 'icons/guestHouses.svg',
      color: '#A7141C',
    },
    {
      title: 'Attractions',
      amount: data?.summaryCardsData.attractionsCount,
      lastModified: 'Feb 12, 2024',
      icon: '/icons/location.png',
      color: '#2ECC71',
    },
    {
      title: 'Custom Users',
      amount: data?.summaryCardsData.usersCount,
      lastModified: 'Jan 8, 2024',
      icon: '/icons/user.png',
      color: '#2463EB',
    },
    {
      title: 'Featured Services',
      amount: data?.summaryCardsData.commoditiesCount,
      lastModified: 'Jan 8, 2024',
      icon: '/icons/starIcon.png',
      color: '#FFD767',
    },
    {
      title: 'Districts',
      amount: data?.summaryCardsData.districtsCount,
      lastModified: 'Jan 8, 2024',
      icon: '/icons/lebanon.png',
      color: '#FF6B00',
    },
  ];

  const pieChartLabels = data?.pieChartData.map(
    (entry: { name: string; commodities_count: number }) => entry.name,
  );
  const pieChartStats = data?.pieChartData.map(
    (entry: { name: string; commodities_count: number }) =>
      entry.commodities_count,
  );

  const activityLogData = [
    data?.recentActivities[0],
    data?.recentActivities[1],
  ];

  console.log(activityLogData);

  return (
    <div className="mt-1 flex h-full w-full flex-col">
      <SummaryCardsList data={summaryCardData} />
      <div className="mb-4 flex w-full flex-col gap-8 xl:flex-row">
        <DoughnutSummaryCard
          title="Services"
          total={data?.summaryCardsData.commoditiesCount}
          lastModified="Jan 8, 2024"
          labels={pieChartLabels}
          stats={pieChartStats}
          colors={['#FF0000', '#2ECC71', '#FFD767', '#2463EB', '#FF6B00']}
        />
        <ActivityLog />
      </div>
    </div>
  );
}
