import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default function NewRoleCard() {
  return (
    <div className=" flex h-72 w-full flex-col justify-between rounded-lg border-2 border-t-black p-4">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-lg font-bold">Administrator</h1>
          <Image
            width={19}
            height={17}
            src={'/images/RoleImages/add.svg'}
            alt="role icon"
          />
        </div>
        <p className="pr-10 text-xs font-normal text-zinc-500">
          Create a new role and assign the respective permissions to it
        </p>
        <div className="flex items-center justify-center pt-7">
          <Image
            width={120}
            height={90}
            src={'/images/RoleImages/signature.png'}
            alt="hands"
            className="object-contain"
          />
        </div>
        <div />
      </div>
      <div className="flex justify-center">
        <Button
          endContent={'/images/RoleImages/plus.svg'}
          color="primary"
          className="h-8 w-40 rounded text-sm"
        >
          Add Role
        </Button>
      </div>
    </div>
  );
}
