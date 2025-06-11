import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarDeals from "./car/Car";
import FlightDestinations from "./flightsIntro/FlightsIntro";
import ServicesGrid from "./services/ServicesGrid";
import Testimonials from "./testimonials/Testimonials";
import Newsletter from "./newsletter/Newsletter";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";

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
      </div>
    </>

  );
};

export default Home;