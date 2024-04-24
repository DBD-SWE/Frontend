'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        avatarRef.current &&
        avatarRef.current.contains(event.target as Node)
      ) {
        setOpen(!open);
      } else if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative">
      <div
        ref={avatarRef}
        className={`h-[38px] w-[38px] transform cursor-pointer rounded-full border-[1px] border-gray-300 p-[2px] shadow-sm transition-transform duration-500 ease-in-out hover:scale-110`}
      >
        <div className="flex h-full w-full flex-row items-center justify-center rounded-full bg-gray-300">
          <span className="block text-sm font-semibold text-black">T</span>
        </div>
      </div>

      <div
        ref={dropdownRef}
        className={`absolute right-0 top-[50px] w-max transform rounded-md border-[1px] border-gray-200 bg-white py-4 opacity-0 shadow-sm transition-all duration-300 ease-out ${open ? 'block scale-100 opacity-100' : 'hidden scale-95 opacity-0'}`}
      >
        {/* avatar section */}
        <div className="ml-4 mr-28 flex flex-row items-center gap-3">
          <div
            className={`h-[38px] w-[38px] rounded-full border-[1px] border-gray-300 p-[2px] shadow-sm`}
          >
            <div className="flex h-full w-full flex-row items-center justify-center rounded-full bg-gray-300">
              <span className="block text-sm font-semibold text-black">T</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="block text-sm font-semibold text-black">
              Tony Kosseify
            </span>
            <span className="block text-xs font-semibold text-gray-500">
              Admin
            </span>
          </div>
        </div>
        {/* Links */}
        <div className="my-4 h-[1px] w-full bg-gray-300" />
        <div className="ml-4 mr-3 flex flex-col">
          <MyLink text="My Profile" href="/profile" />
          <MyLink text="Account Settings" href="/" />
          <MyLink text="Activity Log" href="/activity-log" />
        </div>
        <div className="my-4 h-[1px] w-full bg-gray-300" />
        <div className="ml-4 mr-3 flex flex-col">
          <MyLink danger text="Sign Out" href="/logout" />
        </div>
      </div>
    </div>
  );
};

export default Profile;

const MyLink = ({
  text,
  href,
  danger = false,
}: {
  text: string;
  href: string;
  danger?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`cursor-pointer rounded-sm py-2 pl-2.5 text-sm transition-colors ${danger ? 'text-red-600 hover:bg-red-600 hover:text-white' : 'text-black hover:bg-gray-100'}`}
    >
      {text}
    </Link>
  );
};
