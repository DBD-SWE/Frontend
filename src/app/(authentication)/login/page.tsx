import LoginContainer from './components/signin/logincontainer';
import Image from 'next/image';

export default function Login() {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/signingpage/background.png')` }}
    >
      <div className="absolute  h-full w-full max-sm:h-screen max-sm:w-screen">
        {/* Logo positioned absolutely at the top */}
        <div className="absolute left-4  top-4 hidden transform lg:block">
          <Image
            src={'/images/signingpage/logo.png'}
            height={75}
            width={130}
            alt="logo"
            className="object-contain"
          />
        </div>

        {/* Main content */}
        <div className=" flex h-screen items-center justify-center px-12 max-sm:px-0 lg:flex lg:items-center lg:justify-between">
          {/* Text section */}
          <div className="hidden lg:block">
            <div>
              <Image
                src={'/images/signingpage/navgate.png'}
                alt="navgate"
                height={50}
                width={150}
              />
            </div>
            <p className="text-sm text-white">
              Unlock Lebanon, Your ultimate Travel Guide
            </p>
          </div>

          {/* Login form section */}
          <div className="">
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
