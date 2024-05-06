import LoginContainer from './components/signin/logincontainer';

export default function Login() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/signingpage/background.png')` }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>

      <div className="flex justify-between items-center px-8">
        <div className="">
          <h1 className=" font-bold text-white">Welcome Back!</h1>
          <p className="text-sm text-white">
            Enter the world of endless possibilities where all your data
            management becomes easier.
          </p>
        </div>

        <div className="">
          <LoginContainer />
        </div>
      </div>
    </div>
  );
}
