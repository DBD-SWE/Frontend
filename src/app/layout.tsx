import '@/lib/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import CustomNextUiProvider from '@/lib/context/next-ui';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

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
          <div className="ml-64 mr-7 mt-32 max-lg:ml-7">{children}</div>
        </CustomNextUiProvider>
      </body>
    </html>
  );
}
