'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import add from '../../../../../public/images/RoleImages/add.svg';
import plus from '../../../../../public/images/RoleImages/plus.svg';
import hands from '../../../../../public/images/RoleImages/hands.png';

export default function NewRoleCard() {
  const Plus = <Image src={plus} alt="edit" />;

  return (
    <div className="h-72 w-80 rounded-lg border-2 border-t-black">
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <h1 className="h-4 w-24 text-lg font-bold">Administrator</h1>
          <Image src={add} alt="role icon" />
        </div>
        <p className="text-sm font-medium text-zinc-500">
          Create a new role and assign the respective permissions to it
        </p>
        <div className="flex items-center justify-center pt-10">
          <Image src={hands} alt="hands" />
        </div>
        <div className="flex justify-center pt-6">
          <Button
            endContent={Plus}
            color="primary"
            className="h-8 w-40 rounded text-sm"
          >
            Add Role
          </Button>
        </div>
      </div>
    </div>
  );
}
