import { Input } from '@/(general)/components/input';

export default function LoginContainer() {
  return (
    <div className="h-4/5 w-2/5 rounded-lg px-14 shadow">
      {/* Heading  */}
      <div className="w-full text-center">
        <h1 className="pb-2 pt-12 text-[15px] font-bold">Sign In</h1>
        <p className="text-[10px] font-light text-zinc-500">
          Enter your credentials to access your account.
        </p>
        <div className="mt-8 h-[1px] bg-zinc-300" />
      </div>
      {/* Inputs */}
      <div className="mt-10 w-full">
        <div className="flex">
          <Input className="w-full self-center" />
        </div>
      </div>
    </div>
  );
}
