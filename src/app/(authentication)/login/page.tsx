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
      <div className="absolute left-8 top-4 hidden transform lg:block">
        <Image
          src={'/images/signingpage/logo.png'}
          height={75}
          width={130}
          alt="logo"
          className="object-contain"
        />
      </div>

      {/* Main content */}
      <div className="lg:flex h-screen lg:items-center lg:justify-between px-12 flex items-center justify-center">
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
  );
}
