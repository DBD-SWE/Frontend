'use client';
import { Input } from '@/(general)/components/input';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
export default function LoginContainer() {
  const Mail = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/mail.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="mail"
      />
    </div>
  );
  const View = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/view.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="view"
      />
    </div>
  );
  const Hide = (
    <div className="flex flex-row items-center">
      <Image
        src={'/images/signingpage/hide.png'}
        width={15}
        height={15}
        className="object-contain"
        alt="hide"
      />
    </div>
  );
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex h-[700px] w-2/5 flex-col justify-between rounded-lg px-14 shadow">
      {/* Heading  */}
      <div>
        <div className="w-full text-center">
          <h1 className="pb-2 pt-12 text-[15px] font-bold">Sign In</h1>
          <p className="text-[10px] font-light text-zinc-500">
            Enter your credentials to access your account.
          </p>
          <div className="mt-8 h-[1px] bg-zinc-300" />
        </div>
        {/* Inputs */}
        <div className="mt-10 w-full">
          <div className="pb-6 pt-12">
            <Input
              className="w-full self-center"
              label="Email Address"
              labelPlacement="outside"
              placeholder=" "
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              startContent={Mail}
            />
          </div>
          <div>
            <Input
              className="w-full self-center "
              label="Password"
              labelPlacement="outside"
              placeholder=" "
              variant="bordered"
              classNames={{ inputWrapper: 'bg-white' }}
              startContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? Hide : View}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
            />
            {/* Forgot password link */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-xs font-medium italic text-zinc-500 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Button  */}
        <div className="flex justify-center pb-20">
          <Button
            color="primary"
            className="flex-end h-10 w-full rounded px-11 text-sm"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
