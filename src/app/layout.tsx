import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import CustomNextUiProvider from '@/context/next-ui';
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
          <div className="w-[calc(100% - 530px)] ml-64 mr-[28px] mt-32">
            {children}
          </div>
        </CustomNextUiProvider>
      </body>
    </html>
  );
}
