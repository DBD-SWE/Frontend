import React from 'react';
import Image from 'next/image';
import SearchInput from './search';
import Link from 'next/link';
import Profile from './profile';

// Here we should request the /me route, get user info and pass user info
// as props to the Profile component

const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 flex w-full flex-row items-center justify-between border-b-[1px] border-gray-100 px-7 py-3 md:z-50">
      <Link href="/">
        <Image
          src="/images/general/big-logo.png"
          alt="Logo"
          width={110}
          height={110}
          className="hidden md:block"
        />
      </Link>
      <div className="flex flex-row items-center gap-3">
        <SearchInput />
        <NotificationBell />
        <Profile />
      </div>
    </header>
  );
};

export default Header;

const NotificationBell = () => {
  return (
    <div className="relative flex h-[38px] cursor-pointer flex-row items-center justify-center rounded px-3 shadow-sm transition-colors duration-300 hover:bg-gray-100">
      <Image
        src="/icons/notification.svg"
        height={22}
        width={22}
        alt="Notification Icon"
      />
      <div className="absolute right-[12px] top-[11px] flex h-2 w-2 flex-row items-center justify-center rounded-full bg-blue-600 text-white">
        <span className="block text-[10px] font-semibold"></span>
      </div>
    </div>
  );
};
