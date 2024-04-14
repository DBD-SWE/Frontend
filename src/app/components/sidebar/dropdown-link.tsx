'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowIcon from '@/icons/arrow';

interface DropDownLinkProps {
  title: string;
  image: {
    width?: number;
    height?: number;
    src: string;
  };
  group: [
    {
      title: string;
      href: string;
    },
  ];
}
const DropDownLink = (props: DropDownLinkProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="my-1 flex cursor-pointer flex-row items-center justify-between rounded-sm py-2 pl-4 transition-colors hover:bg-gray-100"
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
      <div className="flex flex-col">
        
      </div>
    </div>
  );
};
