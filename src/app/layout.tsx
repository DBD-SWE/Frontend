import './styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import Image from 'next/image';
import { cn } from '@/lib/utils';
// import {Input} from "@nextui-org/react";


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
        <header className="flex w-full flex-row items-center justify-between border-b-[1px] border-gray-100 px-7 py-3">
          <Image
            src="/assets/general/big-logo.png"
            alt="Logo"
            width={110}
            height={110}
          />
          <div>

          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
