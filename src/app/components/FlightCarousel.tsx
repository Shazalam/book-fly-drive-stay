"use client";

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import fortLauderdale from "../utils/assests/Fort-Lauderdale.jpg";
import miami from "../utils/assests/Miami.webp";
import losVegas from "../utils/assests/los-vegas.avif";
import losAngeles from "../utils/assests/los-angeles.jpg";
import chicago from "../utils/assests/Chicago.webp";
import houstonTexas from "../utils/assests/Houston texas.jpg";


const FlightCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [clickedCard, setClickedCard] = useState<number | null>(null);

    // Sample airline phone numbers (would be real data in production)
   

    const destinations = [
        { id: 1, name: "Las Vegas", image: losVegas, price: "$129" },
        { id: 2, name: "Los Angeles", image: losAngeles, price: "$149" },
        { id: 3, name: "Chicago", image: chicago, price: "$99" },
        { id: 4, name: "Fort Lauderdale", image: fortLauderdale, price: "$119" },
        { id: 5, name: "Houston", image: houstonTexas, price: "$89" },
        { id: 6, name: "Miami", image: miami, price: "$109" },
    ];

    // Handle calling the airline for a destination
    const handleCallCompany = (destinationName: string, cardId: number) => {
        setClickedCard(cardId);
        const phoneNumber = "+1 (844) 954-5425"

        // Create a temporary link to trigger the phone call
        const telLink = document.createElement('a');
        telLink.href = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;
        telLink.click();

        // Reset clicked state after animation
        setTimeout(() => setClickedCard(null), 1000);
    };

    // Handle responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(3);
            } else {
                setSlidesToShow(4);
            }
            setCurrentIndex(0);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused || destinations.length <= slidesToShow) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev >= destinations.length - slidesToShow ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [destinations.length, slidesToShow, isPaused]);

    const nextSlide = () => {
        setCurrentIndex(prev =>
            prev >= destinations.length - slidesToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev <= 0 ? destinations.length - slidesToShow : prev - 1
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <h2 className="text-2xl font-bold mb-6">Cheap Flights to Popular Destinations</h2>
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                {/* Navigation Arrows - Modified to show on all screens */}
                {destinations.length > slidesToShow && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="flex absolute top-1/2 left-0 sm:left-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full z-10 cursor-pointer shadow-lg items-center justify-center"
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="text-sm sm:text-base" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="flex absolute top-1/2 right-0 sm:right-2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full z-10 cursor-pointer shadow-lg items-center justify-center"
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="text-sm sm:text-base" />
                        </button>
                    </>
                )}

                {/* Destination Cards Container */}
                <div
                    ref={containerRef}
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                    }}
                >
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="flex-shrink-0 px-2 transition-all duration-300"
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <div
                                className={`relative group overflow-hidden rounded-lg aspect-[4/3] mx-1 sm:mx-1.5 shadow-md hover:shadow-lg transition-all duration-300 ${clickedCard === destination.id ? 'ring-4 ring-blue-500 scale-95' : ''}`}
                                onClick={() => handleCallCompany(destination.name, destination.id)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handleCallCompany(destination.name, destination.id)}
                            >
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                                    <h3 className="text-lg sm:text-xl font-bold text-white">
                                        {destination.name}
                                    </h3>
                                  
                                    <div className="mt-2 flex items-center gap-2">
                                        <button
                                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-1 px-3 rounded flex items-center gap-1"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCallCompany(destination.name, destination.id);
                                            }}
                                        >
                                            <FaPhone size={12} />
                                            Call Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile indicators */}
                {typeof window !== 'undefined' && window.innerWidth < 640 && destinations.length > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                        {Array.from({ length: Math.ceil(destinations.length / slidesToShow) }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightCarousel;