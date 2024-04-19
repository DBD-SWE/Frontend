import Image from 'next/image';
import { Button } from '@nextui-org/react';

const AddIcon = (
  <div className="flex h-full w-full flex-row items-center">
    <Image
      width={25}
      height={25}
      className="object-contain"
      src={'/images/general/plus.svg'}
      alt="edit"
    />
  </div>
);
export default function NewRoleCard() {
  return (
    <div className="flex h-72 w-full flex-col justify-between rounded-lg border-2 border-b-transparent border-l-transparent border-r-transparent border-t-black p-4 shadow-sm">
      <div>
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-lg font-bold">Add New Role</h1>
          <Image
            width={19}
            height={17}
            src={'/images/roles/add.svg'}
            alt="role icon"
          />
        </div>
        <p className="pr-10 text-xs font-normal text-zinc-500">
          Create a new role and assign the respective permissions to it
        </p>
        <div className="flex items-center justify-center pt-3">
          <Image
            width={120}
            height={90}
            src={'/images/roles/signature.png'}
            alt="hands"
            className="object-contain"
          />
        </div>
        <div />
      </div>
      <div className="flex justify-center">
        <Button
          endContent={AddIcon}
          color="primary"
          className="h-8 rounded px-11 text-sm"
        >
          Add Role
        </Button>
      </div>
    </div>
  );
}
