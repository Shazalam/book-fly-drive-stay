"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaUsers, FaCogs, FaGasPump, FaStar } from "react-icons/fa";
import { MdLocationOn, MdDateRange } from "react-icons/md";

const CarDetailsPage = () => {
  const car = {
    _id: "car-1",
    company: "Dollar",
    carName: "BMW 3 Series",
    carType: "Sedan",
    transmission: "Manual",
    fuelType: "Petrol",
    pricePerDay: "41.04",
    seats: "5",
    pickupLocation: "Miami",
    dropoffLocation: "Los Angeles",
    pickupDate: "2025-10-25",
    dropoffDate: "2025-10-30",
    rating: "3.5",
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
    features: ["Air Conditioning", "GPS Navigation", "Bluetooth", "Fuel Efficient"],
    description: "A spacious BMW 3 Series perfect for city driving.",
    bookingPolicy:
      "Free cancellation within 24 hours. No hidden fees. Insurance included.",
    mileage: "19788 miles",
    year: 2023,
  };

  // Scroll references
  const overviewRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const policiesRef = useRef<HTMLDivElement>(null);
  const extrasRef = useRef<HTMLDivElement>(null);

  // Fix: Update the function to accept the correct ref type
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Fix: Define tabs with proper typing
  const tabs = [
    { name: "Overview", ref: overviewRef },
    { name: "Location", ref: locationRef },
    { name: "Policies", ref: policiesRef },
    { name: "Extras", ref: extrasRef },
  ] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-6 border-b pb-3 sticky top-0 bg-white z-20 mt-17 md:mt-0">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => scrollToSection(tab.ref)}
            className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Left Content */}
        <div className="flex-1 space-y-10">
          {/* Overview */}
          <div ref={overviewRef} className="scroll-mt-20">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Image
                src={car.imageUrl}
                alt={car.carName}
                width={500}
                height={300}
                className="rounded-xl shadow-md w-full md:w-1/2 object-cover"
              />
              <div className="flex-1 space-y-2">
                <h1 className="text-2xl font-semibold text-gray-800">{car.carName}</h1>
                <p className="text-gray-600">{car.company} • {car.year} • {car.carType}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-gray-700">
                  <div className="flex items-center gap-2"><FaUsers /> {car.seats} Seats</div>
                  <div className="flex items-center gap-2"><FaCogs /> {car.transmission}</div>
                  <div className="flex items-center gap-2"><FaGasPump /> {car.fuelType}</div>
                  <div className="flex items-center gap-2"><FaStar className="text-yellow-500" /> {car.rating}</div>
                </div>
                <p className="mt-4 text-gray-700">{car.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {car.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div ref={locationRef} className="scroll-mt-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Pickup & Drop-off</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-2">
              <div className="flex items-center gap-2"><MdLocationOn className="text-blue-600" /> <span>Pickup: {car.pickupLocation}</span></div>
              <div className="flex items-center gap-2"><MdLocationOn className="text-blue-600" /> <span>Drop-off: {car.dropoffLocation}</span></div>
              <div className="flex items-center gap-2"><MdDateRange /> {car.pickupDate} → {car.dropoffDate}</div>
            </div>
          </div>

          {/* Policies */}
          <div ref={policiesRef} className="scroll-mt-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Rental Policies</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{car.bookingPolicy}</li>
                <li>Age requirement: 21+ years</li>
                <li>Fuel Policy: Full-to-Full</li>
                <li>Insurance coverage included</li>
              </ul>
            </div>
          </div>

          {/* Extras */}
          <div ref={extrasRef} className="scroll-mt-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Extras</h2>
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-2">
              <p className="text-gray-600">Available add-ons:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>GPS Navigation — $5/day</li>
                <li>Child Booster Seat — $4/day</li>
                <li>Extra Driver — $7/day</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="lg:w-1/3">
          {/* Desktop view */}
          <div className="hidden lg:block sticky top-20 bg-white border p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              ${car.pricePerDay}/day
            </h2>
            <p className="text-gray-600 mb-4">Pay at pickup • Free cancellation</p>
            <div className="border-t pt-3 text-gray-700 space-y-1">
              <p>Car rental for 5 days: ${(Number(car.pricePerDay) * 5).toFixed(2)}</p>
              <p>Taxes & Fees: $48.90</p>
              <p className="font-semibold">
                Total: ${(Number(car.pricePerDay) * 5 + 48.9).toFixed(2)}
              </p>
            </div>
            <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors">
              Reserve Now
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              No upfront payment required
            </p>
          </div>

          {/* Mobile bottom-fixed bar */}
          <div className="fixed lg:hidden bottom-0 left-0 w-full bg-white border-t shadow-lg flex items-center justify-between px-4 py-3 z-50">
            <div>
              <p className="text-gray-800 font-semibold">
                ${(Number(car.pricePerDay) * 5 + 48.9).toFixed(2)} Total
              </p>
              <p className="text-gray-500 text-sm">Includes taxes & fees</p>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;