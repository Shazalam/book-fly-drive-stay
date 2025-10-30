import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarDeals from "../../(components)/dialogBox/car/Car";
import FlightDestinations from "./flightsIntro/FlightsIntro";
import ServicesGrid from "./services/ServicesGrid";
import Testimonials from "../../(components)/testimonials/Testimonials";
import Newsletter from "./newsletter/Newsletter";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <HeroSection />
        <div className="px-4 sm:px-6 lg:px-15 xl:px-20 space-y-16 mt-20">
          <CarRentalCompanies />
        </div>
        {/* <div className="px-4 sm:px-6 lg:px-14 xl:px-20 space-y-16 bg-white">
          <FlightDestinations />
        </div>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16">
          <CarDeals />
        </div>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16">
          <ServicesGrid />
        </div>
        <div className="px-4 sm:px-6 lg:px-14 xl:px-20 space-y-16">
          <Testimonials />
        </div>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500">
          <Newsletter />
        </div> */}
      </div>
    </>

  );
};

export default Home;