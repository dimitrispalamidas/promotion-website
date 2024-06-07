"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/promo.jpg", "/promo-02.jpg", "/promo-03.jpg"];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-64 md:h-96 overflow-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            layout='fill'
            objectFit='cover'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
