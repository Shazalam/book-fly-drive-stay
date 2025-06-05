// At the top of the file
"use client";


import React from 'react';
import Image from 'next/image';
import { FaPlane, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import eiffel from "../../../utils/assests/eiffel-tower.jpg"
import tokyo from "../../../utils/assests/tokyo.jpg"
import newYork from "../../../utils/assests/new-york.webp"
import bali from "../../../utils/assests/bali.jpeg"
import lumpur from "../../../utils/assests/kuala-lumpur.jpg"
import dubai from "../../../utils/assests/dubai-hotel.jpeg"
import rome from "../../../utils/assests/rome-italy.jpg"
import cairo from "../../../utils/assests/cairo.jpg"

const FlightDestinations = () => {
  const destinations = [
    {
      image: eiffel,
      city: "Paris",
      country: "France",
      rating: 4.9,
      deals: "20+ deals available"
    },
    {
      image: tokyo,
      city: "Tokyo",
      country: "Japan",
      rating: 4.8,
      deals: "15+ deals available"
    },
    {
      image: newYork,
      city: "New York",
      country: "USA",
      rating: 4.9,
      deals: "25+ deals available"
    },
    {
      image: bali,
      city: "Bali",
      country: "Indonesia",
      rating: 4.6,
      deals: "19+ deals available"
    },
    {
      image: lumpur,
      city: "Kuala Lumpur",
      country: "Malaysia",
      rating: 4.9,
      deals: "24+ deals available"
    },
    {
      image: dubai,
      city: "Dubai",
      country: "UAE",
      rating: 4.8,
      deals: "20+ deals available"
    },
    {
      image: rome,
      city: "Rome Italy",
      country: "Italy",
      rating: 4.9,
      deals: "17+ deals available"
    },
    {
      image: cairo,
      city: "Cairo",
      country: "Egypt",
      rating: 4.6,
      deals: "29+ deals available"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 -mt-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Popular Flight Destinations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing places at unbeatable prices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="relative h-64">
              <Image
                src={destination.image}
                alt={`${destination.city}, ${destination.country}`}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold">{destination.city}</h3>
                    <p className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {destination.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 flex items-center bg-white/90 text-yellow-500 px-2 py-1 rounded-full text-sm font-medium">
                <FaStar className="mr-1" />
                {destination.rating}
              </div>
            </div>
            <div className="bg-white p-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">{destination.deals}</p>
                <a
                  href="tel:+18449545425"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center transition-colors duration-200"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      alert('Please call +1 (844) 954-5425 to book now');
                    }
                  }}
                >
                  <FaPlane className="mr-2" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-10">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-300 flex items-center mx-auto">
          Explore All Destinations
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default FlightDestinations;