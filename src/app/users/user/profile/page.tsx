import { Input, Select } from '@/components/input';
import { Section, FileInput } from '../../components';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import roles from '@/users/create/roles';

export default function Profile() {
  return (
    <div className="flex w-full flex-col pb-12">
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
          start
          title="Software Information"
          description="This information is related directly to this software"
          form={
            <div className="grid w-[100%] max-w-[400px] flex-1 gap-y-4 max-md:mt-7">
              <InputSection>
                <Label label="User Role" />
                <Select
                  size="md"
                  items={roles}
                  placeholder=""
                  label=""
                  startContent={
                    <Icon src="/images/users/user-role.png" alt="User role" />
                  }
                />
              </InputSection>
            </div>
          }
        />

        {/* Photo Upload */}
        <Section
          title="Photo Information"
          description="Upload a photo for the user"
          last
          start
          center
          form={
            <div className="grid w-[100%] max-w-[400px] flex-1 gap-y-4 max-md:mt-7">
              <InputSection>
                <Label label="User Photo" />
                <div className="relative flex w-full flex-col items-start justify-start max-md:items-center">
                  <FileInput />
                </div>
              </InputSection>
            </div>
          }
        />

        {/* Buttons */}
        <div className="mt-10 flex gap-x-3 max-lg:justify-end  max-md:justify-center">
          <Button
            className="rounded bg-foreground px-6 text-sm text-background max-md:w-full max-md:max-w-[400px] max-sm:px-4"
            endContent={<DeleteIcon />}
            size="md"
          >
            Edit User
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
const DeleteIcon = () => (
  <Image
    className="-mt-[2px] ml-2 flex-shrink-0 object-contain"
    src="/images/general/edit-white.png"
    alt="Edit User"
    width={17}
    height={17}
  />
);

const Label = ({ label }: { label: string }) => {
  return (
    <h6 className="block w-44 text-sm font-light text-zinc-500 max-md:mb-2">
      {label}:
    </h6>
  );
};

const InputSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row items-center max-md:flex-col max-md:items-start">
      {children}
    </div>
  );
};
