'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  rating?: number;
  isDisabled?: boolean;
  onChange?: (e: any) => void;
  isInvalid?: boolean;
  errorMessage?: string;
};

const StarRating = ({ rating, isDisabled, onChange }: Props) => {
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(rating);
  console.log(selectedStar);
  const handleRatingChange = (index: number) => {
    setSelectedStar(index);
    if (onChange) {
      onChange({
        target: {
          value: index + 1,
          name: 'rating',
        },
      }); // Call the onChange handler passing the new rating
    }
  };

  return (
    <div>
      <div className={`flex gap-1 ${isDisabled ? 'opacity-50' : ''}`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => !isDisabled && setHoveredStar(index)}
            onMouseLeave={() => !isDisabled && setHoveredStar(-1)}
            onClick={() => !isDisabled && handleRatingChange(index)}
            className={`${!isDisabled ? 'cursor-pointer' : ''}`}
          >
            <Image
              src={
                (!isDisabled && hoveredStar !== -1 && index <= hoveredStar) ||
                (hoveredStar === -1 && index <= selectedStar)
                  ? '/icons/star.png'
                  : '/icons/emptyStar.png'
              }
              alt="star"
              width={10}
              height={10}
              className={`${hoveredStar === index ? 'animate-bounce' : ''} ${hoveredStar > index ? 'animate-pulse' : ''} duration-[3000]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
