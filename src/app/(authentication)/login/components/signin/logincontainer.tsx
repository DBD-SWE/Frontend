'use client';
import { Input } from '@/(general)/components/input';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/lib/actions/auth';

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

  const initialState = {
    message: '',
    error: '',
  };

  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(login, initialState);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form
      action={formAction}
      className=" flex h-[600px] w-[500px] flex-col justify-between rounded-lg bg-white px-14 shadow max-sm:h-screen max-sm:w-screen max-sm:justify-center max-sm:px-8"
    >
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
              type="email"
              name="email"
              disabled={pending}
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
              name="password"
              disabled={pending}
              minLength={8}
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
        <div>
          {state.error && (
            <div className="mb-2 text-red-500">{state.error}</div>
          )}
        </div>
        {/* Button  */}
        <div className="flex justify-center pb-20">
          <Button
            type="submit"
            color="primary"
            disabled={pending}
            className="flex-end h-10 w-full rounded px-11 text-sm"
          >
            Sign in
          </Button>
        </div>
      </div>
    </form>
  );
}
