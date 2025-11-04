"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const bgSliderRef = useRef<Slider>(null);
  const textSliderRef = useRef<Slider>(null);

  const slides = [
    {
      image: "/images/car-hero-section.avif",
      heading: "Drive Your Dreams",
      subheading: "From exotic supercars to elegant luxury sedans. Experience automotive perfection with white-glove service.",
      alt: "Luxury Car",
    },
    {
      image: "/images/flight-hero-section.avif",
      heading: "Fly First Class, Every Time",
      subheading: "Premium routes, exclusive deals, seamless booking. Your journey begins the moment you book with us.",
      alt: "Flight",
    },
    {
      image: "/images/hotel-hero-section.avif",
      heading: "Where Luxury Meets Paradise",
      subheading: "Curated 5-star hotels and resorts worldwide. Wake up to breathtaking views and unmatched comfort.",
      alt: "Luxury Hotel",
    },
    {
      image: "/images/cruise-hero-section.avif",
      heading: "Sail Into Extraordinary",
      subheading: "Discover the world's most stunning destinations by sea. All-inclusive luxury cruising reimagined.",
      alt: "Cruise",
    },
  ];

  // Image loading detection
  useEffect(() => {
    setMounted(true);

    const fallbackTimer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const handleImageError = () => {
    setImagesLoaded(true);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    fade: true,
    arrows: false,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: false,
    pauseOnFocus: false,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
      if (textSliderRef.current) {
        textSliderRef.current.slickGoTo(next);
      }
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-6 w-full">
        <ul className="m-0 flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${i === activeSlide
          ? "bg-white border-white scale-125"
          : "bg-white/30 border-white/50 hover:bg-white/50"
          }`}
      />
    ),
  };

  const textSliderSettings = {
    ...sliderSettings,
    dots: false,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next);
      if (bgSliderRef.current) {
        bgSliderRef.current.slickGoTo(next);
      }
    },
  };

  // Loading Skeleton
  if (!mounted || !imagesLoaded) {
    return (
      <div className="relative w-full h-screen max-h-[900px] min-h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />

        {/* Content Skeleton */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto w-full px-6 sm:px-10 lg:px-16 text-center">
            {/* Heading Skeleton */}
            <div className="h-16 sm:h-20 bg-gray-400/30 rounded-lg mx-auto max-w-2xl mb-6 animate-pulse"></div>

            {/* Subheading Skeleton */}
            <div className="h-6 bg-gray-400/20 rounded mx-auto max-w-xl mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-400/20 rounded mx-auto max-w-lg mb-8 animate-pulse"></div>

            {/* Button Skeletons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="h-12 w-48 bg-gray-400/30 rounded-full animate-pulse"></div>
              <div className="h-12 w-40 bg-gray-400/20 rounded-full animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm font-medium">Loading your travel experience...</span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen max-h-[900px] min-h-[600px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Slider ref={bgSliderRef} {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-screen max-h-[900px] min-h-[600px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center transform scale-105 transition-transform duration-8000 ease-out"
                quality={90}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              {/* Multi-layer Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.15) 100%) pointer-events-none" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="max-w-6xl w-full px-6 sm:px-10 lg:px-16 text-center">
          {/* Text Slider */}
          <div className="mb-8">
            <Slider ref={textSliderRef} {...textSliderSettings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight enhanced-text-shadow">
                    {slide.heading}
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                    {slide.subheading}
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start Your Reservation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="group inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white border-2 border-white/30 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>


          {/* Footer Note */}
          <p className="text-white/75 text-sm sm:text-base drop-shadow">
            We never collect payment details on-site — final bookings are placed only after your approval.
          </p>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
      .enhanced-text-shadow {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.25),
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 16px 32px rgba(0, 0, 0, 0.15);
}

        /* Smooth scaling animation for background images */
        .slick-active .transform {
          transform: scale(1) !important;
        }

        /* Custom slick dots positioning */
        .slick-dots {
          bottom: 2rem !important;
        }

        /* Animation keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        /* Hide default slick arrows */
        .slick-prev,
        .slick-next {
          display: none !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slick-dots {
            bottom: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
