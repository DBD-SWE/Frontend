'use client';
import React, { useState } from 'react';
import Section from '../../components/section';
import { Input, Select, TextArea } from '../../../components/input';
import FileInput from '../../components/file-input';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import { useFormStatus } from 'react-dom';
import { createGuestHouse } from '@/lib/actions/guestHouses';
import { guestHouseSchema } from '@/lib/actions/schemas';
import { ZodError, number } from 'zod';

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

const Page = (props: Props) => {
  const accessibility = [
    { label: 'Accessible', value: 'Accessible' },
    { label: 'Non Accessible', value: 'Non Accessible' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    location_coordinates_lat: '',
    location_coordinates_long: '',
    number_of_bedrooms: '',
    number_of_bathrooms: '',
    accessibility: '',
    rating: '',
    images: [],
  });

  const [zodErrors, setZodErrors] = useState({
    name: '',
    description: '',
    address: '',
    location_coordinates_lat: '',
    location_coordinates_long: '',
    number_of_bedrooms: '',
    number_of_bathrooms: '',
    accessibility: '',
    rating: '',
  });

  const { pending } = useFormStatus();

  const createGuestHouse = async () => {
    try {
      console.log('formData', formData);
      const validatedData = guestHouseSchema.parse(formData);
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          setZodErrors((prev) => ({
            ...prev,
            [err.path[0]]: err.message,
          }));
        });
      }
    }
  };

  const onChange = (e: any) => {
    setZodErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form action={createGuestHouse} className="my-12 w-full">
      {/* General info - Name, Description */}
      <Section
        title="General Information"
        description="Fill in basic information to create the guest house."
        form={
          <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
            <Input
              type="text"
              label="Name"
              name="name"
              disabled={pending}
              onChange={onChange}
            />
            <TextArea
              label="Description"
              name="description"
              disabled={pending}
              onChange={onChange}
            />
          </div>
        }
      />

      {/* Location info - Address, Long and Lat */}
      <Section
        title="Location Information"
        description="This information is related to the location of the service on google maps"
        form={
          <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
            <Input
              type="text"
              label="Address"
              name="address"
              onChange={onChange}
              disabled={pending}
            />
            <div className="flex w-full gap-x-1">
              <Input
                type="text"
                name="location_coordinates_lat"
                onChange={onChange}
                className="w-1/2"
                label="logitude"
                disabled={pending}
              />
              <Input
                type="text"
                name="location_coordinates_long"
                onChange={onChange}
                className="w-1/2"
                label="latitude"
                disabled={pending}
              />
            </div>
          </div>
        }
      />

      {/* Service Stats - N of Bathrooms and Bedrooms */}
      <Section
        title="Service Statistics"
        description="Fill in the basic statistics useful for the users."
        form={
          <div className="flex w-[100%] max-w-[350px] flex-1 flex-col gap-x-5 gap-y-4 max-md:mt-7 lg:grid-cols-2 lg:grid-rows-2">
            <Input
              type="number"
              label="Bedrooms"
              name="number_of_bedrooms"
              onChange={onChange}
              disabled={pending}
            />
            <Input
              type="number"
              label="Bathrooms"
              name="number_of_bathrooms"
              onChange={onChange}
              disabled={pending}
            />
          </div>
        }
      />

      {/* Extra Information - Accessbility and rating */}
      <Section
        title="Extra Information"
        description="Extra information that would improve user experience."
        form={
          <div className="flex w-[100%] max-w-[700px] flex-1 gap-5 max-xl:flex-col max-md:mt-7">
            <div className="max-w-[350px] sm:w-[350px]">
              <Select
                items={accessibility}
                placeholder="Accessibility"
                label="Select"
                name="accessibility"
                isDisabled={pending}
                onChange={onChange}
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="text-xs">Rating</p>
              <div className="rounded-fill h-[30px] w-[2px] bg-zinc-200"></div>
              <StarRating isDisabled={pending} onChange={onChange} />
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
          <div className="flex">
            <FileInput isDisabled={pending} onChange={onChange} />
          </div>
        }
      />

      {/* Buttons */}
      <div className="mt-10 flex gap-3 max-[475px]:flex-col">
        <Button
          className="rounded bg-foreground px-6 text-sm text-background max-sm:px-4"
          endContent={<PlusIcon />}
          size="md"
          type="submit"
          disabled={pending}
        >
          Create Guest House
        </Button>
        <Button
          size="md"
          endContent={DeleteIcon}
          type="reset"
          disabled={pending}
          className="rounded border border-black bg-white px-6 text-sm max-sm:px-4"
        >
          Discard
        </Button>
      </div>
    </form>
  );
};

export default Page;
