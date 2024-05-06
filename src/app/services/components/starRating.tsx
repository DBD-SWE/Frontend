'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  rating?: number;
  isDisabled?: boolean;
};

const StarRating = ({ rating, isDisabled }: Props) => {
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(rating ? rating - 1 : -1);
  return (
    <div className={`flex gap-1 ${isDisabled ? 'opacity-50' : ''}`}>
      {/* Render 5 stars, either empty or full based on the hover and the selection */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => !isDisabled && setHoveredStar(index)}
          onMouseLeave={() => !isDisabled && setHoveredStar(-1)}
          onClick={() => !isDisabled && setSelectedStar(index)}
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
      {/* Hidden input so that the stars can be used as form value */}
      <input type="hidden" name="rating" value={selectedStar + 1} />
    </div>
  );
};

export default StarRating;
