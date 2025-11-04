"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FlightHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/flight-hero-section.avif"
            alt="Flight Background"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/75 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        {/* Premium Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
          </span>
          <span className="text-sm font-semibold text-white">✈️ Expert Flight Reservation Service</span>
        </div>

        {/* Main Headline - More Attractive */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-white drop-shadow-2xl">
            Stop Searching.
          </span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Start Flying.
          </span>
        </h1>

        {/* Compelling Subheadline - Benefit-Focused */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-cyan-50 mb-12 font-light leading-relaxed transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tell us where you want to go.{" "}
          <span className="text-white font-semibold">{`We'll find your perfect flight.`}</span>
        </p>

        {/* Simple Contact Text */}
        <p
          className={`text-cyan-200 text-lg font-medium transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          📞 <span className="text-white">Ready to fly?</span> Contact us today
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-40px) translateX(-25px);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FlightHero;
