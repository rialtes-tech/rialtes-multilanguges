"use client";
import React, { useState } from 'react';
import image1 from '../../../public/images/homepage/industry11.webp';
import image2 from '../../../public/images/homepage/industry2.webp';
import image3 from '../../../public/images/homepage/industry3.webp';
import image4 from '../../../public/images/homepage/industry4.webp';
import image5 from '../../../public/images/homepage/industry5_with_bgc.webp';
import Image from 'next/image';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: 'Switzerland Alps SAINT ANTONIEN' },
    { src: image2, alt: 'NAGANO PREFECTURE' },
    { src: image3, alt: 'MARRAKECH MEDINA' },
    { src: image4, alt: 'YOSEMITE NATIONAL PARK' },
    { src: image5, alt: 'LOS ANGELES BEACH' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full max-w-2xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto rounded-lg shadow-lg"
          width={1382}
          height={711}
          quality={60}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
