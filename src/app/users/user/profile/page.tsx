import { PageTitle, SubTitle } from '@/components/text';
import { Input, Select } from '@/components/input';
import { Section, FileInput } from '../../components';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';

export default function CreateUser() {
  return (
    <div className="flex w-full flex-col pb-10">
      {/* Body Section */}
      <div className="w-full">
        <Section
          title="Personal Information"
          description="Fill in basic information to establish the profile"
          start
          form={
            <div className="grid w-[100%] max-w-[400px] flex-1 grid-cols-1 grid-rows-4 gap-y-4 max-md:mt-7">
              <div className="flex items-center">
                <Label label="First Name" />
                <Input type="text" label="First Name" />
              </div>

              <Input type="text" label="Last Name" />
              <Input type="email" label="Email" />
              <Input type="tel" name="phone" label="Phone Number" />
            </div>
          }
        />

        {/* Software Information */}
        <Section
          title="Software Information"
          description="This information is related directly to this software"
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 lg:max-w-[340px]">
              <Select items={[]} placeholder="User role" label="Role" />
            </div>
          }
        />

        {/* Photo Upload */}
        <Section
          title="Photo Information"
          description="Upload a photo for the user"
          last
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 max-md:mt-7 max-md:justify-center lg:max-w-[340px]">
              <FileInput />
            </div>
          }
        />

        {/* Buttons */}
        <div className="mt-10 flex gap-x-3 max-[475px]:flex-col">
          <Button
            className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
            endContent={<PlusIcon />}
            size="md"
          >
            Create User
          </Button>
          <Button
            size="md"
            endContent={DeleteIcon}
            className="rounded border border-black bg-white px-6 text-sm max-sm:px-4"
          >
            Discard
          </Button>
        </div>
      </div>
    </div>
  );
}

const DeleteIcon = (
  <Image
    className="object-contain"
    src="/images/general/delete.png"
    alt="delete"
    width={17}
    height={17}
  />
);

const Label = ({ label }: { label: string }) => {
  return <h6 className="w-max text-xs font-light text-zinc-500">{label}</h6>;
};

const InputSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid-row-1 grid grid-cols-2">{children}</div>;
};
