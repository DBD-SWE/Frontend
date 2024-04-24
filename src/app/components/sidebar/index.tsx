'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SidebarLink from './link';
import DropDownLink from './dropdown-link';
import { gsap } from 'gsap';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(pathRef.current, {
        attr: { d: 'M6 6l12 12 M18 6l-12 12' },
        duration: 0.3,
      });
    } else {
      gsap.to(pathRef.current, {
        attr: { d: 'M4 6h16 M4 12h16 M4 18h10' },
        duration: 0.3,
      });
    }
  }, [isOpen]);
  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle function for the sidebar

  return (
    <div>
      {/* Overlay: shown when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-20 lg:z-10 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-30 h-screen transform bg-white pl-3.5 transition-transform duration-300 ease-in-out lg:pl-5 ${isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'}`}
      >
        {/* Toggle Button */}
        <button
          className={`absolute mx-2 my-3 translate-x-[212px] transform rounded bg-gray-800 p-2 text-white lg:hidden`}
          onClick={toggleSidebar}
        >
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 w-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="transition-all duration-100 ease-out"
            ></path>
          </svg>
        </button>
        {/* Mobile Header */}
        <div className="flex w-full flex-row items-center justify-center py-3 lg:hidden">
          <Link href="/">
            <Image
              src="/images/general/small-logo.png"
              alt="Logo"
              width={35}
              height={35}
              className="-ml-[7px] object-contain"
            />
          </Link>
        </div>
        {/* Sidebar Content */}
        <div className="flex h-full w-48 flex-col items-start justify-between border-r-[1px] border-gray-100 pb-[75px] lg:mt-[96px] lg:pb-[112px]">
          {/* Content Sections */}
          <div className="mt-2 flex w-full flex-col lg:mt-6">
            <div className="relative mb-4 w-full">
              <h2 className="text-lg font-normal">Overview</h2>
              <div className="absolute -left-[11px] top-[14px] h-[1px] w-[10px] bg-gray-100" />
              <div className="absolute -left-[11px] top-[14px] h-[14px] w-[1px] bg-gray-100" />
              <div className="absolute -left-[11px] top-[28px] h-[1px] w-[202px] bg-gray-100" />
            </div>
            <SidebarLink
              title="Dashboard"
              href="/"
              image={{
                src: '/images/sidebar/dashboard.png',
                width: 18,
                height: 18,
              }}
            />
            <DropDownLink
              title="Services"
              group={[
                { title: 'Guest Houses', href: '/services/guest-houses' },
                { title: 'Attractions', href: '/services/attractions' },
              ]}
              image={{
                src: '/images/sidebar/services.png',
                width: 15,
                height: 15,
              }}
            />
            <SidebarLink
              title="Users"
              href="/users"
              image={{
                src: '/images/sidebar/users.png',
                width: 17,
                height: 17,
              }}
            />
            <SidebarLink
              title="Roles"
              href="/roles"
              image={{
                src: '/images/sidebar/roles.png',
                width: 20,
                height: 20,
              }}
            />
            <SidebarLink
              title="Activity Log"
              href="/activity-log"
              image={{
                src: '/images/sidebar/activity.png',
                width: 15,
                height: 15,
              }}
            />
          </div>
          <div className="flex w-full flex-col">
            <SidebarLink
              title="Documentation"
              href="/documentation"
              image={{
                src: '/images/sidebar/documentation.png',
                width: 15,
                height: 15,
              }}
            />
            <SidebarLink
              title="Support"
              href="/support"
              image={{
                src: '/images/sidebar/support.png',
                width: 15,
                height: 15,
              }}
            />
            <SidebarLink
              title="Logout"
              href="/logout"
              image={{
                src: '/images/sidebar/logout.png',
                width: 15,
                height: 15,
              }}
            />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
