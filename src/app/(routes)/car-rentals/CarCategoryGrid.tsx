"use client";

import Image from "next/image";
import Button from "@/app/(components)/common/Button";

// Cars-images
import small from "../../utils/assests/cars-images/small-car.avif"
import medium from "../../utils/assests/cars-images/medium-car.webp"
import convertible from "../../utils/assests/cars-images/Convertible.webp"
import van from "../../utils/assests/cars-images/van-car.avif"
import suv from "../../utils/assests/cars-images/suv-car.webp"
import pickupCar from "../../utils/assests/cars-images/pickup-car.webp"
import luxuryCar from "../../utils/assests/cars-images/luxury-car.avif"
import ford from "../../utils/assests/cars-images/ford-expidition.jpg"

// Companies-logos
import ace from "../../utils/assests/companies-logos/ace.png";
import Hertz from "../../utils/assests/companies-logos/Hertz.avif";
import Alamo from "../../utils/assests/companies-logos/Alamo.png";
import budget from "../../utils/assests/companies-logos/budget.png";
import avis from "../../utils/assests/companies-logos/avis.png";
import Enterprise from "../../utils/assests/companies-logos/Enterprise.png";
import europecar from "../../utils/assests/companies-logos/europecar.png";
import fox from "../../utils/assests/companies-logos/foxjpeg.jpeg";
import NU from "../../utils/assests/companies-logos/NU.webp";
import Payless from "../../utils/assests/companies-logos/payless.png";
import Sixt from "../../utils/assests/companies-logos/sixt.avif";
import thrifty from "../../utils/assests/companies-logos/thrifty.png";
import uSave from "../../utils/assests/companies-logos/u-Save.png";
import National from "../../utils/assests/companies-logos/National.png";

// Use imported images
const PARTNER_BRANDS = [
  { name: "ACE", logo: ace },
  { name: "Hertz", logo: Hertz },
  { name: "Alamo", logo: Alamo },
  { name: "Budget", logo: budget },
  { name: "Avis", logo: avis },
  { name: "Enterprise", logo: Enterprise },
  { name: "Europcar", logo: europecar },
  { name: "Fox", logo: fox },
  { name: "NU", logo: NU },
  { name: "Payless", logo: Payless },
  { name: "Sixt", logo: Sixt },
  { name: "Thrifty", logo: thrifty },
  { name: "U-Save", logo: uSave },
  { name: "National", logo: National },
];

const CAR_CATEGORIES = [
  { name: "Small", price: 10, image: small },
  { name: "Medium", price: 12, image: medium },
  { name: "Large", price: 15, image: ford },
  { name: "SUV", price: 22, image: suv },
  { name: "VAN", price: 35, image: van },
  { name: "Luxury", price: 48, image: luxuryCar },
  { name: "Pickup Truck", price: 38, image: pickupCar },
  { name: "Convertible", price: 62, image: convertible },
];

const CarCategoryGrid = () => {
  return (
    <section className="w-full bg-[#090321] text-white">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Top heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] font-bold tracking-tight">
            The cheapest car rental rates are just a click away
          </h2>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {PARTNER_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-12 sm:h-14 px-4 sm:px-5 rounded-xl bg-white shadow-md shadow-black/20"
            >
              {/* Replace with <Image /> once logos are ready */}
              <Image
                src={brand.logo}
                alt={brand.name}
                // fill
                width={100}
                height={40}
              // className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Middle title + subtitle */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2">
            All the best deals and rental options in one place
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-200">
            Finding the perfect car rental is easier than ever.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {CAR_CATEGORIES.map((car) => (
            <div
              key={car.name}
              className="flex flex-col justify-between rounded-2xl bg-[#130a3a] border border-white/5 shadow-lg shadow-black/40 overflow-hidden"
            >
              {/* Top content */}
              <div className="flex-1 px-4 sm:px-5 pt-4 sm:pt-5 pb-3 flex justify-between items-start gap-3">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold mb-1">
                    {car.name}
                  </h4>
                </div>

                {/* Car image container */}
                <div className="relative w-24 sm:w-28 h-14 sm:h-16">
                  {/* Example Image usage: */}
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                  />

                </div>
              </div>

              {/* Bottom price and button */}
              <div className="border-t border-white/5 px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between bg-[#0f082f]">
                <div className="text-sm sm:text-base font-semibold">
                  ${car.price}
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    window.location.href = "tel:+18449545425";
                  }}
                  className="  !px-4 !py-2 !text-xs !rounded-full"
                  fullWidth={false}
                >
                  See offer
                </Button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CarCategoryGrid;
