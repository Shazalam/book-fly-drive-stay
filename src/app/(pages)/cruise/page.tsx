import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaUmbrellaBeach,
  FaWifi,
  FaSwimmingPool,
  FaStar,
} from "react-icons/fa";
import Cruise from "../../utils/assests/cruiseOne.jpg";
import CruiseCarousel from "@/app/components/CruiseCarousel";

const CruiseComponent = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment:
        "The Caribbean cruise was absolutely amazing! The staff went above and beyond to make our vacation special.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      comment:
        "Alaskan adventure was a once-in-a-lifetime experience. Saw whales right from our balcony!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      comment:
        "Perfect family vacation. The kids loved the pools and activities while we enjoyed the spa and dining.",
      rating: 4,
    },
  ];

  

  return (
    <>
      <Head>
        <title>Travelouts | Cruise Deals</title>
        <meta
          name="description"
          content="Book luxury cruise deals at the lowest prices. Secure and easy booking process."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative h-100 md:h-[500px]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src={Cruise}
            alt="Luxury Cruise Ship"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 mt-5">
              Discover Amazing Cruise Deals
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
              Sail to breathtaking destinations with our exclusive cruise
              packages
            </p>
            <a
              href="tel:+1 (844) 954-5425"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Book Cruises Now
            </a>
          </div>
        </section>

        {/* Search Section */}
        <section className="container mx-auto px-4 py-12 -mt-26 sm:-mt-30 md:-mt-35 lg:-mt-40 xl:-mt-42 relative z-30">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Find Your Perfect Cruise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Destination</option>
                  <option>Caribbean</option>
                  <option>Alaska</option>
                  <option>Mediterranean</option>
                  <option>Northern Europe</option>
                  <option>Asia</option>
                  <option>Australia & New Zealand</option>
                  <option>South Pacific</option>
                  <option>Hawaii</option>
                  <option>Transatlantic</option>
                  <option>Panama Canal</option>
                  <option>Middle East</option>
                  <option>Africa</option>
                  <option>Antarctica</option>
                  <option>World Cruise</option>
                  <option>Transpacific</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Departure Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Duration</option>
                  <option>3-5 Nights</option>
                  <option>7 Nights</option>
                  <option>10+ Nights</option>
                </select>
              </div>
              <div className="text-center">
                <a
                  href="tel:+1 (844) 954-5425"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:shadow-md"
                >
                  Book Cruises Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cruises */}
        <section className="container mx-auto px-4 py-12">
          <CruiseCarousel />
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose BookFlyDriveStay for Your Cruise?
              </h2>
              <p className="text-xl max-w-3xl mx-auto">{`We make cruise booking easy and affordable with exclusive deals you won't find anywhere else`}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUmbrellaBeach className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
                <p className="text-blue-100">
                  {` We guarantee the lowest prices on all our cruise packages or
                  we'll match the difference.`}
                </p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWifi className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  24/7 Customer Support
                </h3>
                <p className="text-blue-100">
                  Our cruise experts are available round the clock to assist you
                  with any questions or changes.
                </p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSwimmingPool className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exclusive Perks</h3>
                <p className="text-blue-100">
                  Get special onboard credits, cabin upgrades, and amenities not
                  available when booking directly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {` Don't just take our word for it - hear from travelers who've
              sailed with us`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {`${testimonial.comment}`}
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-amber-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Set Sail?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Contact our cruise specialists today to find the perfect vacation
              for you
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+1 (844) 954-5425"
                className="inline-block bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Call Now: +1 (844) 954-5425
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CruiseComponent;
