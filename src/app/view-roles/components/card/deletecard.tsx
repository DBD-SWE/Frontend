import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';
import trash from '../../../../../public/images/RoleImages/trash.svg';

interface DeleteCardProps {
  roleName: string; // Prop for passing the role name
}

export default function DeleteCard({ roleName }: DeleteCardProps) {
  const Trash = <Image src={trash} alt="trash icon" />;

  return (
    <div className="flex w-[4/5] flex-col justify-between rounded-lg border-2 border-t-red-600 md:w-[4/5]">
      <div className="p-2 md:p-3">
        <h1 className="md:text-md text-sm font-bold">Delete {roleName} Role</h1>
        <p className="text-xs font-medium leading-tight text-zinc-500 md:text-sm">
          By deleting the {roleName} role, you will revert affected users to the
          default user role, effectively revoking their current permissions and
          dismissing any specialized access they have been granted. This action
          is irreversible and should be considered carefully.
        </p>
      </div>

      <div className="flex justify-end p-2">
        <Button
          endContent={Trash}
          className="flex items-center rounded bg-red-600 px-4 py-1 text-xs text-white md:text-sm"
        >
          Delete {roleName}
        </Button>
      </div>
    </div>
  );
}
