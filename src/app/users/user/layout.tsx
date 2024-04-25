import { PageTitle, SubTitle } from "@/components/text";

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
      {/* Table Section */}
      {children}
    </div>
  );
}
