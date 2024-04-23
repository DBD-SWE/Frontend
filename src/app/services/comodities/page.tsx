import React from 'react';
import { Title } from '../components';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col gap-20 sm:px-8 sm:py-4">
      <header className="flex items-start justify-between">
        <Title title="Comodities" />
        <button className="rounded-md bg-black px-4 py-2 text-sm font-bold text-white">
          Download
        </button>
      </header>
      <main className="w-full rounded-md bg-[#f4f4f5] px-[1px] py-[1px] pt-6"></main>
    </div>
  );
};

export default page;
