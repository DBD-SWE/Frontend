'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/lib/icons/arrow';
import { usePathname } from 'next/navigation';

interface DropDownLinkProps {
  title: string;
  image: {
    width?: number;
    height?: number;
    src: string;
  };
  group: {
    title: string;
    href: string;
  }[];
}
const DropDownLink = (props: DropDownLinkProps) => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(
    currentPath.startsWith('/' + props.title.toLowerCase()),
  );

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`my-1 flex cursor-pointer flex-row items-center justify-between rounded-sm py-2 pl-2 transition-colors hover:bg-gray-100 lg:pl-4 ${currentPath.startsWith('/' + props.title.toLowerCase()) ? 'bg-gray-100' : 'bg-white'} `}
      >
        <div className="flex flex-row items-center">
          <div className="flex h-[20px] w-[20px] flex-row items-center justify-center">
            <Image
              src={props.image.src}
              alt="Services"
              width={props.image.width || 20}
              height={props.image.height || 20}
              className="object-contain"
            />
          </div>
          <p className="ml-2.5 text-sm font-medium">{props.title}</p>
        </div>
        <div
          className={`mr-3 transform text-black transition-transform duration-200 ease-out [&_svg]:h-[12px] [&_svg]:w-[12px] ${isOpen ? 'rotate-0' : '-rotate-90'}`}
        >
          <ArrowIcon />
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isOpen ? 'h-[88px]' : 'h-0'
        } overflow-hidden transition-all duration-200 ease-out`}
      >
        {props.group.map((link) => (
          <Link
            key={link.href}
            className={`my-1 ml-2 flex cursor-pointer flex-row items-center rounded-sm py-2 pl-2 text-sm font-semibold transition-colors hover:bg-gray-100 md:ml-4 ${currentPath === link.href ? 'bg-blue-500 hover:bg-blue-500' : 'bg-white'}`}
            href={link.href}
          >
            <div className="flex h-[20px] w-[20px] flex-row items-center justify-center">
              <div className="h-[10px] w-[10px] rounded-full border-2 border-gray-200 bg-white" />
            </div>
            <p className="ml-1 text-sm font-medium">{link.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownLink;
