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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {/* <CustomNextUiProvider>
          <Header />
          <Sidebar /> */}
          {children}
        {/* </CustomNextUiProvider> */}
      </body>
    </html>
  );
}
