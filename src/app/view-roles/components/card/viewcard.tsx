'use client';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';

// Define the interface for the component props
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
      <div className="flex-grow p-4">
        <div className="flex justify-between pb-2">
          <h1 className="text-base font-bold md:text-lg">{roleName}</h1>
          <Image src={iconName} alt="role icon" />
        </div>
        <p className="text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
          Total Users With This Role: {userCount}
        </p>
        <ul className="pl-4 pt-4 text-base font-normal leading-relaxed md:text-lg">
          {listItems.map((item, index) => (
            <li key={index} className={`relative pl-6 text-zinc-500 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-4 before:-translate-y-1/2 ${bulletColor}`}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-end p-4">
          <Button className="h-10 rounded border border-black bg-white px-8 text-sm text-black">
            View {roleName}
          </Button>
        </div>
      </div>
    </div>
  );
}
