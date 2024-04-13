'use client';
import React, { useState } from 'react';
import { SearchIcon, CloseIcon } from '@/icons';

const SearchInput = () => {
  const [text, setText] = useState<string>('');
  return (
    <div className="relative">
      <div className="pointer-events-none absolute top-1/2 ml-4 flex-shrink-0 -translate-y-1/2 text-2xl [&_svg]:h-5 [&_svg]:w-5 [&_svg]:text-gray-500">
        <SearchIcon />
      </div>

      <input
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setText('')}
        value={text}
        type="text"
        placeholder="Search Services"
        className="flex w-60 cursor-text rounded border-[1px] border-white px-3 py-2 pl-10 text-sm text-black shadow-sm outline-none transition-all duration-250 ease-in-out placeholder:text-gray-500 hover:border-gray-400 focus:w-72 focus:border-black"
      />
      <div
        className={`absolute right-0 top-1/2 mr-4 flex h-4 w-4 flex-shrink-0 -translate-y-1/2 transform cursor-pointer flex-row items-center justify-center rounded-full bg-black text-white transition-transform duration-500 ease-in-out [&_svg]:h-3 [&_svg]:w-3 ${text ? 'scale-100' : 'scale-0'}`}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default SearchInput;
