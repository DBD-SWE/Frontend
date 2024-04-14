import Link from 'next/link';
import Image from 'next/image';
import SidebarLink from './link';
import DropDownLink from './dropdown-link';

const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-0 h-screen pl-5">
      <div className="md:mt-[96px] flex h-full w-48 flex-col items-start justify-between border-r-[1px] border-gray-100 pb-[112px]">
        {/* Overview */}
        <div className="mt-6 flex w-full flex-col ">
          <div className="relative mb-4 w-full">
            <h2 className="text-lg font-normal">Overview</h2>
            <div className="absolute -left-[11px] top-[14px] h-[1px] w-[10px] bg-gray-100 " />
            <div className="absolute -left-[11px] top-[14px] h-[14px] w-[1px] bg-gray-100 " />
            <div className="absolute -left-[11px] top-[28px] h-[1px] w-[202px] bg-gray-100 " />
          </div>
          {/* Overview Links */}
          <SidebarLink
            image={{
              src: '/images/sidebar/dashboard.png',
              width: 18,
              height: 18,
            }}
            title="Dashboard"
            href="/"
          />
          <DropDownLink
            title="Services"
            image={{
              src: '/images/sidebar/services.png',
              width: 15,
              height: 15,
            }}
            group={[
              { title: 'Guest Houses', href: '/services/guest-houses' },

              { title: 'Attractions', href: '/services/attractions' },
            ]}
          />
          <SidebarLink
            image={{ src: '/images/sidebar/users.png', width: 17, height: 17 }}
            title="Users"
            href="/users"
          />
          <SidebarLink
            image={{
              src: '/images/sidebar/activity.png',
              width: 15,
              height: 15,
            }}
            title="Activity Log"
            href="/activity-log"
          />
        </div>
        {/* Bottom Links */}
        <div className="flex w-full flex-col">
          <SidebarLink
            image={{
              src: '/images/sidebar/documentation.png',
              width: 15,
              height: 15,
            }}
            title="Documentation"
            href="/documentation"
          />
          <SidebarLink
            image={{
              src: '/images/sidebar/support.png',
              width: 15,
              height: 15,
            }}
            title="Support"
            href="/support"
          />
          <SidebarLink
            image={{ src: '/images/sidebar/logout.png', width: 15, height: 15 }}
            title="Logout"
            href="/logout"
          />
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
        {src ? (
          <Image
            src={src}
            alt={children}
            height={height || 20}
            width={width || 20}
            className="object-contain"
          />
        ) : (
          <div className="h-[10px] w-[10px] rounded-full border-2 border-gray-200 bg-white" />
        )}
      </div>
      <p className="ml-2.5 text-sm font-medium">{children}</p>
    </Link>
  );
};
