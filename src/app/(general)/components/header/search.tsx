'use client';
import React, { useState } from 'react';
import { SearchIcon, CloseIcon } from '@/lib/icons';

const SearchInput = ({ isDisabled }: { isDisabled: boolean }) => {
  const [text, setText] = useState<string>('');
  return (
    <div className="relative">
      <div className="pointer-events-none absolute top-1/2 ml-0 flex-shrink-0 -translate-y-1/2 scale-[220%] text-2xl max-md:right-[15px] max-md:focus:left-0 md:ml-4 [&_svg]:h-3 [&_svg]:w-3 [&_svg]:text-gray-500">
        <SearchIcon />
      </div>

      <input
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setText('')}
        value={text}
        type="text"
        placeholder="Search Services"
        className="flex w-0 cursor-text rounded border-[1px] border-white px-5 py-2 text-sm text-black shadow-sm outline-none transition-all duration-250 ease-in-out placeholder:text-gray-500 hover:border-gray-400 focus:border-black max-md:focus:w-44 max-md:focus:px-3 md:w-60 md:px-3 md:pl-10 md:focus:w-72"
      />
      <div
        className={`absolute right-0 top-1/2 mr-4 hidden h-4 w-4 flex-shrink-0 -translate-y-1/2 transform cursor-pointer flex-row items-center justify-center rounded-full bg-black text-white transition-transform duration-500 ease-in-out md:flex [&_svg]:h-3 [&_svg]:w-3 ${text ? 'scale-100' : 'scale-0'}`}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default SearchInput;
