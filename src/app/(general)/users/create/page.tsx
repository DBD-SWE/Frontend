import { PageTitle, SubTitle } from '@/(general)/components/text';
import { Input, Select } from '@/(general)/components/input';
import roles from './roles';
import { Section, FileInput } from '../components';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';

const DeleteIcon = (
  <Image
    className="object-contain"
    src="/images/general/delete.png"
    alt="delete"
    width={17}
    height={17}
  />
);

export default function CreateUser() {
  return (
    <div className="flex w-full flex-col pb-10">
      {/* Head Section */}
      <div className="flex w-full flex-row items-start justify-between">
        <div className="flex flex-col">
          <PageTitle>User Management</PageTitle>
          <SubTitle content={['Users', '○', 'Create New User']} />
        </div>
      </div>

      {/* Body Section */}
      <div className="my-12 w-full">
        <Section
          title="Personal Information"
          description="Fill in basic information to establish the profile"
          form={
            <div className="grid w-[100%] max-w-[700px] flex-1 grid-cols-1 grid-rows-4 gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="text" label="First Name" />
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
              <Select items={roles} placeholder="User role" label="Role" />
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
