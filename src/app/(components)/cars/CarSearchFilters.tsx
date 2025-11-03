// app/(components)/cars/CarSearchFilters.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Filters {
  priceRange: number[];
  carType: string[];
  company: string[];
  transmission: string[];
  rating: number;
}

interface CarSearchFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const CarSearchFilters: React.FC<CarSearchFiltersProps> = ({ 
  filters, 
  onFiltersChange 
}) => {
  const carTypes = ['Sedan', 'SUV', 'Luxury', 'Electric', 'Convertible', 'Minivan'];
  const companies = ['Dollar', 'Hertz', 'Avis', 'Budget', 'Thrifty', 'National'];
  const transmissions = ['Automatic', 'Manual'];

  const updateFilter = (key: keyof Filters, value: unknown) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const toggleArrayFilter = (key: 'carType' | 'company' | 'transmission', value: string) => {
    const currentArray = filters[key];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    updateFilter(key, newArray);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Price per day</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="200"
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}+</span>
          </div>
        </div>
      </div>

      {/* Car Type */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Car Type</h3>
        <div className="space-y-2">
          {carTypes.map(type => (
            <label key={type} className="flex items-center"> 
              <input
                type="checkbox"
                checked={filters.carType.includes(type)}
                onChange={() => toggleArrayFilter('carType', type)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Company */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Rental Company</h3>
        <div className="space-y-2">
          {companies.map(company => (
            <label key={company} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.company.includes(company)}
                onChange={() => toggleArrayFilter('company', company)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{company}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Transmission */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Transmission</h3>
        <div className="space-y-2">
          {transmissions.map(transmission => (
            <label key={transmission} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.transmission.includes(transmission)}
                onChange={() => toggleArrayFilter('transmission', transmission)}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">{transmission}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map(rating => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => updateFilter('rating', rating)}
                className="border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="ml-2 text-sm text-gray-700">
                {rating}+ stars
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onFiltersChange({
          priceRange: [0, 200],
          carType: [],
          company: [],
          transmission: [],
          rating: 0
        })}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        Clear All Filters
      </button>
    </motion.div>
  );
};

export default CarSearchFilters;