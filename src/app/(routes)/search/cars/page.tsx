// app/(pages)/cars/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarRentalSearchBlock from '@/app/(components)/cars/CarRentalSearchBlock';

import { Car } from '@/app/(types)/CarRentalSchema';
import CarSearchFilters from '@/app/(components)/cars/CarSearchFilters';
import CarListingCard from '@/app/(components)/cars/CarListingCard';

// Mock data - in real app, this would come from API
const mockCars: Car[] = [
    {
        "_id": "car-1",
        "company": "Dollar",
        "carName": "BMW 3 Series",
        "carType": "Sedan",
        "transmission": "Manual",
        "fuelType": "Petrol",
        "pricePerDay": "41.04",
        "seats": "5",
        "pickupLocation": "Miami",
        "dropoffLocation": "Los Angeles",
        "pickupDate": "2025-10-25",
        "dropoffDate": "2025-10-30",
        "rating": "3.5",
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
        "features": [
            "Air Conditioning",
            "GPS Navigation",
            "Bluetooth",
            "Fuel Efficient"
        ],
        "description": "A spacious BMW 3 Series perfect for city driving.",
        "bookingPolicy": "Free cancellation within 24 hours. No hidden fees. Insurance included.",
        "mileage": "19788 miles",
        "year": 2023,
        "createdAt": "2025-10-26T19:59:13.716Z",
        "updatedAt": "2025-10-26T19:59:13.716Z"
    },
    {
        "_id": "car-2",
        "company": "Dollar",
        "carName": "Mercedes S-Class",
        "carType": "Luxury",
        "transmission": "Manual",
        "fuelType": "Petrol",
        "pricePerDay": "92.03",
        "seats": "4",
        "pickupLocation": "Seattle",
        "dropoffLocation": "Los Angeles",
        "pickupDate": "2025-10-25",
        "dropoffDate": "2025-10-30",
        "rating": "4.9",
        "available": true,
        "imageUrl": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
        "features": [
            "Air Conditioning",
            "GPS Navigation",
            "Bluetooth",
            "Leather Seats"
        ],
        "description": "A stylish Mercedes S-Class perfect for family vacations.",
        "bookingPolicy": "Free cancellation within 24 hours. No hidden fees. Insurance included.",
        "mileage": "7679 miles",
        "year": 2022,
        "createdAt": "2025-10-26T19:59:13.716Z",
        "updatedAt": "2025-10-26T19:59:13.716Z"
    },
    // Add more cars as needed
];

const CarsPage = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [sortBy, setSortBy] = useState('recommended');
    const [filters, setFilters] = useState({
        priceRange: [0, 200],
        carType: [] as string[],
        company: [] as string[],
        transmission: [] as string[],
        rating: 0
    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchCars() {
            try {
                const res = await fetch("/api/mock-car-reservations");
                const data = await res.json();
                setCars(data);
            } catch (err) {
                console.error("Failed to load cars:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    }, []);

    // Filter and sort cars based on selections
    useEffect(() => {
        let result = [...cars];

        // Apply filters
        if (filters.priceRange[1] < 200) {
            result = result.filter(car =>
                parseFloat(car.pricePerDay) >= filters.priceRange[0] &&
                parseFloat(car.pricePerDay) <= filters.priceRange[1]
            );
        }

        if (filters.carType.length > 0) {
            result = result.filter(car => filters.carType.includes(car.carType));
        }

        if (filters.company.length > 0) {
            result = result.filter(car => filters.company.includes(car.company));
        }

        if (filters.transmission.length > 0) {
            result = result.filter(car => filters.transmission.includes(car.transmission));
        }

        if (filters.rating > 0) {
            result = result.filter(car => parseFloat(car.rating) >= filters.rating);
        }

        // Apply sorting
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => parseFloat(a.pricePerDay) - parseFloat(b.pricePerDay));
                break;
            case 'price-high':
                result.sort((a, b) => parseFloat(b.pricePerDay) - parseFloat(a.pricePerDay));
                break;
            case 'rating':
                result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            default:
                // Recommended - keep original order or apply business logic
                break;
        }

        setFilteredCars(result);
    }, [cars, filters, sortBy]);

     if (loading) return <p className="text-center text-lg mt-10">Loading cars...</p>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <CarRentalSearchBlock />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <CarSearchFilters
                            filters={filters}
                            onFiltersChange={setFilters}
                        />
                    </div>

                    {/* Results Section */}
                    <div className="lg:w-3/4">
                        {/* Results Header */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        {filteredCars.length} Cars Available
                                    </h1>
                                    <p className="text-gray-600 mt-1">
                                        JFK Airport • Nov 9, 10:30am - Nov 10, 10:30am • Total includes taxes and fees
                                    </p>
                                </div>

                                {/* Sort Options */}
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-gray-700">Sort by:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    >
                                        <option value="recommended">Recommended</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Cars Grid */}
                        <div className="space-y-6">
                            <AnimatePresence>
                                {filteredCars.map((car, index) => (
                                    <motion.div
                                        key={car._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <CarListingCard car={car} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {filteredCars.length === 0 && (
                                <div className="text-center py-12">
                                    <div className="text-gray-400 text-6xl mb-4">🚗</div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No cars found</h3>
                                    <p className="text-gray-600">Try adjusting your filters to see more results.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsPage;