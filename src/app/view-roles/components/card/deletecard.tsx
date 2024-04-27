import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';
import trash from '../../../../../public/images/RoleImages/trash.svg';

interface DeleteCardProps {
  roleName: string; // Prop for passing the role name
}
const Trash = <Image src={trash} alt="trash icon" />;

export default function DeleteCard({ roleName }: DeleteCardProps) {
  return (
    <div className="flex w-[4/5] flex-col justify-between rounded-b border-2 border-b-transparent border-l-transparent border-r-transparent border-t-[#A7141C] px-5 py-7 shadow-sm md:w-[4/5]">
      <div className="flex flex-col items-stretch">
        <h3>Delete {roleName} Role</h3>
        <p className="mt-1.5 w-full max-w-[900px] text-wrap text-sm text-zinc-500">
          By deleting the {roleName} role, you will revert affected users to the
          default user role, effectively revoking their current permissions and
          dismissing any specialized access they have been granted.
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
