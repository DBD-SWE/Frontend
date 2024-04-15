'use client';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';
import edit from '../../../../public/images/RoleImages/edit.svg';
interface RoleCardProps {
    iconName: StaticImageData;  
    roleName: string;
    userCount: number;
    listItems: string[];
    borderColor: string;  
    bulletColor: string;  // Add this for the bullet point color
  }
  
export default function RoleCard({
    iconName,
    roleName,
    userCount,
    listItems,
    borderColor,
    bulletColor  // Include this in the function parameters
  }: RoleCardProps) {
    const Icon = <Image src={iconName} alt="icon" />;
    const Edit = <Image src={edit} alt="edit"/>;
    
    return (
      <div className={`h-56 w-60 rounded-lg border-2 ${borderColor}`}>
        <div className="p-2">
          <div className="flex justify-between pb-1">
            <h1 className="h-3.5 w-20 text-[11px] font-bold">{roleName}</h1>
            <Image src={iconName} alt="role icon" />
          </div>
          <p className="h-[10px] text-[8px] font-medium text-zinc-500 ">
            Total Users With This Role: {userCount}
          </p>
          <ul className="pl-2 pt-2 text-[7px] font-normal leading-5">
            {listItems.map((item, index) => (
              <li
                key={index}
                className={`relative pl-4 text-[7px] font-normal leading-5 text-zinc-500 before:absolute before:left-0 before:top-2/4 before:h-px before:w-2 before:-translate-y-2/4 ${bulletColor}`}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between pt-14">
            <Button color="primary" className="h-5 rounded text-[8px]">
              View Role
            </Button>
            <Button
              endContent={Edit}
              className="h-5 rounded border-1 border-black bg-white text-[8px]"
            >
              Edit Role
            </Button>
          </div>
        </div>
      </div>
    );
  }