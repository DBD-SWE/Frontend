import { PageTitle, SubTitle } from '@/components/text';
import React from 'react';
import SectionInfo from './components/SectionInfo';
import Section from '../components/section';
import { Input, Select, TextArea } from '@/components/input';
import FileInput from '../components/file-input';
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

type Props = {};

const page = (props: Props) => {
  const accessibility = [
    { label: 'Accessible', value: 'Accessible' },
    { label: 'Non Accessible', value: 'Non Accessible' },
  ];
  return (
    <div className="flex w-full flex-col">
      <div className="items-star flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <PageTitle>Guest Houses</PageTitle>
          <SubTitle content={['Services', '○', 'Guest Houses', '○', 'Add']} />
        </div>
      </div>
      <div className="my-12 w-full">
        <Section
          title="General Information"
          description="Fill in basic information to create the guest house."
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="text" label="Name" />
              <TextArea label="Description" />
            </div>
          }
        />

        <Section
          title="Location Information"
          description="This information is related to the location of the service on google maps"
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="text" label="Address" />
              <div className="flex w-full gap-x-1">
                <Input type="text" label="Logitude" className="w-1/2" />
                <Input type="text" label="Latitude" className="w-1/2" />
              </div>
            </div>
          }
        />

        <Section
          title="Service Statistics"
          description="Fill in the basic statistics useful for the users."
          form={
            <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
              <Input type="number" label="Bedrooms" />
              <Input type="number" label="Bathrooms" />
            </div>
          }
        />

        {/* Software Information */}
        <Section
          title="Software Information"
          description="This information is related directly to this software"
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 gap-x-5 max-md:mt-7 lg:max-w-[340px]">
              <Select
                items={accessibility}
                placeholder="Choose Accessibility"
                label="Accessibility"
              />
              <div className="flex items-center justify-center">
                <p className="text-xs">Rating</p>
              </div>
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
};

export default page;
