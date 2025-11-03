// // components/BookingTabs.tsx (FIXED)

// "use client";

// import React from "react";
// import { FaHotel, FaPlane, FaCar, FaShip, FaSuitcaseRolling } from "react-icons/fa"; 
// import HotelForm from "./forms/HotelForm"; 
// import CarRentalSearchBlock from "./cars/CarRentalSearchBlock"; 

// // 1. Define Props Interface for controlled state
// interface BookingTabsProps {
//   activeTab: string;
//   setActiveTab: (tabId: string) => void;
// }

// const tabs = [
//   { id: "cars", label: "Cars", icon: <FaCar /> },
//   { id: "hotels", label: "Hotels", icon: <FaHotel /> },
//   { id: "flights", label: "Flights", icon: <FaPlane /> },
//   { id: "cruises", label: "Cruises", icon: <FaShip /> },
// ];

// const BookingTabs: React.FC<BookingTabsProps> = ({ activeTab, setActiveTab }) => { // 2. Accept props

//   // Map tab IDs to their corresponding form components
//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "hotels":
//         return <HotelForm />; 
//       case "cars":
//         return <CarRentalSearchBlock />;
//       case "flights":
//         return <HotelForm />; 
//       case "cruises":
//          return <CarRentalSearchBlock />;
//       default:
//         // Use HotelForm or a placeholder for other tabs
//         return <HotelForm />; 
//     }
//   };

//   return (
//     <div 
//       className="bg-white p-6 md:p-8 max-w-6xl mx-auto mt-8 relative"
//       // Apply shadow and large border radius from the design system
//       style={{ 
//         borderRadius: 'var(--radius-2xl)', 
//         boxShadow: 'var(--shadow-xl)' 
//       }}
//     >

//       {/* Tabs Header: Aligned beautifully with the image's bubble style */}
//       <div className="flex flex-wrap justify-center sm:justify-start gap-x-2 md:gap-x-4 mb-3 -mt-2">
//         {tabs.map((tab) => {
//           const isActive = activeTab === tab.id;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)} // 3. Use external setActiveTab
//               className={`flex flex-row items-center justify-between h-10 w-25 sm:w-20 px-1 pt-3 pb-2 transition-all duration-300 relative 
//                 ${isActive 
//                   ? "shadow-md z-10" 
//                   : "text-gray-600 hover:text-primary-blue-dark hover:bg-gray-50 z-0"
//                 }
//               `}
//               style={{
//                 borderRadius: 'var(--radius-md)', 
//                 backgroundColor: isActive ? 'var(--primary-blue)' : 'transparent',
//                 // Active tab styling with border and text colors
//                 color: isActive ? 'var(--white)' : 'var(--gray-600)',
//                 border: isActive ? '2px solid var(--primary-blue)' : '2px solid transparent',
//               }}
//             >
//               {/* Icon */}
//               <span className={`text-2xl mb-1 ${isActive ? 'text-white' : 'text-gray-500'}`}>
//                 {tab.icon}
//               </span>
//               {/* Label */}
//               <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-700'}`}>
//                 {tab.label}
//               </span>

//               {/* White background/border to visually separate active tab from the main form block */}
//               {isActive && (
//                 <div 
//                   className="absolute bottom-[-10px] w-full h-[10px] bg-white z-20" 
//                   style={{ 
//                     // This creates the clean separation line at the bottom of the tab
//                     boxShadow: '0 5px 0 0 white' 
//                   }}
//                 ></div>
//               )}
//             </button>
//           );
//         })}
//       </div>

//       {/* Tab Content: Render the selected form block */}
//       <div className="mt-5">
//         {renderTabContent()}
//       </div>
//     </div>
//   );
// };

// export default BookingTabs;




// components/BookingTabs.tsx (NO HEADER + MOBILE OPTIMIZED)

// "use client";

// import React from "react";
// import { FaHotel, FaPlane, FaCar, FaShip } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import HotelForm from "./forms/HotelForm";
// import CarRentalSearchBlock from "./cars/CarRentalSearchBlock";

// interface BookingTabsProps {
//   activeTab: string;
//   setActiveTab: (tabId: string) => void;
// }

