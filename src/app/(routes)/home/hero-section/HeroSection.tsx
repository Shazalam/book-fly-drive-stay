// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroSection = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5500,
//     fade: true,
//     arrows: false,
//     cssEase: "linear",
//     beforeChange: (oldIndex: number, newIndex: number) => setActiveSlide(newIndex),
//     pauseOnHover: false,
//     appendDots: (dots: React.ReactNode) => (
//       <div className="absolute bottom-6 w-full pointer-events-none">
//         <ul className="m-0 flex justify-center space-x-3 pointer-events-auto">{dots}</ul>
//       </div>
//     ),
//     customPaging: (i: number) => (
//       <div className={`w-3 h-3 border-2 border-white ${i === activeSlide ? 'bg-white' : 'bg-white/10'} rounded-full transition-all duration-300 hover:bg-white/50`} />
//     ),
//   };


//    // Enhanced hero slides with emotional impact and visual appeal
// const heroSlides = [
//   {
//     image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
//     heading: "Drive Your Dreams",
//     subheading: "From exotic supercars to elegant luxury sedans. Experience automotive perfection with white-glove service.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
//     heading: "Fly First Class, Every Time",
//     subheading: "Premium routes, exclusive deals, seamless booking. Your journey begins the moment you book with us.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
//     heading: "Where Luxury Meets Paradise",
//     subheading: "Curated 5-star hotels and resorts worldwide. Wake up to breathtaking views and unmatched comfort.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1600&auto=format&fit=crop",
//     heading: "Sail Into Extraordinary",
//     subheading: "Discover the world's most stunning destinations by sea. All-inclusive luxury cruising reimagined.",
//   },
// ];


//   return (
//     <div className="relative h-screen w-full max-h-[900px] overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           {heroSlides.map((slide, index) => (
//             <div key={index} className="relative h-[88vh] min-h-[520px]">
//               <div className="relative h-full w-full" >
//                 <Image
//                   src={slide.image}
//                   alt={slide.heading}
//                   fill
//                   priority={index === 0}
//                   className="object-cover object-center background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(your-image);
// "
//                 />
//                 {/* Gradient overlays for depth & readability */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-transparent pointer-events-none" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       {/* Hero Content (text slider) */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="max-w-5xl mx-auto w-full px-6 sm:px-10 lg:px-16 text-center">
//           <Slider
//             {...settings}
//             fade
//             arrows={false}
//             dots={false}
//             autoplay
//             autoplaySpeed={5500}
//             speed={1200}
//           >
//             {heroSlides.map((slide, idx) => (
//               <div key={idx} className="py-10 md:py-10">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight">
//                   {slide.heading}
//                 </h1>
//                 <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
//                   {slide.subheading}
//                 </p>
//               </div>
//             ))}
//           </Slider>

//           {/* CTA Buttons */}
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//             <a
//               href="/contact"
//               className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-xl hover:scale-[1.03] transition-transform duration-300"
//             >
//               Start Your Reservation
//             </a>
//             <a
//               href="#services"
//               className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/90 bg-white/6 hover:bg-white/12 transition"
//             >
//               Explore Services
//             </a>
//           </div>

//           {/* Small footer note inside hero */}
//           <p className="mt-6 text-xs text-white/70">
//             We never collect payment details on-site — final bookings are placed only after your approval.
//           </p>
//         </div>
//       </div>


