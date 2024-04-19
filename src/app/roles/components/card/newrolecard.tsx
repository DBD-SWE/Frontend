import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default function NewRoleCard() {
  return (
    <div className="h-72 w-80 rounded-lg border-2 border-t-black">
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <h1 className="h-4 w-24 text-lg font-bold">Administrator</h1>
          <Image
            width={19}
            height={17}
            src={'/images/RoleImages/add.svg'}
            alt="role icon"
          />
        </div>
        <p className="text-sm font-medium text-zinc-500">
          Create a new role and assign the respective permissions to it
        </p>
        <div className="flex items-center justify-center pt-10">
          <Image
            width={120}
            height={95}
            src={'/images/RoleImages/hands.png'}
            alt="hands"
          />
        </div>
        <div className="flex justify-center pt-6">
          <Button
            endContent={'/images/RoleImages/plus.svg'}
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
