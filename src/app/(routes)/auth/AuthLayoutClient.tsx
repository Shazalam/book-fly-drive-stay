"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const carouselData = [
  {
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discover Amazing Destinations",
    description: "Join millions of happy travelers worldwide"
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exclusive Member Deals",
    description: "Get access to special discounts and offers"
  },
  {
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Premium Travel Experience",
    description: "Enjoy seamless booking and premium services"
  },
  {
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "24/7 Customer Support",
    description: "Our team is always here to help you"
  }
];

// Carousel Component
const CarouselSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(37, 99, 235, 0.8), rgba(79, 70, 229, 0.8)), url(${carouselData[currentImageIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {carouselData[currentImageIndex].title}
          </h3>
          <p className="text-blue-100">
            {carouselData[currentImageIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function AuthLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* Left Side - Carousel (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <CarouselSection />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">

              <nav className="flex space-x-8">
                <Link
                  href="/auth/login"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/auth/login"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/register"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/auth/register"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Create Account
                </Link>
                <Link
                  href="/auth/find-my-trip"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === "/auth/find-my-trip"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Find My Trip
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}