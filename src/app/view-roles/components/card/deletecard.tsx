import Image, { StaticImageData } from 'next/image';
import { Button } from '@nextui-org/react';
import trash from '../../../../../public/images/RoleImages/trash.svg';

interface DeleteCardProps {
  roleName: string; // Prop for passing the role name
}
const Trash = (
  <Image
    src="images/RoleImages/trash.svg"
    width={15}
    height={15}
    alt="trash icon"
    className="ml-2 object-contain"
  />
);

export default function DeleteCard({ roleName }: DeleteCardProps) {
  return (
    <div className="flex w-[4/5] flex-col justify-between rounded-b border-2 border-b-transparent border-l-transparent border-r-transparent border-t-[#A7141C] px-8 py-5 shadow-sm max-sm:px-4 max-sm:py-3 md:w-[4/5]">
      <div className="flex flex-col items-stretch">
        <h3>Delete {roleName} Role</h3>
        <p className="mt-1.5 w-full max-w-[900px] text-wrap text-sm text-zinc-500 max-sm:text-xs">
          By deleting the {roleName} role, you will revert affected users to the
          default user role, effectively revoking their current permissions and
          dismissing any specialized access they have been granted.
        </p>
      </div>

      <div className="mt-7 flex justify-end max-sm:mt-10 max-sm:justify-start">
        <Button
          endContent={Trash}
          className="flex h-10 items-center rounded bg-[#A7141C] px-6 py-1  text-xs text-white"
        >
          Delete {roleName} Role
        </Button>
      </div>
    </div>
  );
}
