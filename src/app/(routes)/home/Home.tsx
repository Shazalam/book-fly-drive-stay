// import React from 'react';
// import HeroSection from "./hero-section/HeroSection";
// import CarDeals from "../../(components)/dialogBox/car/Car";
// import FlightDestinations from "./flightsIntro/FlightsIntro";
// import ServicesGrid from "./services/ServicesGrid";
// import Testimonials from "../../(components)/testimonials/Testimonials";
// import Newsletter from "./newsletter/Newsletter";
// import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";

// const Home = () => {
//   return (
//     <>
//       <div className="bg-gray-50">
//         <HeroSection />
//         <div className="px-4 sm:px-6 lg:px-15 xl:px-20 space-y-16 mt-20">
//           <CarRentalCompanies />
//         </div>
//         <div className="px-4 sm:px-6 lg:px-14 xl:px-20 space-y-16 bg-white">
//           <FlightDestinations />
//         </div>
//         <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16">
//           <CarDeals />
//         </div>
//         <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16">
//           <ServicesGrid />
//         </div>
//         <div className="px-4 sm:px-6 lg:px-14 xl:px-20 space-y-16">
//           <Testimonials />
//         </div>
//         <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
//           <Newsletter />
//         </div>
//       </div>
//     </>

//   );
// };

// export default Home;




import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";
import ServicesOverview from './services/ServicesGrid';
import HowWeWork from './flightsIntro/FlightsIntro';
import ContactCta from './contact-cta/ContactCta';

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Car Rental Partners */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-white">
          <CarRentalCompanies />
        </div>

        {/* Our Services Overview */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-gray-50">
          <ServicesOverview/>
        </div>

        {/* How We Work */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-white">
          <HowWeWork />
        </div>

        {/* Contact CTA */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
              <ContactCta />
        </div>
      </div>
    </>
  );
};

export default Home;