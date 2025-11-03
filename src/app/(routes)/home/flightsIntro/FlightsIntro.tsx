// "use client";

// import React from "react";
// import Image from "next/image";
// import { FaPlane, FaMapMarkerAlt, FaStar } from "react-icons/fa";
// import Button from "../../../(components)/common/Button";
// import eiffel from "../../../utils/assests/eiffel-tower.jpg";
// import tokyo from "../../../utils/assests/tokyo.jpg";
// import newYork from "../../../utils/assests/new-york.webp";
// import bali from "../../../utils/assests/bali.jpeg";
// import lumpur from "../../../utils/assests/kuala-lumpur.jpg";
// import dubai from "../../../utils/assests/dubai-hotel.jpeg";
// import rome from "../../../utils/assests/rome-italy.jpg";
// import cairo from "../../../utils/assests/cairo.jpg";

// const FlightDestinations = () => {
//   const destinations = [
//     { image: eiffel, city: "Paris", country: "France", rating: 4.9, deals: "20+ deals available" },
//     { image: tokyo, city: "Tokyo", country: "Japan", rating: 4.8, deals: "15+ deals available" },
//     { image: newYork, city: "New York", country: "USA", rating: 4.9, deals: "25+ deals available" },
//     { image: bali, city: "Bali", country: "Indonesia", rating: 4.6, deals: "19+ deals available" },
//     { image: lumpur, city: "Kuala Lumpur", country: "Malaysia", rating: 4.9, deals: "24+ deals available" },
//     { image: dubai, city: "Dubai", country: "UAE", rating: 4.8, deals: "20+ deals available" },
//     { image: rome, city: "Rome Italy", country: "Italy", rating: 4.9, deals: "17+ deals available" },
//     { image: cairo, city: "Cairo", country: "Egypt", rating: 4.6, deals: "29+ deals available" },
//   ];

//   const handleBookNow = (e: React.MouseEvent) => {
//     if (window.innerWidth > 768) {
//       e.preventDefault();
//       alert("Please call +1 (844) 954-5425 to book now");
//     }
//   };

//   return (
//     <div className="container  mx-auto px-4 py-12 -mt-14 ">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//           Popular Flight Destinations
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Discover amazing places at unbeatable prices
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {destinations.map((destination, index) => (
//           <div
//             key={index}
//             className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
//           >
//             <div className="relative h-64">
//               <Image
//                 src={destination.image}
//                 alt={`${destination.city}, ${destination.country}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="group-hover:scale-105 transition duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//               <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                 <div className="flex justify-between items-end">
//                   <div>
//                     <h3 className="text-xl font-bold">{destination.city}</h3>
//                     <p className="flex items-center">
//                       <FaMapMarkerAlt className="mr-1" />
//                       {destination.country}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute top-4 left-4 flex items-center bg-white/90 text-yellow-500 px-2 py-1 rounded-full text-sm font-medium">
//                 <FaStar className="mr-1" />
//                 {destination.rating}
//               </div>
//             </div>

//             <div className="bg-white p-4">
//               <div className="flex justify-between items-center gap-3">
//                 <p className="text-sm text-gray-600">{destination.deals}</p>

//                 {/* ✅ Custom Button with your gradient */}
//                 <Button
//                   label="Book Now"
//                   iconLeft={<FaPlane />}
//                   variant="primary"
//                   fullWidth={false}
//                   onClick={handleBookNow}
//                   className="text-white font-medium py-2 px-4 rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FlightDestinations;




import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Reach out to us with your travel requirements and preferences"
    },
    {
      step: "02",
      title: "Personalized Planning",
      description: "We research and create the best options for your specific needs"
    },
    {
      step: "03",
      title: "Expert Booking",
      description: "We handle all reservations and confirmations on your behalf"
    },
    {
      step: "04",
      title: "Travel with Confidence",
      description: "Enjoy your journey with our support throughout your travel"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our personalized approach ensures you get the best travel experience without the hassle 
          of managing multiple bookings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Direct Reservation Service
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Unlike automated booking platforms, we provide personalized service. Our travel experts 
          work directly with you to understand your needs and make reservations that match your 
          exact requirements for cars, flights, hotels, and cruises.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;