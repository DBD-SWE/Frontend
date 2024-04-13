'use client';
import React, { useState } from 'react';

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <Avatar onClick={() => setOpen(!open)} letter={'T'} />

      <div
        className={`absolute right-0 top-[50px] w-[230px] transform rounded-md border-[1px] border-gray-200 bg-white p-3 opacity-0 shadow-sm transition-all duration-300 ease-out ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        {/* avatar section */}
        <div className="flex flex-row items-center gap-3">
          <Avatar letter="T" />
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
				
        <ul>
          <li className="py-2">Profile</li>
          <li className="py-2">Settings</li>
          <li className="py-2">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

const Avatar = ({
  onClick,
  letter,
}: {
  onClick?: () => void;
  letter: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`h-[38px] w-[38px] transform cursor-pointer rounded-full border-[1px] border-gray-300 p-[2px] shadow-sm transition-transform duration-500 ease-in-out hover:scale-110`}
    >
      <div className="flex h-full w-full flex-row items-center justify-center rounded-full bg-gray-300">
        <span className="block text-sm font-semibold text-black">{letter}</span>
      </div>
    </div>
  );
};
