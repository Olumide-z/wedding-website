import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/01.jpg',
  '/images/02.jpg',
  '/images/03.jpg',
  '/images/04.jpg',
  '/images/05.jpg',
  '/images/06.jpg',
  '/images/07.jpg',
  '/images/08.jpg',
  '/images/09.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
  '/images/12.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`slide-${index}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute md:bottom-[8rem] bottom-[3rem] md:left-[5rem] left-4 text-white">
        <h1 className="md:text-[4rem] sm:text-[3.5rem] text-[3rem] header">Bolaji & Oyinda</h1>
        <p className="mt-2 text-[1.1rem]">Hi there, We look forward to celebrating our day with you !!!</p>
      </div>
    </div>
  );
}