//       {/* tiny style tweaks & keyframes for floating */}
//       <style jsx>{`
//         :global(.slick-dots) {
//           bottom: 18px;
//         }
//         :global(.slick-dots li button:before) {
//           color: rgba(255, 255, 255, 0.9);
//         }
//         @keyframes floatSlow {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         @keyframes floatSlower {
//           0% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-6px);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }
//         :global(.animate-float-slow) {
//           animation: floatSlow 6s ease-in-out infinite;
//         }
//         :global(.animate-float-slower) {
//           animation: floatSlower 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;



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
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
      heading: "Drive Your Dreams",
      subheading: "From exotic supercars to elegant luxury sedans. Experience automotive perfection with white-glove service.",
      alt: "Luxury Car",
    },
    {
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
      heading: "Fly First Class, Every Time",
      subheading: "Premium routes, exclusive deals, seamless booking. Your journey begins the moment you book with us.",
      alt: "Flight",
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
      heading: "Where Luxury Meets Paradise",
      subheading: "Curated 5-star hotels and resorts worldwide. Wake up to breathtaking views and unmatched comfort.",
      alt: "Luxury Hotel",
    },
    {
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1600&auto=format&fit=crop",
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
        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
          i === activeSlide 
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
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
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
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start Your Reservation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#services"
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





// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   const bgSliderRef = useRef<HTMLDivElement>(null);
//   const textSliderRef = useRef<HTMLDivElement>(null);
//   const [mounted, setMounted] = useState(false);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop",
//       heading: "Drive Your Dreams",
//       subheading: "From exotic supercars to elegant luxury sedans. Experience automotive perfection with white-glove service.",
//       alt: "Luxury Car",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
//       heading: "Fly First Class, Every Time",
//       subheading: "Premium routes, exclusive deals, seamless booking. Your journey begins the moment you book with us.",
//       alt: "Flight",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop",
//       heading: "Where Luxury Meets Paradise",
//       subheading: "Curated 5-star hotels and resorts worldwide. Wake up to breathtaking views and unmatched comfort.",
//       alt: "Luxury Hotel",
//     },
//     {
//       image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1600&auto=format&fit=crop",
//       heading: "Sail Into Extraordinary",
//       subheading: "Discover the world's most stunning destinations by sea. All-inclusive luxury cruising reimagined.",
//       alt: "Cruise",
//     },
//   ];

//   // More reliable image loading detection
//   useEffect(() => {
//     setMounted(true);

//     // Set a timeout as fallback in case onLoad doesn't fire
//     const fallbackTimer = setTimeout(() => {
//       setImagesLoaded(true);
//     }, 3000);

//     // Check if images are already loaded (cached)
//     const checkImagesLoaded = () => {
//       const allLoaded = imageRefs.current.every(ref => {
//         if (!ref) return false;
//         return ref.complete && ref.naturalHeight !== 0;
//       });

//       if (allLoaded) {
//         setImagesLoaded(true);
//         clearTimeout(fallbackTimer);
//       }
//     };

//     // Initial check
//     checkImagesLoaded();

//     // Cleanup
//     return () => {
//       clearTimeout(fallbackTimer);
//     };
//   }, []);

//   const handleImageLoad = (index: number) => {
//     console.log(`Image ${index} loaded`);

//     // Check if all images are loaded
//     const allLoaded = imageRefs.current.every(ref => ref && ref.complete && ref.naturalHeight !== 0);

//     if (allLoaded) {
//       console.log('All images loaded');
//       setImagesLoaded(true);
//     }
//   };

//   const handleImageError = (index: number) => {
//     console.log(`Image ${index} failed to load`);
//     // Even if some images fail, we should still show the content
//     setImagesLoaded(true);
//   };

// useEffect(() => {
//   if (!mounted || !imagesLoaded) return;

//   const initializeSliders = async () => {
//     try {
//       const jQuery = (await import("jquery")).default;
//       await import("slick-carousel/slick/slick"); // ✅ correct path for slick JS

//       const $ = jQuery as unknown;

//       const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 1200,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 5500,
//         fade: true,
//         arrows: false,
//         cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
//         pauseOnHover: false,
//         pauseOnFocus: false,
//       };

//       const $bgSlider = $(bgSliderRef.current);
//       const $textSlider = $(textSliderRef.current);

//       $bgSlider.slick(sliderSettings);
//       $textSlider.slick({ ...sliderSettings, dots: false });

//       $bgSlider.on("beforeChange", (_: unknown, __: unknown, ___: number, next: number) => {
//         $textSlider.slick("slickGoTo", next);
//       });
//     } catch (error) {
//       console.error("Failed to initialize sliders:", error);
//     }
//   };

//   initializeSliders();
// }, [mounted, imagesLoaded]);


//   // Debug current state
//   console.log('Current state:', { mounted, imagesLoaded });

//   // Loading Skeleton - Show only if not mounted OR images not loaded
//   if (!mounted || !imagesLoaded) {
//     return (
//       <div className="relative w-full h-screen max-h-[900px] min-h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />

//         {/* Content Skeleton */}
//         <div className="relative z-20 h-full flex items-center justify-center">
//           <div className="max-w-4xl mx-auto w-full px-6 sm:px-10 lg:px-16 text-center">
//             {/* Heading Skeleton */}
//             <div className="h-16 sm:h-20 bg-gray-400/30 rounded-lg mx-auto max-w-2xl mb-6 animate-pulse"></div>

//             {/* Subheading Skeleton */}
//             <div className="h-6 bg-gray-400/20 rounded mx-auto max-w-xl mb-4 animate-pulse"></div>
//             <div className="h-6 bg-gray-400/20 rounded mx-auto max-w-lg mb-8 animate-pulse"></div>

//             {/* Button Skeletons */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//               <div className="h-12 w-48 bg-gray-400/30 rounded-full animate-pulse"></div>
//               <div className="h-12 w-40 bg-gray-400/20 rounded-full animate-pulse"></div>
//             </div>

//             {/* Loading Text */}
//             <div className="flex items-center justify-center gap-3 text-gray-600">
//               <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
//               <span className="text-sm font-medium">Loading your travel experience...</span>
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes shimmer {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100%); }
//           }
//           .animate-shimmer {
//             animation: shimmer 2s infinite;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="hero-container">
//         {/* Background Image Slider */}
//         <div className="background-slider" ref={bgSliderRef}>
//           {slides.map((slide, index) => (
//             <div key={index} className="slide-wrapper">
//               <Image
//                 src={slide.image}
//                 alt={slide.alt}
//                 fill
//                 priority={index === 0}
//                 className="slide-image"
//                 quality={90}
//                 onLoad={handleImageLoad}
//                 onError={() => handleImageError(index)}
//               />
//               <div className="gradient-overlay-1"></div>
//               <div className="gradient-overlay-2"></div>
//               <div className="gradient-overlay-3"></div>
//             </div>
//           ))}
//         </div>

