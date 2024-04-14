import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from '@/icons';

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-0 h-screen pl-10 ">
      <div className="mt-[96px] flex h-full w-48 flex-col items-start justify-between border-r-[1px] border-gray-100 pb-[112px]">
        {/* Overview */}
        <div className="mt-6 flex w-full flex-col ">
          <div className="relative mb-4 w-full">
            <h2 className="text-lg font-normal">Overview</h2>
            <div className="absolute -left-[11px] top-[14px] h-[1px] w-[10px] bg-gray-100 " />
            <div className="absolute -left-[11px] top-[14px] h-[14px] w-[1px] bg-gray-100 " />
            <div className="absolute -left-[11px] top-[28px] h-[1px] w-[202px] bg-gray-100 " />
          </div>
          {/* Overview Links */}
          <MyLink
            width={18}
            height={18}
            href="/"
            src="/images/sidebar/dashboard.png"
          >
            Dashboard
          </MyLink>
          <div className="my-1 flex cursor-pointer flex-row items-center justify-between rounded-sm py-2 pl-4 transition-colors hover:bg-gray-100">
            <div className="flex flex-row items-center">
              <div className="flex h-[20px] w-[20px] flex-row items-center justify-center">
                <Image
                  src="/images/sidebar/services.png"
                  alt="Services"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </div>
              <p className="ml-2.5 text-sm font-medium">Services</p>
            </div>
            <div className="mr-3 -rotate-90 text-black [&_svg]:h-[12px] [&_svg]:w-[12px]">
              <ArrowIcon />
            </div>
          </div>
          <MyLink
            width={17}
            height={17}
            href="/"
            src="/images/sidebar/users.png"
          >
            Users
          </MyLink>
          <MyLink href="/" src="/images/sidebar/roles.png">
            Services
          </MyLink>
        </div>
        {/* Bottom Links */}
        <div className="flex w-full flex-col">
          <MyLink
            width={15}
            height={15}
            href="/"
            src="/images/sidebar/documentation.png"
          >
            Documentation
          </MyLink>
          <MyLink
            href="/"
            width={15}
            height={15}
            src="/images/sidebar/support.png"
          >
            Support
          </MyLink>
          <MyLink
            width={15}
            height={15}
            href="/"
            src="/images/sidebar/logout.png"
          >
            Logout
          </MyLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const DropDown = () => {
  return (
    <div className="my-1 flex cursor-pointer flex-row items-center justify-between rounded-sm py-2 pl-4 text-sm font-semibold transition-colors hover:bg-gray-100"></div>
  );
};

const MyLink = ({
  href,
  children,
  src,
  width = 20,
  height = 20,
}: {
  href: string;
  children: string;
  src: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Link
      className="my-1 flex cursor-pointer flex-row items-center rounded-sm py-2 pl-4 text-sm font-semibold transition-colors hover:bg-gray-100 "
      href={href}
    >
      <div className="flex h-[20px] w-[20px] flex-row items-center justify-center">
        <Image
          src={src}
          alt={children}
          height={height || 20}
          width={width || 20}
          className="object-contain"
        />
      </div>
      <p className="ml-2.5 text-sm font-medium">{children}</p>
    </Link>
  );
};
