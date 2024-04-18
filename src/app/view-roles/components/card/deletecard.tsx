'use client';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import trash from '../../../../../public/images/RoleImages/trash.svg';

export default function DeleteCard() {
  const Trash = <Image src={trash} alt="trash icon" />;

  return (
    <div className="flex w-[4/5] flex-col justify-between rounded-lg border-2 border-t-red-600 md:w-[4/5]">
      <div className="flex-grow p-4 pl-8">
        <h1 className="pb-10 text-base font-bold md:text-lg">
          Delete User Role
        </h1>
        <p className="text-base font-medium leading-relaxed text-zinc-500 md:text-lg">
          By deleting this role, you will revert affected users to the default
          user role, effectively revoking their current permissions and
          dismissing any specialized access they have been granted. This action
          is irreversible and should be considered carefully.
        </p>
      </div>

      <div className="flex justify-end p-4">
        <Button
          endContent={Trash}
          className="flex h-10 items-center rounded bg-red-600 px-8 text-sm text-white"
        >
          Delete Role
        </Button>
      </div>
    </div>
  );
}
