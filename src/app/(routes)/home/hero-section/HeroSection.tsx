
// "use client";
// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FiSearch, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
// import { FaUmbrellaBeach, FaPlane, FaHotel, FaCar } from "react-icons/fa";
// import BookingTabs from '@/app/(components)/BookingTabs';

// const HeroSection = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//     arrows: false,
//     cssEase: 'linear',
//   };

//   const heroImages = [
//     "/beach-resort.jpg",
//     "/mountain-view.jpg",
//     "/cityscape.jpg"
//   ];

//   return (
//     <div className="relative h-screen w-full max-h-[800px] overflow-hidden">
//       {/* Background Slider */}
//       <div className="absolute inset-0 z-0">
//         <Slider {...settings}>
//           {heroImages.map((image, index) => (
//             <div key={index}>
//               <div
//                 className="h-screen w-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${image})` }}
//               >
//                 <div className="absolute inset-0 bg-black/40" />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="w-full px-4 md:px-8 text-white text-center">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn leading-tight">
//             Discover Your Perfect Getaway
//           </h1>
//           <p className="text-md md:text-xl mb-6 max-w-2xl mx-auto">
//             Book flights, hotels, and car rentals all in one place
//           </p>

//         </div>
//       </div>


//     </div>
//   );
// };

// export default HeroSection;

// components/HeroSection.tsx (FIXED)

"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingTabs from '@/app/(components)/BookingTabs';
// Ensure all necessary Fa icons are imported if needed in HeroSection, 
// though BookingTabs handles the icons for the tabs itself.
// Since you provided image paths relative to the current file, I'll update them to be safe.
// Assuming your images are in the 'public' folder or similar root directory.

const tabContentMap = {
  hotels: {
    heading: "Save Big on Your Next Hotel Stay.",
    subheading: "Find exclusive deals on hotels, resorts, and vacation rentals.",
  },
  flights: {
    heading: "Cheap Flights. Instant Booking.",
    subheading: "Compare airfare deals from hundreds of airlines.",
  },
  cars: {
    heading: "Find the Best Car Rental Deals.",
    subheading: "Free cancellation and no credit card fees. Drive away happy.",
  },
  cruises: {
    heading: "Set Sail for Adventure.",
    subheading: "Discover amazing cruise deals for families, couples, and solos.",
  },
};

const HeroSection = () => {
  // LIFTED STATE: activeTab now controls the content
  const [activeTab, setActiveTab] = useState("cars");

  // Removed the redundant `handleSelectedTabContent` function. 
  // We use `setActiveTab` directly.

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    cssEase: 'linear',
  };

  const heroImages = [
    "./images/beach-resort.jpg", // Using standard public path assumption
    "./images/mountain-view.jpg",
    "./images/cityscape.jpg"
  ];

  // Dynamic content based on the active tab
  const content = tabContentMap[activeTab as keyof typeof tabContentMap] || tabContentMap.hotels;

  return (
    <div className="relative h-screen w-full max-h-[800px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {heroImages.map((image, index) => (
            <div key={index}>
              <div
                className="h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                {/* Darker overlay for text contrast */}
                <div className="absolute inset-0 bg-gray-900/60" /> 
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content (Dynamic Text) */}
      <div className="relative z-10 h-full flex items-start justify-center pt-2 md:pt-36">
        <div className="w-full px-4 md:px-8 text-white text-center">

          {/* Dynamic Heading with Tailwind transition for smooth text change */}
          {/* Apply the heading font from the design system */}
          <h1 
            className="hidden md:block text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight transition-opacity duration-500 ease-in-out" 
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            {content.heading}
          </h1>

          {/* Booking Tabs Component (Centered under the text) */}
          <div className="mt-27 md:-mt-5">
            <BookingTabs
              activeTab={activeTab} // PASS THE STATE
              setActiveTab={setActiveTab} // PASS THE SETTER
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;