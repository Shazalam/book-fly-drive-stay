"use client";

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import RoyalCaribbean from "../utils/assests/royalCarribean.jpg"
import Norwegian from "../utils/assests/norweigianAqua.webp"
import Carnival from "../utils/assests/carnivalCruise.jpg"
import MSCCruises from "../utils/assests/mscCruises.jpg"
import Disney from "../utils/assests/disneyCruises.jpg"
import Princess from "../utils/assests/royalPrincess.jpg"
import Image from 'next/image';

const CruiseCarousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const [isPaused, setIsPaused] = useState(false);


    const cruiseLines = [
        {
            id: 1,
            name: "Royal Caribbean",
            ship: "Symphony of the Seas",
            image: RoyalCaribbean,
            rating: 4.8,
            features: ["World's largest cruise ship", "Surf simulator", "Central Park", "Aqua theater"],
            destinations: ["Caribbean", "Europe", "Alaska"]
        },
        {
            id: 2,
            name: "Norwegian Cruise Line",
            ship: "Norwegian Bliss",
            image: Norwegian,
            rating: 4.7,
            features: ["Go-kart track", "Broadway shows", "Waterfront dining", "Spa sanctuary"],
            destinations: ["Hawaii", "Mexico", "Panama Canal"]
        },
        {
            id: 3,
            name: "Carnival Cruise Line",
            ship: "Carnival Mardi Gras",
            image: Carnival,
            rating: 4.5,
            features: ["First roller coaster at sea", "Emeril's restaurant", "Summer Landing", "Cloud 9 Spa"],
            destinations: ["Bahamas", "Eastern Caribbean", "Western Caribbean"]
        },
        {
            id: 4,
            name: "MSC Cruises",
            ship: "MSC Meraviglia",
            image: MSCCruises,
            rating: 4.6,
            features: ["Swirling LED dome", "Champagne bar", "Polar Aquapark", "Broadway-style shows"],
            destinations: ["Mediterranean", "Northern Europe", "Canada/New England"]
        },
        {
            id: 5,
            name: "Disney Cruise Line",
            ship: "Disney Wish",
            image: Disney,
            rating: 4.9,
            features: ["AquaMouse water ride", "Marvel superhero academy", "Frozen dining experience", "Star Wars lounge"],
            destinations: ["Castaway Cay", "Western Caribbean", "Bahamas"]
        },
        {
            id: 6,
            name: "Princess Cruises",
            ship: "Majestic Princess",
            image: Princess,
            rating: 4.7,
            features: ["Movies Under the Stars", "Lotus Spa", "Chef's Table", "Discovery at SEA"],
            destinations: ["Alaska", "Mexico", "Japan"]
        }
    ];


    // Handle responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Infinite auto-sliding animation
    useEffect(() => {
        if (!containerRef.current || isPaused) return;

        const container = containerRef.current;
        const slideWidth = container.children[0]?.clientWidth || 0;
        const totalWidth = slideWidth * cruiseLines.length;
        let currentPosition = 0;
        const speed = 1; // pixels per frame (adjust for speed)

        const animate = () => {
            currentPosition -= speed;

            // Reset position when we've scrolled all slides
            if (Math.abs(currentPosition) >= totalWidth - slideWidth * slidesToShow) {
                currentPosition = 0;
            }

            container.style.transform = `translateX(${currentPosition}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [cruiseLines.length, slidesToShow, isPaused]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
            {/* <h2 className="text-3xl font-bold text-center mb-12">Explore Our Cruise Partners</h2> */}

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Explore Our Cruise Partners</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover world-class cruise experiences with our trusted partners. Sail to breathtaking destinations with exclusive deals and premium amenities.
                </p>
            </div>
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Left Arrow */}
                <button
                    onClick={() => {
                        if (containerRef.current) {
                            containerRef.current.style.transform = `translateX(${parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) + 300
                                }px)`;
                        }
                    }}
                    className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-10 cursor-pointer shadow-lg -ml-4 items-center justify-center"
                    aria-label="Previous slide"
                >
                    <FaChevronLeft size={20} />
                </button>

                {/* Cruise Cards Container */}
                <div
                    ref={containerRef}
                    className="flex nowrap gap-6 transition-transform duration-300 ease-linear"
                    style={{ width: 'max-content' }}
                >
                    {[...cruiseLines, ...cruiseLines].map((cruise, index) => (
                        <div
                            key={`${cruise.id}-${index}`}
                            className={`flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] lg:w-[calc(33.33vw-2rem)] xl:w-[320px]`}
                        >
                            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full mx-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                                <div className="relative h-48 w-full"> {/* Fixed height and full width container */}
                                    <Image
                                        src={cruise.image}
                                        alt={`${cruise.name} ship`}
                                        fill // This makes the image fill the container
                                        className="object-cover" // This ensures the image covers the area while maintaining aspect ratio
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Responsive sizing
                                    />
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold">
                                        {cruise.rating}/5
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-800">{cruise.name}</h3>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">Features:</h5>
                                        <ul className="space-y-1">
                                            {cruise.features.slice(0, 3).map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <span className="text-green-500 mr-2">✓</span>
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h5 className="font-semibold text-gray-800 mb-2">Destinations:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {cruise.destinations.map((dest, i) => (
                                                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                                                    {dest}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href="tel:+18449545425"
                                        className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4 text-center"
                                    >
                                        Book Cruise
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => {
                        if (containerRef.current) {
                            containerRef.current.style.transform = `translateX(${parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) - 300
                                }px)`;
                        }
                    }}
                    className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-10 cursor-pointer shadow-lg -mr-4 items-center justify-center"
                    aria-label="Next slide"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default CruiseCarousel;