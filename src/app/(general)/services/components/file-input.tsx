'use client';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  isDisabled?: boolean;
  onChange?: (e: any) => void;
  photos?: string[];
};

const FileInput = ({ isDisabled, onChange, photos }: Props) => {
  const [selectedImages, setSelectedImages] = useState(photos || []);

  const handleImageChange = (e: any) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      );
      if (onChange) {
        onChange({
          target: {
            value: fileArray,
            name: 'images',
          },
        });
      }

      setSelectedImages((prevImages) => prevImages.concat(fileArray));
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="flex w-full items-center gap-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative h-28 w-28">
            <Image
              src={image}
              alt={`Selected ${index}`}
              width={47}
              height={47}
              className="h-28 w-28 rounded-md object-cover shadow-sm"
            />
            {!isDisabled && (
              <button
                onClick={() => {
                  const newImages = [...selectedImages];
                  newImages.splice(index, 1);
                  setSelectedImages(newImages);
                }}
                className="absolute right-0 top-0 flex h-[15px] w-[15px] -translate-y-[5px] translate-x-[7px] items-center justify-center rounded-full bg-black p-[1px] text-xs text-white"
              >
                x
              </button>
            )}
          </div>
        ))}
      </div>
      {!isDisabled && (
        <div className="relative h-40 w-40 rounded-full shadow-sm md:w-full md:max-w-40">
          <div
            className={`flex h-40 w-40 -translate-y-[4px] flex-col items-center justify-center ${isDisabled ? 'opacity-50' : ''}`}
          >
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
            name="files"
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer rounded-full opacity-0"
            multiple
            disabled={isDisabled}
            onChange={handleImageChange}
          />
          {/* Just now for testing */}
        </div>
      )}
    </div>
  );
};

export default FileInput;
