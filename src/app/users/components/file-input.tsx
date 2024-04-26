import Image from 'next/image';

const FileInput = () => {
  return (
    <div className="relative h-40 w-40 rounded-full shadow-sm md:w-full md:max-w-40">
      <div className="flex h-full w-full -translate-y-[4px] flex-col items-center justify-center">
        <Image
          src="/images/users/upload.png"
          alt="upload"
          width={47}
          height={47}
          className="object-contain"
        />
        <p className="mt-1 text-xs text-zinc-500">Drop or select file</p>
      </div>
      <input
        type="file"
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer rounded-full opacity-0"
      />
      {/* Just now for testing */}
    </div>
  );
};

export default FileInput;
