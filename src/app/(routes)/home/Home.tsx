import React from 'react';
import HeroSection from "./hero-section/HeroSection";
import CarRentalCompanies from "./carRentalCompanies/CarRentalCompanies";
import ServicesOverview from './services/ServicesGrid';
import HowWeWork from './HowWeWork/HowWeWork';
import ContactCta from './contact-cta/ContactCta';

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 scroll-smooth">
        {/* Hero Section */}
        <HeroSection />

        {/* Car Rental Partners */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-white">
          <CarRentalCompanies />
        </div>

        {/* Our Services Overview */}
        <div id="services" className="px-4 sm:px-6 lg:px-8 xl:px-20 py-16 bg-gray-50 scroll-mt-20">
          <ServicesOverview />
        </div>

        {/* How We Work */}
        <div className="bg-white">
          <HowWeWork />
        </div>

        {/* Contact CTA */}
        <div id="contact" className="scroll-mt-20">
          <ContactCta />
        </div>
      </div>
    </>
  );
};

export default Home;
