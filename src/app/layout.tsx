import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/_lib/utils/utils';
import CustomNextUiProvider from '@/_lib/context/next-ui';
import Header from '@/_components/header';
import Sidebar from '@/_components/sidebar';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('bg-white font-sans antialiased', fontSans.variable)}>
        <CustomNextUiProvider>
          <Header />
          <Sidebar />
          <div className="ml-64 mr-7 mt-32 max-md:ml-7">{children}</div>
        </CustomNextUiProvider>
      </body>
    </html>
  );
}
