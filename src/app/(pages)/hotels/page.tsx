import { Metadata } from "next";
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: "Luxury Hotels & Resorts | Book Your Perfect Stay",
  description: "Discover and book luxury hotels across the U.S. with best price guarantee, free cancellation, and 24/7 support.",
};

import HotelHeroSection from './HotelHeroSection/hotelHeroSection';
import HotelReservationForm from "./HotelReservationForm/hotelReservationForm"
import HotelFeatures from './HotelFeatures/hotelFeatures';
import Testimonials from './Testimonials/testimonials';
import PopularDestinations from './PopularDestinations/popularDestinations';

export default function Hotels() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 🌟 Hero Section with Parallax Effect */}
      <HotelHeroSection />

      {/* 📅 Reservation Card with Floating Effect */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transform -translate-y-20 sm:-translate-y-24 lg:-translate-y-32">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-10 
          border border-gray-100 hover:shadow-2xl transition-shadow duration-300
          backdrop-blur-sm bg-opacity-90">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Find Your Perfect Stay
          </h1>
          <HotelReservationForm />
        </div>
      </div>

      {/* ✨ Features Section */}
      <HotelFeatures />

      {/* 🌎 Popular Destinations */}
      <PopularDestinations />

      {/* 💬 Testimonials */}
      <Testimonials />

      {/* 📱 Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
        <a
          href="tel:+18449545425"
          aria-label="Call to book now"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all"
        >
          <Phone className="h-5 w-5" />
          Call to Book Now
        </a>
      </div>

    </main>
  );
}