// import DialogBox from "@/app/components/dialogBox/dialogBox";
// import Car from "./car/Car";
// import FlightsIntro from "./flightsIntro/FlightsIntro";
// import HeroSection from "./hero-section/HeroSection";

// const Home = () => {
//   return (
//     <div>
//       <HeroSection />
//       <div className="my-10">
//         <Car />
//       </div>
//       <div className="my-10">
//         <FlightsIntro />
//       </div>
//       <DialogBox />
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarDeals from "./car/Car";
import FlightDestinations from "./flightsIntro/FlightsIntro";
import ServicesGrid from "./services/ServicesGrid";
import Testimonials from "./testimonials/Testimonials";
import Newsletter from "./newsletter/Newsletter";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";
import DialogBox from '@/app/components/dialogBox/dialogBox';

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <HeroSection />
        <div className="py-12">
          <CarRentalCompanies />
        </div>
        <div className="py-12 bg-white">
          <FlightDestinations />
        </div>
        <div className="py-12">
          <CarDeals />
        </div>
        <div className="py-12">
          <ServicesGrid />
        </div>
        <div className="py-12 bg-white">
          <Testimonials />
        </div>
        <div className="py-12 bg-gradient-to-r from-blue-500 to-indigo-600">
          <Newsletter />
        </div>
        {/* <div className="py-12">
          <AppDownload />
        </div> */}

      </div>
      <DialogBox />
    </>

  );
};

export default Home;