
"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiSearch, FiMapPin, FiCalendar, FiUsers } from "react-icons/fi";
import { FaUmbrellaBeach, FaPlane, FaHotel, FaCar } from "react-icons/fa";

const HeroSection = () => {
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
    "/beach-resort.jpg",
    "/mountain-view.jpg",
    "/cityscape.jpg"
  ];

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
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full px-4 md:px-8 text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn leading-tight">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-md md:text-xl mb-6 max-w-2xl mx-auto">
            Book flights, hotels, and car rentals all in one place
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-4xl mx-auto w-full text-left">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              {/* Destination */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <FiMapPin className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="bg-transparent w-full focus:outline-none text-gray-700 text-sm md:text-base"
                />
              </div>

              {/* Check-in */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <FiCalendar className="text-gray-500 mr-2" />
                <input
                  type="date"
                  placeholder="Check-in"
                  className="bg-transparent w-full focus:outline-none text-gray-700 text-sm md:text-base"
                />
              </div>

              {/* Check-out */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <FiCalendar className="text-gray-500 mr-2" />
                <input
                  type="date"
                  placeholder="Check-out"
                  className="bg-transparent w-full focus:outline-none text-gray-700 text-sm md:text-base"
                />
              </div>

              {/* Guests */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1">
                <FiUsers className="text-gray-500 mr-2" />
                <select className="bg-transparent w-full focus:outline-none text-gray-700 text-sm md:text-base">
                  <option>2 Adults</option>
                  <option>1 Adult</option>
                  <option>3+ Adults</option>
                </select>
              </div>
            </div>
            <a
              href="tel:+18449545425"
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg w-full transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={(e) => {
                if (window.innerWidth > 768) { // If desktop
                  e.preventDefault();
                  navigator.clipboard.writeText('+18449545425');
                  alert('Phone number copied to clipboard: +1 (844) 954-5425');
                }
              }}
            >
              <FiSearch className="mr-2 h-5 w-5" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex justify-center gap-4 sm:gap-8">
          {[
            { icon: <FaPlane size={20} />, label: "Flights" },
            { icon: <FaHotel size={20} />, label: "Hotels" },
            { icon: <FaCar size={20} />, label: "Car Rentals" },
            { icon: <FaUmbrellaBeach size={20} />, label: "Packages" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="bg-white p-3 rounded-full shadow-md text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <span className="mt-2 text-white text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
