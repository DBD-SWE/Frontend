import { PageTitle, SubTitle } from '@/components/text';
import React from 'react';
import Section from '@/services/components/section';
import { Input, Select, TextArea } from '@/components/input';
import FileInput from '@/services/components/file-input';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';
import StarRating from '../../components/starRating';

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
          <PageTitle>Attractions</PageTitle>
          <SubTitle content={['Services', '○', 'Attractions', '○', 'Add']} />
        </div>
      </div>
      <div className="my-12 w-full">
        <Section
          title="General Information"
          description="Fill in basic information to create the attraction."
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

        {/* Software Information */}
        <Section
          title="Software Information"
          description="This information is related directly to this software"
          form={
            <div className="flex w-[100%] max-w-[700px] flex-1 gap-5 max-xl:flex-col max-md:mt-7">
              <div className="max-w-[350px] sm:w-[350px]">
                <Select
                  items={accessibility}
                  placeholder="Accessibility"
                  label="Select"
                />
              </div>
              <div className="flex items-center gap-5">
                <p className="text-xs">Rating</p>
                <div className="rounded-fill h-[30px] w-[2px] bg-zinc-200"></div>
                <StarRating />
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
        <div className="mt-10 flex gap-3 max-[475px]:flex-col">
          <Button
            className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
            endContent={<PlusIcon />}
            size="md"
          >
            Create Attraction
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
