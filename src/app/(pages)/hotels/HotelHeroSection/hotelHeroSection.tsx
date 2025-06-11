// components/hotelHeroSection.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/hotel-Hero-1.jpg',
  '/hotel-Hero-2.jpg',
  '/hotel-Hero.jpg',
  '/hotel-Hero-3.jpg',
];

export default function HotelHeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Images with Parallax */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
            Luxury Stays
          </span> <br />
          Unforgettable Experiences
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
          Discover handpicked hotels with our best price guarantee
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['🏖️ Beach Resorts', '🏔️ Mountain Retreats', '🌇 City Hotels', '🏕️ Countryside'].map((item) => (
            <span key={item} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base">
              {item}
            </span>
          ))}
        </div>

        {/* Additional CTA button at the bottom if needed */}
        <div className="text-center mt-12">
          <a
            href="tel:+1 (844) 954-5425"
            className="inline-block bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Call to Book Now
          </a>
        </div>
        {/* <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
          Explore Destinations
        </button> */}
      </motion.div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce w-6 h-6 border-4 border-white rounded-full"></div>
      </div>
    </div>
  );
}