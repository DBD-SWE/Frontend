import { PageTitle, SubTitle } from '@/(general)/components/text';
import { Tabs } from './components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users', '○', 'User Details']} />
        </div>
      </div>
      {/* Body Section */}
      <div className="mt-10">
        <Tabs />
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
