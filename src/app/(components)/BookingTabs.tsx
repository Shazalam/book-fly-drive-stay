// components/BookingTabs.tsx (FIXED)

"use client";

import React from "react";
import { FaHotel, FaPlane, FaCar, FaShip, FaSuitcaseRolling } from "react-icons/fa"; 
import HotelForm from "./forms/HotelForm"; 
import CarRentalSearchBlock from "./cars/CarRentalSearchBlock"; 

// 1. Define Props Interface for controlled state
interface BookingTabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

const tabs = [
  { id: "cars", label: "Cars", icon: <FaCar /> },
  { id: "hotels", label: "Hotels", icon: <FaHotel /> },
  { id: "flights", label: "Flights", icon: <FaPlane /> },
  { id: "cruises", label: "Cruises", icon: <FaShip /> },
];

const BookingTabs: React.FC<BookingTabsProps> = ({ activeTab, setActiveTab }) => { // 2. Accept props
  
  // Map tab IDs to their corresponding form components
  const renderTabContent = () => {
    switch (activeTab) {
      case "hotels":
        return <HotelForm />; 
      case "cars":
        return <CarRentalSearchBlock />;
      case "flights":
        return <HotelForm />; 
      case "cruises":
         return <CarRentalSearchBlock />;
      default:
        // Use HotelForm or a placeholder for other tabs
        return <HotelForm />; 
    }
  };

  return (
    <div 
      className="bg-white p-6 md:p-8 max-w-6xl mx-auto mt-8 relative"
      // Apply shadow and large border radius from the design system
      style={{ 
        borderRadius: 'var(--radius-2xl)', 
        boxShadow: 'var(--shadow-xl)' 
      }}
    >
      
      {/* Tabs Header: Aligned beautifully with the image's bubble style */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-x-2 md:gap-x-4 mb-3 -mt-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)} // 3. Use external setActiveTab
              className={`flex flex-row items-center justify-between h-10 w-25 sm:w-20 px-1 pt-3 pb-2 transition-all duration-300 relative 
                ${isActive 
                  ? "shadow-md z-10" 
                  : "text-gray-600 hover:text-primary-blue-dark hover:bg-gray-50 z-0"
                }
              `}
              style={{
                borderRadius: 'var(--radius-md)', 
                backgroundColor: isActive ? 'var(--primary-blue)' : 'transparent',
                // Active tab styling with border and text colors
                color: isActive ? 'var(--white)' : 'var(--gray-600)',
                border: isActive ? '2px solid var(--primary-blue)' : '2px solid transparent',
              }}
            >
              {/* Icon */}
              <span className={`text-2xl mb-1 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                {tab.icon}
              </span>
              {/* Label */}
              <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-700'}`}>
                {tab.label}
              </span>

              {/* White background/border to visually separate active tab from the main form block */}
              {isActive && (
                <div 
                  className="absolute bottom-[-10px] w-full h-[10px] bg-white z-20" 
                  style={{ 
                    // This creates the clean separation line at the bottom of the tab
                    boxShadow: '0 5px 0 0 white' 
                  }}
                ></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content: Render the selected form block */}
      <div className="mt-5">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default BookingTabs;