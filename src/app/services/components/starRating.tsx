'use client';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {};

const StarRating = (props: Props) => {
  const [hoveredStar, setHoveredStar] = useState(-1);
  const [selectedStar, setSelectedStar] = useState(-1);

  return (
    <div className="flex gap-1">
      {/* Render 5 stars, either empty or full based on the hover and the selection */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredStar(index)}
          onMouseLeave={() => setHoveredStar(-1)}
          onClick={() => setSelectedStar(index)}
          className="cursor-pointer"
        >
          <Image
            src={
              (hoveredStar !== -1 && index <= hoveredStar) ||
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
