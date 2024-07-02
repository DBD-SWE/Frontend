'use client';
import { useState } from 'react';
import { Input } from '@/(general)/components/input';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';
import { fillUserInfo, uploadImage } from '@/lib/actions/auth';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function OnboardingContainer() {
  const router = useRouter();
  const initialState = {
    message: '',
    error: '',
  };

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(fillUserInfo, initialState);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setImageFile(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (imageFile) {
      const imageFormData = new FormData();
      imageFormData.append('image', imageFile);

      try {
        const uploadResponse = await uploadImage(imageFormData);
        console.log('uploadResponse:', JSON.stringify(uploadResponse, null, 2));
        if (
          uploadResponse.message === 'Image uploaded successfully.' &&
          uploadResponse.image_id
        ) {
          formData.append('image', uploadResponse.image_id);
        }
      } catch (err) {
        console.error('Error uploading image:', err);
        return;
      }
    }

    const response = await fillUserInfo(formData);
    console.log('response:', JSON.stringify(response, null, 2));
    // go to the next page

    if (response.message === 'User profile created successfully.') {
      // redirect to the next page
      router.push('/');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-[600px] w-[500px] flex-col justify-between rounded-lg bg-white px-14 shadow max-sm:h-screen max-sm:w-screen max-sm:justify-center max-sm:px-8"
    >
      {/* Heading */}
      <div>
        <div className="w-full text-center">
          <h1 className="pb-2 pt-12 text-[15px] font-bold">Onboarding</h1>
          <p className="text-[10px] font-light text-zinc-500">
            Please enter your details to continue
          </p>
          <div className="mt-8 h-[1px] bg-zinc-300" />
        </div>
        {/* Inputs */}
        <div className="mt-10 w-full">
          <div className="pb-6 pt-12">
            <Input
              className="w-full self-center"
              placeholder="First Name"
              labelPlacement="outside"
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              type="text"
              name="first_name"
              disabled={pending}
            />
          </div>
          <div>
            <Input
              className="w-full self-center"
              placeholder="Last Name"
              labelPlacement="outside"
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              type="text"
              name="last_name"
              disabled={pending}
            />
          </div>
          <div className="flex items-center gap-5 py-5">
            <p className="">Profile Picture:</p>
            <div className="group relative h-20 w-20 rounded-full shadow-sm md:w-full md:max-w-20">
              <div className="flex h-full w-full -translate-y-[4px] flex-col items-center justify-center overflow-hidden rounded-full border">
                {uploadedImage ? (
                  <Image
                    src={uploadedImage}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src="/images/users/upload.png"
                    alt="upload"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                )}
                {uploadedImage && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100">
                    <span className="ml-4 text-sm text-white">
                      Click to replace
                    </span>
                  </div>
                )}
              </div>
              <input
                type="file"
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer rounded-full opacity-0"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {state.error && (
            <div className="mb-2 text-red-500">{state.error}</div>
          )}
        </div>
        {/* Button */}
        <div className="flex justify-center pb-20">
          <Button
            type="submit"
            color="primary"
            disabled={pending}
            className="flex-end h-10 w-full rounded px-11 text-sm"
          >
            Continue
          </Button>
        </div>
      </div>
    </form>
  );
}
