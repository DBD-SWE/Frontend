import React from 'react';
import { Title, SearchInput, SelectDropDown } from './components';
import { PathnameProvider } from '@/lib/context/PathNameProvider';
import Image from 'next/image';

const page = () => {
  // const options = ['Hello 1', 'Hello 2', 'Hello 3 ', 'Hello 4']
  return (
    <PathnameProvider>
      <div className="flex flex-col gap-20 sm:px-8 sm:py-4">
        <header className="flex items-start justify-between">
          <Title />
          <button className="rounded-md bg-black px-4 py-2 text-sm font-bold text-white">
            Download
          </button>
        </header>
        <main className="w-full rounded-md bg-[#f4f4f5] px-[1px] py-[1px] pt-6">
          
        </main>
      </div>
    </PathnameProvider>
  );
};

export default page;
