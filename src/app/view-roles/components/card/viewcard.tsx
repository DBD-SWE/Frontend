'use client';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';

interface ViewCardProps {
  iconName: StaticImageData;  
  roleName: string;
  userCount: number;
  listItems: string[];
  borderColor: string;  
  bulletColor: string;
}

export default function ViewCard({
  iconName,
  roleName,
  userCount,
  listItems,
  borderColor,
  bulletColor
}: ViewCardProps) {
  return (
    <div className={`flex w-[4/5] flex-col justify-between rounded-lg border-2 ${borderColor} md:w-[4/5]`}>
      <div className="p-2 md:p-3">
        <div className="flex justify-between pb-1">
          <h1 className="text-sm md:text-md font-bold">{roleName}</h1>
          <Image src={iconName} alt="role icon" />
        </div>
        <p className="text-xs md:text-sm font-medium leading-tight text-zinc-500">
          Total Users With This Role: {userCount}
        </p>
        <ul className="pl-2 pt-2 text-xs md:text-sm font-normal leading-tight">
          {listItems.map((item, index) => (
            <li key={index} className={`relative pl-4 text-zinc-500 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-3 before:-translate-y-1/2 ${bulletColor}`}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-end pt-2">
          <Button className="rounded border border-black bg-white px-3 py-1 text-xs md:text-sm text-black">
            View {roleName}s
          </Button>
        </div>
      </div>
    </div>
  );
}
