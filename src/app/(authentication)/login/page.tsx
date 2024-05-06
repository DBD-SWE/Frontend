import LoginContainer from './components/signin/logincontainer';
import Image from 'next/image';

export default function Login() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/signingpage/background.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>
      
      {/* Logo positioned absolutely at the top */}
      <div className="absolute top-4 left-8 transform ">
        <Image
          src={'/images/signingpage/logo.png'}
          height={100}
          width={130}
          alt="logo"
          className="object-contain"
        />
      </div>
      
      {/* Main content */}
      <div className="flex h-screen items-center justify-between px-12">
        {/* Text section */}
        <div className="">
          <h1 className="font-bold text-white">Welcome Back!</h1>
          <p className="text-sm text-white">
            Enter the world of endless possibilities where all your data
            management becomes easier.
          </p>
        </div>

        {/* Login form section */}
        <div className="">
          <LoginContainer />
        </div>
      </div>
    </div>
  );
}