//         {/* Hero Content */}
//         <div className="hero-content">
//           <div className="content-wrapper">
//             {/* Text Slider */}
//             <div className="text-slider" ref={textSliderRef}>
//               {slides.map((slide, index) => (
//                 <div key={index} className="text-slide">
//                   <h1 className="hero-heading">{slide.heading}</h1>
//                   <p className="hero-subheading">{slide.subheading}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="cta-container -mt-15 md:mt-0">
//               <a href="/contact" className="btn-primary">
//                 Start Your Reservation
//               </a>
//               <a href="#services" className="btn-secondary">
//                 Explore Services
//               </a>
//             </div>

//             {/* Footer Note */}
//             <p className="hero-footer-note">
//               We never collect payment details on-site — final bookings are placed only after your approval.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .hero-container {
//           position: relative;
//           width: 100%;
//           height: 100vh;
//           max-height: 800px;
//           min-height: 600px;
//           overflow: hidden;
//         }

//         /* Image Slider Styles */
//         .background-slider {
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//         }

//         .slide-wrapper {
//           position: relative;
//           height: 100vh;
//           max-height: 900px;
//           min-height: 600px;
//         }

//         .slide-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           object-position: center;
//           transform: scale(1.05);
//           transition: transform 8s ease-out;
//         }

//         .slick-active .slide-image {
//           transform: scale(1);
//         }

//         /* Enhanced Multi-Layer Gradient Overlays */
//         .gradient-overlay-1 {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             135deg,
//             rgba(0, 0, 0, 0.65) 0%,
//             rgba(0, 0, 0, 0.4) 35%,
//             rgba(0, 0, 0, 0.2) 60%,
//             transparent 100%
//           );
//           pointer-events: none;
//           z-index: 1;
//         }

//         .gradient-overlay-2 {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(0, 0, 0, 0.5) 0%,
//             transparent 40%,
//             rgba(0, 0, 0, 0.3) 100%
//           );
//           pointer-events: none;
//           z-index: 2;
//         }

//         .gradient-overlay-3 {
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//             ellipse at center,
//             transparent 0%,
//             rgba(0, 0, 0, 0.15) 100%
//           );
//           pointer-events: none;
//           z-index: 3;
//         }

//         /* Content Container */
//         .hero-content {
//           position: relative;
//           z-index: 20;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .content-wrapper {
//           max-width: 1200px;
//           width: 100%;
//           padding: 0 2rem;
//           text-align: center;
//         }

