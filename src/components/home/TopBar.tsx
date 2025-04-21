'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TopBar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 5000; // 5 segundos

  const images = [
    '/assets/topbar/img/Banner.png',
    '/assets/topbar/img/Banner.png',
    '/assets/topbar/img/Banner.png',
    '/assets/topbar/img/Banner.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, intervalTime);
    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="carousel w-full h-96 relative">
      {/* Slides dinámicos */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-96 ${currentSlide !== index ? 'hidden' : ''}`}
        >
          <Image
            src={image}
            alt="Carousel image"
            width={1920}
            height={384}
            className="w-full h-full object-cover"
          />
          <div className="carousel-indicators absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden sm:flex space-x-3">
            {images.map((_, idx) => (
              <button
                key={`indicator-${idx}`}
                onClick={() => setCurrentSlide(idx)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  currentSlide === idx ? 'bg-white' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
          <div className="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between">
            <button
              onClick={prevSlide}
              className="bg-white/50 hover:bg-white w-10 h-10 rounded-sm"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/50 hover:bg-white w-10 h-10 rounded-sm"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 