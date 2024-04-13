import React from 'react';
import Image from 'next/image';
import { Input } from '@nextui-org/react';
import { SearchIcon } from '@/icons';

const Header = () => {
  return (
    <header className="flex w-full flex-row items-center justify-between border-b-[1px] border-gray-100 px-7 py-3">
      <Image
        src="/images/general/big-logo.png"
        alt="Logo"
        width={110}
        height={110}
      />
      <div className="flex flex-row items-center">
        <div className="relative">
          <div className="[&_svg]:h-18 [&_svg]:w-18 [&_svg]-text-red-500 absolute top-1/2 ml-4 flex-shrink-0  -translate-y-1/2 text-2xl [&_svg]:text-gray-500">
            <SearchIcon />
          </div>

          <input
            type="text"
            placeholder="Search Services"
            className="w-42 flex cursor-text rounded border-[1px] border-white px-3 py-2 pl-10 text-sm text-black shadow-sm outline-none transition-all placeholder:text-gray-500 hover:border-gray-400
						focus:border-black"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
