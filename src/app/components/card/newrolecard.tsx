'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import add from '../../../../public/images/RoleImages/add.svg';
import plus from '../../../../public/images/RoleImages/plus.svg';
import hands from '../../../../public/images/RoleImages/hands.png';
export default function NewRoleCard() {
  const Plus = <Image src={plus} alt="edit" />;

  return (
    <div className="h-56 w-60 rounded-lg border-2 border-t-black">
      <div className="p-2">
        <div className="flex justify-between pb-1">
          <h1 className="h-3.5 w-20 text-[11px] font-bold">Administrator</h1>
          <Image src={add} alt="role icon" />
        </div>
        <p className="h-[10px] text-[8px] font-medium text-zinc-500 ">
          Create a new role and assign the respective permissions to it
        </p>
        <div className="flex items-center justify-center pt-5">
          <Image src={hands} alt="hands" />
        </div>
        <div className="flex justify-center pt-7">
          <Button
            endContent={Plus}
            color="primary"
            className="h-5 rounded text-[8px]"
          >
            Add Role
          </Button>
        </div>
      </div>
    </div>
  );
}
