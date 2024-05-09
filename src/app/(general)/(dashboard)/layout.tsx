import { cn } from '@/lib/utils';
import CustomNextUiProvider from '@/lib/context/next-ui';
import Header from '@/(general)/components/header';
import Sidebar from '@/(general)/components/sidebar';
import { PageTitle } from '../components/text';
import TabsComponent from './components/Tabs';
import { Button } from '@nextui-org/react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex h-full w-full flex-col">
        <div className="flex h-full w-full flex-row items-start justify-between">
          <div className="flex flex-col">
            <PageTitle>General Dashboard</PageTitle>
            <TabsComponent />
          </div>
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Download
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
