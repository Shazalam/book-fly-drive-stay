import Image from "next/image";
import React from "react";
import Image1 from "../../../utils/assests/promo-banner.jpg";
import Image2 from "../../../utils/assests/mexico.jpg";

const FlightsIntro = () => {
  return (
    <div className="container mx-auto px-6 md:px-20">
      <h1 className="text-2xl md:text-3xl text-black font-semibold text-center md:text-left mb-6">
        Book Cheap Flights to your Favourite Destination
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-[350px]">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={Image1}
            alt="Flight picture"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Book Flights at Cheap Rates
            </h2>
            <p className="text-lg text-white">Coming Soon</p>
          </div>
        </div>

        <div className="relative w-full h-[350px]">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={Image2}
            alt="Flight picture"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Top International & Domestic Flight Deals
            </h2>
            <p className="text-lg text-white">Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsIntro;
