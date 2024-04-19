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
    <div className={`h-72 w-80 rounded-lg border-2 border-t-${color}`}>
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <h1 className="h-4 w-24 text-lg font-bold">{roleName}</h1>
          <Image width={20} height={20} src={iconName} alt="role icon" />
        </div>
        <p className="text-sm font-medium text-zinc-500 ">
          Total Users With This Role: {userCount}
        </p>
        <ul className="pl-4 pt-4 text-sm font-normal leading-6">
          {listItems.map((item, index) => (
            <li
              key={index}
              className={`relative pl-6 text-sm font-normal leading-6 text-zinc-500 before:absolute before:left-0 before:top-1/2 before:h-[2px] before:w-4 before:-translate-y-1/2 ${color}`}
            >
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between pt-16">
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
    </div>
  );
}
