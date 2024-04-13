import Link from 'next/link';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 left-0 top-0 h-screen pl-10 ">
      <div className="mt-[96px] flex h-full w-48 flex-col items-start justify-between border-r-[1px] border-gray-100">
        {/* Overview */}
        <div className="mt-6 flex w-full flex-col ">
          <div className="relative w-full mb-5">
            <h2 className="text-xl font-semibold">Overview</h2>
            <div className="absolute -left-[11px] top-[14px] h-[1px] w-[10px] bg-[#cfcfcf] " />
            <div className="absolute -left-[11px] top-[14px] h-[11px] w-[1px] bg-[#cfcfcf] " />
            <div className="absolute -left-[11px] top-[25px] h-[1px] w-[138px] bg-[#cfcfcf] " />
          </div>
          {/* Overview Links */}
          <MyLink href="/" src="/images/sidebar/dashboard.png">
            Dashboard
          </MyLink>
          <MyLink href="/" src="/images/sidebar/dashboard.png">
            Dashboard
          </MyLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const upper_links = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    src: '/icons/dashboard.png',
  },

  {
    text: 'services',
    src: '/icons/services.png',
    group: [
      {
        href: '/services/guest-houses',
        text: 'Guest Houses',
        src: '/icons/services.png',
      },
      {
        href: '/services/attractions',
        text: 'Attractions',
        src: '/icons/products.svg',
      },
    ],
  },
  {
    href: '/users',
    text: 'Users',
    src: '/icons/users.png',
  },
  {
    href: '/roles',
    text: 'Roles & Permissions',
    src: '/icons/roles.png',
  },
  {
    href: '/activity-log',
    text: 'Activity Log',
    src: '/icons/activity.png',
  },
];

const MyLink = ({
  href,
  children,
  src,
}: {
  href: string;
  children: string;
  src: string;
}) => {
  return (
    <Link className="my-1 flex flex-row items-center cursor-pointer rounded-sm py-2 pl-4 text-sm font-semibold transition-colors hover:bg-gray-100 " href={href}>
      <Image
        objectFit="contain"
        src={src}
        alt={children}
        height={15}
        width={15}
      />
      <p className="ml-3">
        {children}
      </p>
    </Link>
  );
};
