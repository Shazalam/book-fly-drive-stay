"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const CarHero = () => {
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
            src="/images/car-hero-section.avif"
            // src="/images/car-hero-section-avif"
            alt="Luxury Car"
            fill
            priority
            className="object-cover object-center"
            quality={90}
          />
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {/* Decorative Large Blur Orbs */}
          <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-400/15 rounded-full blur-3xl animate-float-slower"></div>

          {/* Floating Circles with Ping Effect */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float">
            <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-400 rounded-full opacity-30 animate-float-delayed">
            <div className="absolute inset-0 bg-indigo-300 rounded-full animate-ping"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-25 animate-float-slower-circle">
            <div className="absolute inset-0 bg-cyan-300 rounded-full animate-ping"></div>
          </div>

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto text-center">
        {/* Badge */}
      
        {/* Main Heading */}
        <h1
          className={`mb-6 leading-tight transition-all duration-1000 delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white enhanced-text-shadow">
            Feel the
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-shift bg-300%">
            Premium Drive
          </span>
        </h1>

        {/* Subheading */}
        {/* <p
          className={`text-xl sm:text-2xl md:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Premium car rental experience across{" "}
          <span className="font-semibold text-white">North America</span>. From luxury sedans to
          family SUVs — your perfect ride awaits.
        </p> */}

<p
  className={`text-xl sm:text-2xl md:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-200 ${
    isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  Find the perfect ride for every journey.
  <br />
  <span className="font-semibold text-white">
    Luxury sedans, powerful SUVs, and unmatched comfort
  </span>{" "}
  — all crafted for a seamless drive.
</p>

        {/* Contact Text */}
        <p
          className={`text-lg text-blue-100 font-medium transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          📞 <span className="text-white font-semibold">Ready to drive?</span> Contact us today
        </p>
      </div>

      <style jsx>{`
        .enhanced-text-shadow {
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.25),
            0 8px 16px rgba(0, 0, 0, 0.2),
            0 16px 32px rgba(0, 0, 0, 0.15);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 1s;
        }

        .animate-float-slower-circle {
          animation: float 8s ease-in-out infinite 2s;
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-30px, -30px);
          }
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slow 20s ease-in-out infinite reverse;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
          background-size: 300% 300%;
        }

        .bg-300\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default CarHero;
