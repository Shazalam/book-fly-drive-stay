

"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaPlane, FaUtensils, FaStar, FaRegClock } from 'react-icons/fa';
import FlightHero from "../../utils/assests/flights-hero.jpg";
import FlightCarousel from '@/app/components/FlightCarousel';
import FlightSearchSection from '@/app/components/FlightSearchSection';


const Flights = () => {

  const testimonials = [
    {
      id: 1,
      name: 'David Wilson',
      comment: 'The booking process was seamless and we got amazing deals on business class tickets!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      comment: 'Found flights to Bali at half the price compared to other sites. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'James Rodriguez',
      comment: 'Customer service helped me change my flight with no hassle when my plans changed.',
      rating: 4
    }
  ];

  return (
    <>
      <Head>
        <title>BookFlyDriveStay | Flight Deals</title>
        <meta name="description" content="Book luxury flight deals at the lowest prices. Secure and easy booking process." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative h-100 md:h-[500px]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={FlightHero}
            alt="Luxury Airplane"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 border-amber-300">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-0 sm:mb-2 md:mb-8 -mt-1 sm:-mt-30 md:-mt-16 lg:-mt-20">
              Discover Amazing Flight Deals
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">Fly to breathtaking destinations with our exclusive flight packages</p>
            <a
              href="tel:+1 (844) 954-5425"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Book Flights Now
            </a>
          </div>
        </section>

        {/* Search Section */}

        <section className="container mx-auto px-4 py-12 -mt-40 sm:-mt-45 md:-mt-68 lg:-mt-65 xl:-mt-58 relative z-30">
          <FlightSearchSection />
        </section>


        {/* Featured Flights */}
        <section className="container mx-auto px-4 py-12">
          <FlightCarousel />
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BookFlyDriveStay for Your Flights?</h2>
              <p className="text-xl max-w-3xl mx-auto">We make flight booking easy and affordable with exclusive deals you won't find anywhere else</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPlane className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
                <p className="text-blue-100">We guarantee the lowest prices on all our flight tickets or we'll match the difference.</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRegClock className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
                <p className="text-blue-100">Our flight experts are available round the clock to assist you with any questions or changes.</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUtensils className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Perks</h3>
                <p className="text-blue-100">Get special upgrades, lounge access, and amenities not available when booking directly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from travelers who've flown with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-amber-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Take Off?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Contact our flight specialists today to find the perfect itinerary for you</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+1 (844) 954-5425"
                className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Call Now: +1 (844) 954-5425
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Flights;
