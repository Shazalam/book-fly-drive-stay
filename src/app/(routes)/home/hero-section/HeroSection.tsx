
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



"use client";
import React, { useState } from 'react';
import BookingTabs from '@/app/(components)/BookingTabs';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaCheck, FaClock, FaHeadset } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';

const HeroSection = () => {

  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultTab = searchParams.get('tab') || 'cars';
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    const params = new URLSearchParams(window.location.search);
    params.set('tab', newTab);
    router.replace(`${window.location.pathname}?${params.toString()}`);
  }


  const tabContent = {
    hotels: {
      heading: "Discover Handpicked Hotels for Every Journey",
      subheading: "Experience world-class stays, from cozy escapes to five-star luxury — all at unbeatable prices.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50/20 via-white to-teal-50/10"
    },
    flights: {
      heading: "Fly Smarter with the Best Flight Deals",
      subheading: "Compare, book, and save big on domestic and international flights — wherever your wanderlust takes you.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50/20 via-white to-teal-50/10"
    },
    cars: {
      heading: "Drive in Style with Premium Car Rentals",
      subheading: "Choose from top-rated vehicles and flexible plans — explore your destination with comfort and confidence.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50/20 via-white to-teal-50/10"
    },
    cruises: {
      heading: "Embark on Unforgettable Cruise Adventures",
      subheading: "Sail across breathtaking oceans and exotic ports with exclusive luxury cruise deals made for you.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50/20 via-white to-teal-50/10"
    },
  };


  const content = tabContent[activeTab as keyof typeof tabContent] || tabContent.cars;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${content.bgGradient} relative overflow-hidden transition-all duration-1000`}>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${content.bgGradient} transition-all duration-1000`} />

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/25 to-pink-200/15 rounded-full blur-3xl"
        />

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">

        {/* Minimal Header */}
        <div className="text-center mb-8 hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-3 mb-6"
            >
              <motion.h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}
              >
                {content.heading}
              </motion.h1>

            </motion.div>
          </AnimatePresence>


        </div>

        {/* Enhanced Booking Tabs - Fixed for Bottom Drawer */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          className="flex justify-center relative mt-15 md:mt-5 "
        >
          <div className="w-full max-w-8xl relative z-30 ">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/80 rounded-3xl shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 overflow-visible"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${content.gradient} opacity-5 blur-lg -z-10`} />

              {/* Animated Header Bar */}
              <div className={`h-2 bg-gradient-to-r ${content.gradient}`} />

              {/* BookingTabs with proper z-index for bottom drawer */}
              <div className="relative z-30">
                <BookingTabs
                  activeTab={activeTab}
                  setActiveTab={handleTabChange}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Minimal Trust Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8 relative z-20"
        >
          <div className="flex flex-wrap justify-center gap-6 max-w-md">
            {[
              { icon: FaShieldAlt, color: "text-green-500" },
              { icon: FaCheck, color: "text-blue-500" },
              { icon: FaClock, color: "text-orange-500" },
              { icon: FaHeadset, color: "text-purple-500" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`p-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 ${feature.color} relative overflow-hidden`}
                >
                  {/* Icon Background Glow */}
                  <div className={`absolute inset-0 bg-${feature.color.split('-')[1]}-500/10 blur-sm -z-10`} />
                  <Icon className="text-xl relative z-10" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Particles - Lower z-index */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Bottom space for drawer to open properly */}
      <div className="h-20 lg:h-32"></div>
    </div>
  );
};

export default HeroSection;