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
    </div>
  );
}

const ButtonWithIcon = ({ text, src }: { text: string; src: string }) => {
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
      className="flex h-10 items-center rounded border border-black bg-white px-10 text-sm"
    >
      {text}
    </Button>
  );
};
