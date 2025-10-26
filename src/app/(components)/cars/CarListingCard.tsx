// app/(components)/cars/CarListingCard.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car } from '@/app/(types)/CarRentalSchema';
import { 
  FaStar, 
  FaShieldAlt, 
  FaCheck, 
  FaTimes, 
  FaGasPump, 
  FaCog,
  FaUserFriends,
  FaRoad
} from 'react-icons/fa';

interface CarListingCardProps {
  car: Car;
}

const CarListingCard: React.FC<CarListingCardProps> = ({ car }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const getRatingColor = (rating: string) => {
    const numRating = parseFloat(rating);
    if (numRating >= 4.5) return 'text-green-600 bg-green-100';
    if (numRating >= 4.0) return 'text-blue-600 bg-blue-100';
    if (numRating >= 3.5) return 'text-yellow-600 bg-yellow-100';
    if (numRating >= 3.0) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getRatingText = (rating: string) => {
    const numRating = parseFloat(rating);
    if (numRating >= 4.5) return 'Excellent';
    if (numRating >= 4.0) return 'Very Good';
    if (numRating >= 3.5) return 'Good';
    if (numRating >= 3.0) return 'Okay';
    return 'Poor';
  };

  const calculateTotalPrice = () => {
    const start = new Date(car.pickupDate);
    const end = new Date(car.dropoffDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return (parseFloat(car.pricePerDay) * days).toFixed(2);
  };

  const featuresToShow = showAllFeatures ? car.features : car.features.slice(0, 3);

  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Car Image */}
          <div className="lg:w-1/4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={car.imageUrl}
                alt={car.carName}
                className="w-full h-full object-cover"
              />
              {/* Company Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-gray-700 shadow-sm">
                  {car.company}
                </span>
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="lg:w-2/4 flex flex-col justify-between">
            <div>
              {/* Car Name and Type */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900">{car.carName}</h3>
                <p className="text-gray-600">{car.carType}</p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-4 mb-3">
                  {/* Transmission */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCog className="text-gray-400" />
                    <span>{car.transmission}</span>
                  </div>
                  
                  {/* Seats */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaUserFriends className="text-gray-400" />
                    <span>{car.seats} seats</span>
                  </div>
                  
                  {/* Fuel Type */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaGasPump className="text-gray-400" />
                    <span>{car.fuelType}</span>
                  </div>
                  
                  {/* Mileage */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaRoad className="text-gray-400" />
                    <span>{car.mileage}</span>
                  </div>
                </div>

                {/* Additional Features */}
                <div className="flex flex-wrap gap-2">
                  {featuresToShow.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
                    >
                      <FaCheck className="text-xs" />
                      {feature}
                    </span>
                  ))}
                  
                  {car.features.length > 3 && !showAllFeatures && (
                    <button
                      onClick={() => setShowAllFeatures(true)}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors"
                    >
                      +{car.features.length - 3} more
                    </button>
                  )}
                </div>
              </div>

              {/* Booking Policies */}
              <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <FaShieldAlt className="text-green-500" />
                  <span>Free cancellation</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheck className="text-green-500" />
                  <span>Shuttle to counter</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCheck className="text-green-500" />
                  <span>Pay at pick-up</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className={`px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${getRatingColor(car.rating)}`}>
                <FaStar className="text-xs" />
                <span>{car.rating}</span>
              </div>
              <span className="text-sm text-gray-600">
                {getRatingText(car.rating)} • 603 ratings
              </span>
            </div>
          </div>

          {/* Price and Action */}
          <div className="lg:w-1/4 flex flex-col justify-between items-end">
            <div className="text-right">
              {/* Price */}
              <div className="mb-2">
                <div className="text-2xl font-bold text-gray-900">
                  ${car.pricePerDay}
                </div>
                <div className="text-sm text-gray-600">per day</div>
              </div>
              
              <div className="text-lg font-semibold text-gray-900">
                ${calculateTotalPrice()} total
              </div>
              
              {/* Discount Badge */}
              {parseFloat(car.pricePerDay) < 50 && (
                <div className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-semibold mt-2">
                  Great Deal
                </div>
              )}
            </div>

            {/* Book Button */}
            <button className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mt-4">
              Book Today
            </button>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <div>
            <strong>Pick-up:</strong> {car.pickupLocation}
          </div>
          <div>
            <strong>Drop-off:</strong> {car.dropoffLocation}
          </div>
          <div>
            <strong>Year:</strong> {car.year}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarListingCard;