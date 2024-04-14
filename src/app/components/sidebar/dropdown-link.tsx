'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/icons/arrow';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentPath = usePathname();
  console.log(currentPath);
  console.log(props.title);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`my-1 flex cursor-pointer flex-row items-center justify-between rounded-sm py-2 pl-4 transition-colors hover:bg-gray-100 ${currentPath.startsWith('/' + props.title.toLowerCase()) ? 'bg-gray-100' : 'bg-white'} `}
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
          className={`mr-3 transform text-black transition-transform duration-200 ease-out [&_svg]:h-[12px] [&_svg]:w-[12px] ${isOpen ? '-rotate-90' : 'rotate-0'}`}
        >
          <ArrowIcon />
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isOpen ? 'h-0' : 'h-[88px]'
        } overflow-hidden transition-all duration-200 ease-out`}
      >
        {props.group.map((link) => (
          <Link
            key={link.href}
            className={`my-1 ml-4 flex cursor-pointer flex-row items-center rounded-sm py-2 pl-2 text-sm font-semibold transition-colors hover:bg-gray-100 ${currentPath === link.href ? "bg-blue-500 hover:bg-blue-500" : "bg-white"}`}
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
