import { Button } from '@nextui-org/react';
import { ActionSection } from './components';
import Image from 'next/image';

export default function Actions() {
  return (
    <div className="flex w-full flex-col pb-10">
      {/* Body Section */}
      <ActionSection
        title="Edit User"
        description="Adjust user personal information or software related information"
        button={
          <ButtonWithIcon text="Edit User" src="/images/general/edit-2.png" />
        }
      />
      <ActionSection
        title="Suspend User"
        description="By suspending the user, you are permanently restricting his access to this software"
        button={
          <ButtonWithIcon
            className="border-[#A7141C]"
            text="Suspend User"
            src="/images/users/suspend.png"
          />
        }
      />
      <ActionSection
        title="Delete User"
        description="By deleting the user, you are removing his record from this software"
        last
        button={
          <ButtonWithIcon
            className="border-none bg-[#A7141C] text-white"
            text="Edit User"
            src="/images/users/delete.png"
          />
        }
      />
    </div>
  );
}

const ButtonWithIcon = ({
  text,
  src,
  className,
}: {
  text: string;
  src: string;
  className?: string;
}) => {
  return (
    <Button
      endContent={
        <Image
          className="ml-2 object-contain"
          width={15}
          height={15}
          src={src}
          alt={text}
        />
      }
      className={`flex h-10 w-40 max-sm:w-full items-center rounded border border-black bg-white text-sm ${className}`}
    >
      {text}
    </Button>
  );
};