// const tabs = [
//   {
//     id: "cars",
//     label: "Cars",
//     icon: FaCar,
//     description: "Rentals",
//   },
//   {
//     id: "hotels",
//     label: "Hotels",
//     icon: FaHotel,
//     description: "& Stays",
//   },
//   {
//     id: "flights",
//     label: "Flights",
//     icon: FaPlane,
//     description: "Book flights",
//   },
//   {
//     id: "cruises",
//     label: "Cruises",
//     icon: FaShip,
//     description: "Sail away",
//   },
// ];

// const BookingTabs: React.FC<BookingTabsProps> = ({ activeTab, setActiveTab }) => {

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "hotels":
//         return <CarRentalSearchBlock />;
//       case "cars":
//         return <CarRentalSearchBlock />;
//       case "flights":
//       return <CarRentalSearchBlock />;
//       case "cruises":
//           return <CarRentalSearchBlock />;
//       default:
//         return <HotelForm />;
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl px-3 sm:px-6 lg:px-8 ">

//       {/* Main Card Container */}
//       <motion.div
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white rounded-2xl lg:rounded-3xl  overflow-hidden  border-gray-100 "
//       >

//         {/* Tabs Navigation - Compact & Beautiful */}
//         <div className="relative bg-white border-b border-gray-200 px-4 sm:px-6 pt-4 pb-1">
//           <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-1 sm:gap-2">
//             {tabs.map((tab) => {
//               const IconComponent = tab.icon;
//               const isActive = activeTab === tab.id;

//               return (
//                 <motion.button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   whileHover={{
//                     scale: 1.02,
//                     transition: { duration: 0.2 }
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`relative flex flex-col sm:flex-row items-center justify-center sm:justify-start p-2 sm:p-3 rounded-lg transition-all duration-300 group flex-shrink-0 ${isActive
//                       ? "bg-blue-50 border border-blue-200 shadow-sm"
//                       : "bg-gray-50 hover:bg-gray-100 border border-transparent"
//                     }`}
//                   style={{
//                     minWidth: '80px',
//                     maxWidth: '140px'
//                   }}
//                 >
//                   {/* Mobile Layout: Icon on top, text below */}
//                   <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
//                     {/* Icon Container */}
//                     <div className={`flex items-center justify-center w-8 h-8 sm:w-7 sm:h-7 rounded-lg transition-all duration-300 ${isActive
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-white text-gray-600 group-hover:text-blue-500 shadow-xs'
//                       }`}>
//                       <IconComponent className="text-sm sm:text-base" />
//                     </div>

//                     {/* Text Content - Different layout for mobile vs desktop */}
//                     <div className="mt-1 sm:mt-0 sm:ml-2 text-center sm:text-left w-full">
//                       {/* Label - Always visible */}
//                       <div className={`font-semibold text-xs transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-blue-600'
//                         }`}>
//                         {tab.label}
//                       </div>

//                       {/* Description - Only on desktop */}
//                       <div className="hidden sm:block">
//                         <div className={`text-[10px] transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'
//                           }`}>
//                           {tab.description}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Active Indicator - Bottom bar for mobile, side for desktop */}
//                   {isActive && (
//                     <>
//                       {/* Mobile: Bottom bar */}
//                       <motion.div
//                         className="sm:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-500 rounded-t"
//                         initial={{ scaleX: 0 }}
//                         animate={{ scaleX: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                       {/* Desktop: Left bar */}
//                       <motion.div
//                         className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r"
//                         initial={{ scaleY: 0 }}
//                         animate={{ scaleY: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </>
//                   )}

//                   {/* Active Dot Indicator */}
//                   {isActive && (
//                     <motion.div
//                       className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 border-2 border-white shadow-sm"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Gradient fade for scroll indication */}
//           <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
//         </div>

//         {/* Content Area - No header, just the form */}
//         <div className="relative">
//           {/* Animated Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2, ease: "easeInOut" }}
//               className="p-4 sm:p-6 lg:p-8"
//             >
//               {renderTabContent()}
//             </motion.div>
//           </AnimatePresence>

