'use client';
import React, { useEffect, useState } from 'react';
import Section from '../../components/section';
import { Input, Select, TextArea } from '../../../components/input';
import FileInput from '../../components/file-input';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../../../../../../public/icons/jsx/PlusIcon';
import Image from 'next/image';
import StarRating from '../../components/starRating';
import { useFormStatus } from 'react-dom';
import { guestHouseSchema } from '@/lib/actions/schemas';
import { ZodError, number, set } from 'zod';
import { createGuestHouse } from '@/lib/actions/guestHouses';
import { getAllDistricts } from '@/lib/actions/districts';
import Link from 'next/link';

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
    { label: 'Accessible', value: true },
    { label: 'Non Accessible', value: false },
  ];

  const [districts, setDistricts] = useState([]);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    const getDistricts = async () => {
      console.log('hi');
      const { message, data, status } = await getAllDistricts();
      if (status === 'ok') {
        setDistricts(
          data?.districts.map((district: any) => {
            return {
              label: district.name,
              value: district.id,
            };
          }),
        );
      } else {
        setPageError(message as string);
      }
      console.log('hi');
    };
    getDistricts();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    location_coordinates_lat: '',
    location_coordinates_long: '',
    number_of_bedrooms: 0,
    number_of_bathrooms: 0,
    accessibility: null,
    rating: '',
    images: [],
    district: null,
    category: '',
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
    district: '',
    category: '',
  });

  const { pending } = useFormStatus();

  const handleSubmit = async () => {
    try {
      console.log('formData', formData);
      const validatedData = guestHouseSchema.parse({
        ...formData,
        rating: parseInt(formData.rating),
        number_of_bedrooms: Number(formData.number_of_bedrooms),
        number_of_bathrooms: Number(formData.number_of_bathrooms),
      });
      await createGuestHouse(validatedData);
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

  if (!!pageError) {
    return (
      <div className="mt- flex h-[700px] w-full flex-col items-center justify-center gap-4">
        <p>{pageError}</p>
        <Link href="/services/guest-houses/create">
          <Button color="primary" className="h-8 rounded px-4 text-sm">
            Try Again
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className="my-12 w-full">
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
              isInvalid={!!zodErrors.name}
              errorMessage={zodErrors.name}
            />
            <TextArea
              label="Description"
              name="description"
              disabled={pending}
              onChange={onChange}
              isInvalid={!!zodErrors.description}
              errorMessage={zodErrors.description}
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
              isInvalid={!!zodErrors.address}
              errorMessage={zodErrors.address}
            />
            <div className="flex w-full gap-x-1">
              <Input
                type="text"
                name="location_coordinates_lat"
                onChange={onChange}
                className="w-1/2"
                label="logitude"
                disabled={pending}
                isInvalid={!!zodErrors.location_coordinates_lat}
                errorMessage={zodErrors.location_coordinates_lat}
              />
              <Input
                type="text"
                name="location_coordinates_long"
                onChange={onChange}
                className="w-1/2"
                label="latitude"
                disabled={pending}
                isInvalid={!!zodErrors.location_coordinates_long}
                errorMessage={zodErrors.location_coordinates_long}
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
              isInvalid={!!zodErrors.number_of_bedrooms}
              errorMessage={zodErrors.number_of_bedrooms}
            />
            <Input
              type="number"
              label="Bathrooms"
              name="number_of_bathrooms"
              onChange={onChange}
              disabled={pending}
              isInvalid={!!zodErrors.number_of_bathrooms}
              errorMessage={zodErrors.number_of_bathrooms}
            />
            <Input
              type="text"
              label="Category"
              name="category"
              onChange={onChange}
              disabled={pending}
              isInvalid={!!zodErrors.category}
              errorMessage={zodErrors.category}
            />
            <Select
              items={districts}
              placeholder="district"
              label="Select"
              name="district"
              isDisabled={pending}
              onChange={onChange}
              isInvalid={!!zodErrors.district}
              errorMessage={zodErrors.district}
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
                isInvalid={!!zodErrors.accessibility}
                errorMessage={zodErrors.accessibility}
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-center gap-5">
                <p className="text-xs">Rating</p>
                <div className="rounded-fill h-[30px] w-[2px] bg-zinc-200"></div>
                <StarRating
                  isDisabled={pending}
                  onChange={onChange}
                  isInvalid={!!zodErrors.rating}
                  errorMessage={zodErrors.rating}
                />
              </div>
              {!!zodErrors.rating ? (
                <span className="text-xs text-red-500">
                  {zodErrors.rating === 'Expected number, received string'
                    ? 'Required'
                    : zodErrors.rating}
                </span>
              ) : null}
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
