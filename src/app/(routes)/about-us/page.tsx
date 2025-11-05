import { Metadata } from "next";
import React from "react";
import { FiMapPin, FiHeart, FiUsers, FiAward, FiCheckCircle, FiGlobe } from "react-icons/fi";
import { RiCarLine, RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import AnimatedSection from "./AnimatedSection";


export const metadata: Metadata = {
  title: "About Us | Book Fly Drive Stay | Your Trusted Travel Partner",
  description: "Learn about Book Fly Drive Stay - your trusted travel companion offering seamless flight bookings, car rentals, hotel stays, and cruise packages across USA & Canada.",
  keywords: [
    "about book fly drive stay",
    "travel company",
    "flight booking service",
    "car rental service",
    "hotel booking",
    "cruise packages",
    "travel experts",
    "USA Canada travel"
  ],
  openGraph: {
    title: "About Us | Book Fly Drive Stay",
    description: "Your trusted travel companion for flights, car rentals, hotels, and cruises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Book Fly Drive Stay",
      },
    ],
    type: "website",
  },
};

const AboutUs = () => {
  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Passionate Service",
      description: "We love what we do and it shows in every interaction with our clients.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction and comfort are our top priorities in every booking.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in service quality and travel experiences.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to worldwide destinations with local expertise and support.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const services = [
    {
      icon: <IoAirplaneOutline className="w-10 h-10" />,
      title: "Flight Bookings",
      description: "Expert flight reservation services with access to major airlines worldwide.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <RiCarLine className="w-10 h-10" />,
      title: "Car Rentals",
      description: "Premium car rental services across 500+ locations in USA & Canada.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <HiOutlineBuildingOffice2 className="w-10 h-10" />,
      title: "Hotel Stays",
      description: "Curated accommodations from budget-friendly to luxury properties.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <RiShipLine className="w-10 h-10" />,
      title: "Cruise Packages",
      description: "Unforgettable cruise experiences to stunning destinations worldwide.",
      gradient: "from-teal-500 to-green-500",
    },
  ];

  const benefits = [
    "Seamless booking experience across all travel services",
    "Competitive rates with no hidden fees",
    "Expert travel guidance and personalized recommendations",
    "Dedicated customer support for your peace of mind",
    "Flexible booking options to suit your schedule",
    "Trusted partnerships with leading travel providers",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection delay={0}>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Book Fly Drive Stay
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Your Trusted Travel Companion for Unforgettable Journeys
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6">
                <FiMapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At <span className="font-semibold text-blue-600">Book Fly Drive Stay</span>, we believe that every journey is an opportunity for adventure, discovery, and memories. Our mission is to provide seamless travel experiences by offering a one-stop solution for all your travel needs – from flight bookings and car rentals to hotel stays and cruise packages.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 md:p-12 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
               {` Whether you're planning a`} <span className="font-semibold text-blue-600">family vacation</span>, a <span className="font-semibold text-blue-600">business trip</span>, or a <span className="font-semibold text-blue-600">spontaneous getaway</span>, {`we're here to make your travel plans as simple and enjoyable as possible.`}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
               {` We understand that convenience, affordability, and quality service are key to an unforgettable travel experience. That's why we've built a platform that connects you with reliable services and ensures every part of your trip is taken care of.`}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
               {` We are a passionate team of travel experts dedicated to helping you find the best travel solutions. With years of experience in the travel industry, we've built lasting relationships with trusted partners worldwide.`}
              </p>
            </div>
          </AnimatedSection>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive travel solutions for every journey
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Experience the difference with our dedicated service
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection delay={0}>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Adventure?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Let us help you create unforgettable travel memories
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18449545425"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>📞</span>
                  <span>+1 (844) 954-5425</span>
                </a>
                <a
                  href="mailto:contact@bookflydrivestay.com"
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  <span>✉️</span>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