//           {/* Subtle decorative accents */}
//           <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/3 to-transparent pointer-events-none"></div>
//           <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/3 to-transparent pointer-events-none"></div>
//         </div>

//         {/* Minimal Footer */}
//         <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-3">
//           <div className="flex items-center justify-center text-xs text-gray-500">
//             <span className="flex items-center">
//               <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
//               Secure & Easy Booking
//             </span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Custom scrollbar hide utility */}
//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BookingTabs;






"use client";

import React from "react";
import { FaHotel, FaPlane, FaCar, FaShip } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import CarRentalSearchBlock from "./cars/CarRentalSearchBlock";

interface BookingTabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const tabs = [
  {
    id: "cars",
    label: "Cars",
    icon: FaCar,
    description: "Premium Rentals",
    gradient: "from-white via-gray-50 to-gray-100",
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: FaHotel,
    description: "Luxury Stays",
    gradient: "from-white via-gray-50 to-gray-100",

  },
  {
    id: "flights",
    label: "Flights",
    icon: FaPlane,
    description: "Best Fares",
    gradient: "from-white via-gray-50 to-gray-100",
  },
  {
    id: "cruises",
    label: "Cruises",
    icon: FaShip,
    description: "Luxury Voyages",
    gradient: "from-white via-gray-50 to-gray-100"
  },
];

const BookingTabs: React.FC<BookingTabsProps> = ({ activeTab, setActiveTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "hotels":
        return <CarRentalSearchBlock />;
      case "cars":
        return <CarRentalSearchBlock />;
      case "flights":
        return <CarRentalSearchBlock />;
      case "cruises":
        return <CarRentalSearchBlock />;
      default:
        return <CarRentalSearchBlock />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto sm:px-6 lg:px-8">
      {/* Main Card Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white overflow-hidden"
      >
        {/* Enhanced Tabs Navigation */}
        <div className="relative bg-gradient-to-r from-gray-50 to-white border-b border-gray-200/60 px-2 sm:px-6 pt-4 pb-2">
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-1 sm:gap-3 pb-1 pt-2 ">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex flex-col md:flex-row items-center justify-around p-1 sm:px-4 sm:py-2 rounded-2xl transition-all duration-300 group flex-shrink-0 min-w-[75px] sm:min-w-[100px] ${isActive
                    ? "bg-white shadow-lg border border-gray-200/80"
                    : "bg-white/60 backdrop-blur-sm border border-gray-200/40 hover:bg-white hover:shadow-md"
                    }`}
                >
                  {/* Icon Container */}
                  <div className={`flex items-center justify-center w-10 h-8 sm:w-12 sm:h-10 rounded-full transition-all duration-300 ${isActive
                    ? `bg-gradient-to-r from-sky-200 via-indigo-300 to-blue-500  text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700'
                    }`}>
                    <IconComponent className="text-lg sm:text-xl" />
                  </div>

                  {/* Text Content */}
                  <div className="mt-2 text-center w-full">
                    {/* Label */}
                    <div className={`font-semibold text-md transition-colors duration-300 whitespace-nowrap ${isActive
                      ? `bg-gradient-to-r ${tab.gradient} bg-clip-text text-transparent font-bold`
                      : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                      {tab.label}
                    </div>

                    {/* Description - Only on desktop */}
                    {/* <div className="hidden sm:block">
                      <div className={`text-xs transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
                        }`}>
                        {tab.description}
                      </div>
                    </div> */}
                  </div>

                  {/* Active Indicator - Bottom bar */}
                  {isActive && (
                    <motion.div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${tab.gradient} rounded-t-lg`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Active Pulse Effect */}
                  {isActive && (
                    <motion.div
                      className={`absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 border-2 border-white shadow-lg`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Active Tab Gradient Bar */}
          <motion.div
            key={activeTab}
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tabs.find(t => t.id === activeTab)?.gradient || "from-blue-500 to-cyan-500"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Gradient fade for scroll indication */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Content Area */}
        <div className="relative bg-gradient-to-br from-white to-gray-50/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-4 sm:p-6 lg:p-8"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Enhanced Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-white border-t border-gray-200/60 px-6 py-4">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Secure & Instant Booking</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Custom scrollbar hide utility */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BookingTabs;