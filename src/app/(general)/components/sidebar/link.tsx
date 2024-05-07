'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  title: string;
  href: string;
  image: {
    width?: number;
    height?: number;
    src: string;
  };
}
const SidebarLink = (props: SidebarLinkProps) => {
  const currentPath = usePathname();

  return (
    <Link
      className={`my-1 flex cursor-pointer flex-row items-center rounded-sm py-2 pl-2 text-sm font-semibold transition-colors hover:bg-gray-100 lg:pl-4 ${currentPath === props.href ? 'bg-gray-100' : 'bg-white'}`}
      href={props.href}
    >
      <div className="flex h-[20px] w-[20px] flex-row items-center justify-center">
        <Image
          src={props.image.src}
          alt={props.title}
          height={props.image.height || 20}
          width={props.image.width || 20}
          className="object-contain"
        />
      </div>
      <p className="ml-2.5 text-sm font-medium">{props.title}</p>
    </Link>
  );
};

export default SidebarLink;
