// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
// import Emirates from "../utils/assests/emirates.jpg";
// import SingaporeAir from "../utils/assests/singapore-air.jpg";
// import Qatar from "../utils/assests/qatar-airways.jpg";
// import Delta from "../utils/assests/delta.jpg";
// import BritishAir from "../utils/assests/british-airways.jpg";
// import Lufthansa from "../utils/assests/filght-hero.webp";
// import Image from 'next/image';

// const FlightCarousel = () => {
//     const [slidesToShow, setSlidesToShow] = useState(3);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const animationRef = useRef<number>();
//     const [isPaused, setIsPaused] = useState(false);

//     const airlines = [
//         {
//             id: 1,
//             name: "Emirates",
//             type: "First Class",
//             image: Lufthansa,
//             rating: 4.9,
//             features: ["Private suites", "Onboard shower", "Gourmet dining", "In-flight lounge"],
//             destinations: ["Dubai", "New York", "London", "Sydney"]
//         },
//         {
//             id: 2,
//             name: "Singapore Airlines",
//             type: "Business Class",
//             image: Lufthansa,
//             rating: 4.8,
//             features: ["Flat-bed seats", "Premium cuisine", "Large entertainment", "Priority boarding"],
//             destinations: ["Singapore", "Los Angeles", "Paris", "Tokyo"]
//         },
//         {
//             id: 3,
//             name: "Qatar Airways",
//             type: "Qsuite Business",
//             image: Lufthansa,
//             rating: 4.7,
//             features: ["Double beds", "Privacy doors", "Dine on demand", "Premium amenities"],
//             destinations: ["Doha", "Miami", "Bangkok", "Rome"]
//         },
//         {
//             id: 4,
//             name: "Delta Airlines",
//             type: "Premium Select",
//             image: Lufthansa,
//             rating: 4.5,
//             features: ["Extra legroom", "Premium meals", "Noise-canceling", "Priority check-in"],
//             destinations: ["Atlanta", "Amsterdam", "Seoul", "Boston"]
//         },
//         {
//             id: 5,
//             name: "British Airways",
//             type: "Club World",
//             image: Lufthansa,
//             rating: 4.6,
//             features: ["Flat-bed seats", "Exclusive lounge", "Fine dining", "Amenity kits"],
//             destinations: ["London", "New York", "Cape Town", "Hong Kong"]
//         },
//         {
//             id: 6,
//             name: "Lufthansa",
//             type: "Business Class",
//             image: Lufthansa,
//             rating: 4.4,
//             features: ["Lie-flat seats", "Gourmet menu", "Large screens", "Priority baggage"],
//             destinations: ["Frankfurt", "Chicago", "Delhi", "Rio"]
//         }
//     ];

//     // Handle responsiveness
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth < 640) {
//                 setSlidesToShow(1);
//             } else if (window.innerWidth < 1024) {
//                 setSlidesToShow(2);
//             } else {
//                 setSlidesToShow(3);
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     // Infinite auto-sliding animation
//     useEffect(() => {
//         if (!containerRef.current || isPaused) return;

//         const container = containerRef.current;
//         const slideWidth = container.children[0]?.clientWidth || 0;
//         const totalWidth = slideWidth * airlines.length;
//         let currentPosition = 0;
//         const speed = 1; // pixels per frame (adjust for speed)

//         const animate = () => {
//             currentPosition -= speed;

//             // Reset position when we've scrolled all slides
//             if (Math.abs(currentPosition) >= totalWidth - slideWidth * slidesToShow) {
//                 currentPosition = 0;
//             }

//             container.style.transform = `translateX(${currentPosition}px)`;
//             animationRef.current = requestAnimationFrame(animate);
//         };

//         animationRef.current = requestAnimationFrame(animate);

//         return () => {
//             if (animationRef.current) {
//                 cancelAnimationFrame(animationRef.current);
//             }
//         };
//     }, [airlines.length, slidesToShow, isPaused]);

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-12 relative overflow-hidden">
//             <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold mb-4">Featured Airlines</h2>
//                 <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                     Experience premium travel with our top-rated airline partners
//                 </p>
//             </div>

//             <div
//                 className="relative w-full overflow-hidden"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//             >
//                 {/* Left Arrow */}
//                 <button
//                     onClick={() => {
//                         if (containerRef.current) {
//                             containerRef.current.style.transform = `translateX(${
//                                 parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) + 300
//                             }px)`;
//                         }
//                     }}
//                     className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-10 cursor-pointer shadow-lg -ml-4 items-center justify-center"
//                     aria-label="Previous slide"
//                 >
//                     <FaChevronLeft size={20} />
//                 </button>

//                 {/* Flight Cards Container */}
//                 <div
//                     ref={containerRef}
//                     className="flex nowrap gap-6 transition-transform duration-300 ease-linear"
//                     style={{ width: 'max-content' }}
//                 >
//                     {[...airlines, ...airlines].map((airline, index) => (
//                         <div
//                             key={`${airline.id}-${index}`}
//                             className={`flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] lg:w-[calc(33.33vw-2rem)] xl:w-[320px]`}
//                         >
//                             <div className="bg-white rounded-xl shadow-md overflow-hidden h-full mx-1 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
//                                 <div className="relative h-48 w-full">
//                                     <Image
//                                         src={airline.image}
//                                         alt={`${airline.name} aircraft`}
//                                         fill
//                                         className="object-cover"
//                                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                     />
//                                     <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-bold">
//                                         {airline.rating}/5
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-2">
//                                         <h3 className="text-xl font-bold text-gray-800">{airline.name}</h3>
//                                         <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{airline.type}</span>
//                                     </div>

//                                     <div className="mb-4">
//                                         <h5 className="font-semibold text-gray-800 mb-2">Features:</h5>
//                                         <ul className="space-y-1">
//                                             {airline.features.slice(0, 3).map((feature, i) => (
//                                                 <li key={i} className="flex items-center">
//                                                     <span className="text-green-500 mr-2">✓</span>
//                                                     <span className="text-sm">{feature}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>

//                                     <div className="mb-4">
//                                         <h5 className="font-semibold text-gray-800 mb-2">Popular Routes:</h5>
//                                         <div className="flex flex-wrap gap-2">
//                                             {airline.destinations.map((dest, i) => (
//                                                 <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
//                                                     {dest}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     <a
//                                         href="tel:+18449545425"
//                                         className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mt-4 text-center"
//                                     >
//                                         Book Flight
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Right Arrow */}
//                 <button
//                     onClick={() => {
//                         if (containerRef.current) {
//                             containerRef.current.style.transform = `translateX(${
//                                 parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '')) - 300
//                             }px)`;
//                         }
//                     }}
//                     className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full z-10 cursor-pointer shadow-lg -mr-4 items-center justify-center"
//                     aria-label="Next slide"
//                 >
//                     <FaChevronRight size={20} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FlightCarousel;



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