// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { FAQ } from "./Faq";
// import Image from "next/image";
// import CarRental1 from "../../utils/assests/car-rental-1.png";
// import CarRental2 from "../../utils/assests/car-rental-2.png";
// import CarRental3 from "../../utils/assests/car-rental-3.png";
// import CarClean from "../../utils/assests/clean-car.png";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Car Rentals",
//   description: "Car Rentals",
// };

// const carRentals = () => {
//   return (
//     <>
//       <div className="px-2 bg-[url('/background-large.jpg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] relative">
//         <div className="flex flex-col absolute top-15 left-1/2 transform -translate-x-1/2 w-full text-center  text-white px-3 py-8 ">
//           <span className="text-4xl ">Car Hire – Search, Compare & Save</span>
//           <span className="text-2xl py-5">
//             <span className="px-2">✔️</span>
//             <span>Free cancellations on most bookings</span>
//             <span className="px-2">✔️</span>
//             <span>60,000+ locations</span>
//             <span className="px-2">✔️</span> <span>Customer support</span>
//           </span>
//         </div>
//       </div>
//       <div className="container mx-auto px-6 md:px-20">
//         <section className="flex flex-wrap md:justify-center gap-4 md:gap-8 px-4 py-10">
//           <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] ">
//             <Image
//               src={CarRental1}
//               alt="Flexible rentals icon"
//               width={50}
//               height={50}
//             />
//             <div className="flex flex-col">
//               <span className="font-medium text-xl">Flexible rentals</span>
//               <span className="text-sm text-gray-600 text">
//                 Cancel or change most bookings for free up to 48 hours before
//                 pick-up
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] py-5 md:py-0">
//             <Image
//               src={CarRental2}
//               alt="Flexible rentals icon"
//               width={50}
//               height={50}
//             />
//             <div className="flex flex-col">
//               <span className="font-medium text-xl">No hidden fees</span>
//               <span className="text-sm text-gray-600">
//                 Know exactly what you’re paying
//               </span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] ">
//             <Image
//               src={CarRental3}
//               alt="Flexible rentals icon"
//               width={50}
//               height={50}
//             />
//             <div className="flex flex-col">
//               <span className="font-medium text-xl">Price Match Guarantee</span>
//               <span className="text-sm text-gray-600">
//                 Found the same deal for less? We’ll match the price.
//               </span>
//             </div>
//           </div>
//         </section>
//         <section className="pb-10 md:flex md:justify-center">
//           <div className="md:flex items-center gap-4  md:w-1/2 w-full border-2 p-3 rounded-2xl">
//             <Image
//               src={CarClean}
//               alt="Flexible rentals icon"
//               width={50}
//               height={50}
//             />
//             <div className="flex flex-col">
//               <span className="font-medium text-xl py-3 md:py-0">
//                 Clean cars. Flexible bookings. Socially distant rental counters.
//               </span>
//               <span className="text-sm text-gray-600 text">
//                 We’re working with our partners to keep you safe and in the
//                 driving seat.
//               </span>
//             </div>
//           </div>
//         </section>
//         <section className="py-5">
//           {FAQ.map((item, index) => (
//             <Accordion
//               key={index}
//               type="single"
//               collapsible
//               className="w-full mb-4 last:mb-0"
//             >
//               <AccordionItem
//                 value={`item-${index}`}
//                 className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100"
//               >
//                 <AccordionTrigger className="flex items-center justify-between w-full p-5 text-left hover:no-underline group">
//                   <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
//                     {item.title}
//                   </span>
//                 </AccordionTrigger>
//                 <AccordionContent className="px-5 pb-5 pt-0 text-gray-700 transition-all duration-300">
//                   <div className="prose max-w-none bg-white/70 backdrop-blur-sm p-4 rounded-lg mt-2 border border-blue-100">
//                     <div dangerouslySetInnerHTML={{ __html: item.content }} />
//                   </div>
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           ))}
//         </section>
//       </div>
//     </>
//   );
// };

// export default carRentals;



import Image from "next/image";
import CarRental1 from "../../utils/assests/car-rental-1.png";
import CarRental2 from "../../utils/assests/car-rental-2.png";
import CarRental3 from "../../utils/assests/car-rental-3.png";
import CarClean from "../../utils/assests/clean-car.png";
import { Metadata } from "next";
// import { SearchForm } from "./SearchForm";
import Testimonials from "../../(components)/testimonials/Testimonials";
import CarDeals from "../../(components)/dialogBox/car/Car";



export const metadata: Metadata = {
  title: "Premium Car Rentals | Search, Compare & Save on Luxury Vehicles",
  description: "Book your perfect rental car with free cancellations, no hidden fees, and our best price guarantee. 60,000+ locations worldwide.",
  keywords: ["car rental", "luxury car hire", "best car rental deals", "vehicle hire"],
  openGraph: {
    title: "Premium Car Rentals | Search, Compare & Save",
    description: "Find the perfect rental car for your next adventure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Car Rentals",
      },
    ],
  },
};

const CarRentals = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/banner_home.jpg"
          alt="Luxury cars for rent"
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="100vw"
        />

        <div className="container relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Premium <span className="text-blue-400">Car Rentals</span> Made Simple
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
              Discover the perfect vehicle for your journey with our seamless booking experience
            </p>

            {/* Search Form Component */}
            {/* <SearchForm /> */}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-20" />
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Rental Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional rental experience with transparent pricing and premium service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Image
                  src={CarRental1}
                  alt="Flexible rentals icon"
                  width={40}
                  height={40}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Rentals</h3>
              <p className="text-gray-600">
                Cancel or change most bookings for free up to 48 hours before pick-up. No stress, no hassle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Image
                  src={CarRental2}
                  alt="No hidden fees icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees or surprises. Know exactly what you're paying with our all-inclusive pricing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Image
                  src={CarRental3}
                  alt="Price match icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Found the same deal for less? We'll match the price plus give you 10% off the difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Cleanliness Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src={CarClean}
                alt="Clean car rental"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Safety is Our Priority
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We've enhanced our cleaning procedures and implemented contactless rental options to ensure your peace of mind.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deep-cleaned vehicles with disinfectant</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Contactless pickup and drop-off</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Socially distant rental counters</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 roadside assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <CarDeals />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our extensive fleet and find the perfect vehicle for your needs.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Browse Vehicles
          </button>
        </div>
      </section>
    </div>
  );
};

export default CarRentals;
