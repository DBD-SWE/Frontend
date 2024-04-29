import Image from 'next/image';

const MailIcon = () => {
  return (
    <Image
      src="/icons/mail.png"
      alt="Delete"
      width={20}
      height={20}
      className="h-4 w-4 md:h-6 md:w-6"
    />
  );
};

export default MailIcon;
