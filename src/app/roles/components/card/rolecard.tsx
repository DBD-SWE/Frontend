import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';

interface RoleCardProps {
  iconName: StaticImageData;
  roleName: string;
  userCount: number;
  listItems: string[];
  color: string;
}

export default function RoleCard({
  iconName,
  roleName,
  userCount,
  listItems,
  color,
}: RoleCardProps) {
  const Edit = (
    <Image
      width={8}
      height={9}
      src={'/images/RoleImages/edit.svg'}
      alt="edit"
    />
  );

  return (
    <div
      className={`flex h-72 w-full flex-col justify-between rounded border-2 border-b-transparent border-l-transparent border-r-transparent p-4 shadow-sm border-t-${color}`}
    >
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-lg font-bold">{roleName}</h1>
          <Image width={20} height={20} src={iconName} alt="role icon" />
        </div>
        <p className="text-xs font-normal text-zinc-500">
          Total Users With This Role: {userCount}
        </p>
        <ul className="ml-2 mt-4 text-sm font-normal leading-6">
          {listItems.map((item, index) => (
            <li
              key={index}
              className={`relative pl-5 text-xs font-light leading-6 text-zinc-500 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-3 before:-translate-y-1/2 before:rounded before:bg-${color}`}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <Button color="primary" className="h-8 rounded text-sm">
          View Role
        </Button>
        <Button
          endContent={Edit}
          className="h-8 rounded border border-black bg-white text-sm"
        >
          Edit Role
        </Button>
      </div>
    </div>
  );
}
