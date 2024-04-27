import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';

interface ViewCardProps {
  iconName: string;
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
  bulletColor,
}: ViewCardProps) {
  return (
    <div
      className={`flex w-full flex-col justify-between rounded-b border-2 border-b-transparent border-l-transparent border-r-transparent px-8 py-5 shadow-sm ${borderColor}`}
    >
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-lg font-bold">{roleName}</h1>
          <Image width={25} height={25} src={iconName} alt="role icon" />
        </div>
        <p className={`text-xs font-normal text-zinc-500`}>
          Total Users With This Role: {userCount}
        </p>
        <ul className="ml-2 mt-4 text-sm font-normal leading-6">
          {listItems.map((item, index) => (
            <li
              key={index}
              className={`relative pl-5 text-xs font-light leading-6 text-zinc-500 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-3 before:-translate-y-1/2 before:rounded ${bulletColor}`}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end pt-2">
        <Button
          variant="light"
          className="rounded border border-black bg-white px-3 py-1 text-xs text-black md:text-sm"
        >
          View {roleName}s
        </Button>
      </div>
    </div>
  );
}
