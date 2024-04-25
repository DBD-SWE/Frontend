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
              <InputSection>
                <Label label="First Name" />
                <Input
                  type="text"
                  size="md"
                  startContent={
                    <Icon src="/images/users/user.png" alt="First Name" />
                  }
                />
              </InputSection>
              <InputSection>
                <Label label="Last Name" />
                <Input
                  type="text"
                  size="md"
                  startContent={
                    <Icon src="/images/users/user.png" alt="Last Name" />
                  }
                />
              </InputSection>
              <InputSection>
                <Label label="Email" />
                <Input
                  type="email"
                  size="md"
                  startContent={
                    <Icon src="/images/users/email.png" alt="Email" />
                  }
                />
              </InputSection>
              <InputSection>
                <Label label="Phone Number" />
                <Input
                  size="md"
                  type="tel"
                  name="phone"
                  startContent={
                    <Icon src="/images/users/telephone.png" alt="Email" />
                  }
                />
              </InputSection>
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
          {/* <Button
            size="md"
            endContent={DeleteIcon}
            className="rounded border border-black bg-white px-6 text-sm max-sm:px-4"
          >
            Discard
          </Button> */}
        </div>
      </div>
    </div>
  );
}

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    className="mr-2 flex-shrink-0 object-contain"
    src={src}
    alt={alt}
    width={17}
    height={17}
  />
);

const Label = ({ label }: { label: string }) => {
  return (
    <h6 className="block w-44 text-sm font-light text-zinc-500">{label}:</h6>
  );
};

const InputSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row items-center">{children}</div>;
};