//         /* Text Slider */
//         .text-slider {
//           margin-bottom: 3rem;
//         }

//         .text-slide {
//           padding: 2.5rem 0;
//           opacity: 0;
//           transition: opacity 0.8s ease-in-out;
//         }

//         .slick-active .text-slide {
//           opacity: 1;
//         }

//         .hero-heading {
//           font-size: clamp(2.5rem, 5vw, 4.5rem);
//           font-weight: 800;
//           color: #ffffff;
//           margin-bottom: 1.5rem;
//           line-height: 1.1;
//           text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
//           letter-spacing: -0.02em;
//           animation: fadeInUp 1s ease-out;
//         }

//         .hero-subheading {
//           font-size: clamp(1rem, 2vw, 1.25rem);
//           color: rgba(255, 255, 255, 0.95);
//           max-width: 800px;
//           margin: 0 auto 2rem;
//           line-height: 1.6;
//           text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6), 0 1px 4px rgba(0, 0, 0, 0.4);
//           animation: fadeInUp 1s ease-out 0.2s both;
//         }

//         /* CTA Buttons */
//         .cta-container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//           animation: fadeInUp 1s ease-out 0.4s both;
//         }

//         @media (min-width: 768px) {
//           .cta-container {
//             flex-direction: row;
//           }
//         }

//         .btn-primary {
//           display: inline-block;
//           background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
//           color: #ffffff;
//           font-weight: 600;
//           font-size: 1rem;
//           padding: 1rem 2.5rem;
//           border-radius: 9999px;
//           text-decoration: none;
//           box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(0, 0, 0, 0.3);
//           transition: all 0.3s ease;
//           border: none;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//         }

//         .btn-primary::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//           transition: left 0.6s ease;
//         }

//         .btn-primary:hover::before {
//           left: 100%;
//         }

//         .btn-primary:hover {
//           transform: translateY(-2px) scale(1.03);
//           box-shadow: 0 15px 40px rgba(37, 99, 235, 0.5), 0 6px 16px rgba(0, 0, 0, 0.4);
//         }

//         .btn-secondary {
//           display: inline-block;
//           padding: 0.875rem 2rem;
//           border-radius: 9999px;
//           border: 2px solid rgba(255, 255, 255, 0.3);
//           color: rgba(255, 255, 255, 0.95);
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(10px);
//           font-weight: 500;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }

//         .btn-secondary:hover {
//           background: rgba(255, 255, 255, 0.15);
//           border-color: rgba(255, 255, 255, 0.5);
//           transform: translateY(-2px);
//         }

//         /* Footer Note */
//         .hero-footer-note {
//           font-size: 0.875rem;
//           color: rgba(255, 255, 255, 0.75);
//           text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
//           animation: fadeInUp 1s ease-out 0.6s both;
//         }

//         /* Custom Dots */
//         .slick-dots {
//           position: absolute;
//           bottom: 5rem;
//           width: 100%;
//           display: flex !important;
//           justify-content: center;
//           align-items: center;
//           gap: 0.75rem;
//           list-style: none;
//           z-index: 30;
//         }

//         .slick-dots li {
//           margin: 0;
//           width: auto;
//           height: auto;
//         }

//         .slick-dots li button {
//           width: 12px;
//           height: 12px;
//           padding: 0;
//           border: 2px solid rgba(255, 255, 255, 0.8);
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(4px);
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-size: 0;
//           line-height: 0;
//         }

//         .slick-dots li button:hover {
//           background: rgba(255, 255, 255, 0.5);
//           transform: scale(1.2);
//         }

//         .slick-dots li.slick-active button {
//           background: rgba(255, 255, 255, 1);
//           box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
//           transform: scale(1.3);
//         }

//         /* Animations */
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .hero-container {
//             min-height: 520px;
//           }

//           .content-wrapper {
//             padding: 0 1.5rem;
//           }

//           .hero-heading {
//             margin-bottom: 1rem;
//           }

//           .hero-subheading {
//             font-size: 0.95rem;
//             margin-bottom: 1.5rem;
//           }

//           .slick-dots {
//             bottom: 1.5rem;
//           }
//         }

//         /* Hide default slick arrows */
//         .slick-prev,
//         .slick-next {
//           display: none !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroSection;