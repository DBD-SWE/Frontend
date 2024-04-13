import React from 'react';
import Image from 'next/image';
import SearchInput from "./search";

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
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
