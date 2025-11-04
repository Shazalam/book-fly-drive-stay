// import Image from "next/image";
// import CarClean from "../../utils/assests/clean-car.png";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Premium Car Rentals | Search, Compare & Save on Luxury Vehicles",
//   description: "Book your perfect rental car with free cancellations, no hidden fees, and our best price guarantee. 60,000+ locations worldwide.",
//   keywords: ["car rental", "luxury car hire", "best car rental deals", "vehicle hire"],
//   openGraph: {
//     title: "Premium Car Rentals | Search, Compare & Save",
//     description: "Find the perfect rental car for your next adventure",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Premium Car Rentals",
//       },
//     ],
//   },
// };


// const CarRentals = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
//         <div className="absolute inset-0 bg-black/40 z-10" />
//         <Image
//           src="/banner_home.jpg"
//           alt="Luxury cars for rent"
//           fill
//           priority
//           className="object-cover"
//           quality={100}
//           sizes="100vw"
//         />

//         <div className="container relative z-20 h-full flex flex-col justify-center">
//           <div className="max-w-3xl mx-auto text-center text-white px-4">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
//               Premium <span className="text-blue-400">Car Rentals</span> Made Simple
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
//               Discover the perfect vehicle for your journey with our seamless booking experience
//             </p>

//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-20" />
//       </section>

//       {/* Safety & Cleanliness Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
//             <div className="md:w-1/3 flex justify-center">
//               <Image
//                 src={CarClean}
//                 alt="Clean car rental"
//                 width={300}
//                 height={300}
//                 className="rounded-lg"
//               />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 Your Safety is Our Priority
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 {`We've enhanced our cleaning procedures and implemented contactless rental options to ensure your peace of mind.`}
//               </p>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <li className="flex items-start">
//                   <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Deep-cleaned vehicles with disinfectant</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Contactless pickup and drop-off</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>Socially distant rental counters</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>24/7 roadside assistance</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="container px-4 mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready for Your Next Adventure?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Browse our extensive fleet and find the perfect vehicle for your needs.
//           </p>
//           <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
//             Browse Vehicles
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CarRentals;




import { Metadata } from "next";
import HeroSection from "./HeroSection";
import ServiceFeatures from "./ServiceFeatures";
import RentalProcess from "./RentalProcess";
import ServiceAreas from "./ServiceAreas";
import CTASection from "./CTASection";

export const metadata: Metadata = {
  title: "Premium Car Rentals | USA & Canada | Luxury & Economy Vehicles",
  description: "Book premium rental cars across USA & Canada. Luxury sedans, SUVs, economy cars with flexible booking, free cancellations, and 24/7 support.",
  keywords: ["car rental USA", "car rental Canada", "luxury car rental", "business rental cars", "premium vehicles"],
  openGraph: {
    title: "Premium Car Rentals | USA & Canada",
    description: "Premium rental cars across United States and Canada with best-in-class service",
    images: [
      {
        url: "/og-car-rental.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Car Rentals USA Canada",
      },
    ],
  },
};

const CarRentals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <ServiceFeatures />
      <RentalProcess />
      <ServiceAreas />
      <CTASection />
    </div>
  );
};

export default CarRentals;