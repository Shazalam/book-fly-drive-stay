import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "./Faq";
import Image from "next/image";
import CarRental1 from "../../utils/assests/car-rental-1.png";
import CarRental2 from "../../utils/assests/car-rental-2.png";
import CarRental3 from "../../utils/assests/car-rental-3.png";
import CarClean from "../../utils/assests/clean-car.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rentals",
  description: "Car Rentals",
};

const carRentals = () => {
  return (
    <>
      <div className="px-2 bg-[url('/background-large.jpg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] relative">
        <div className="flex flex-col absolute top-15 left-1/2 transform -translate-x-1/2 w-full text-center  text-white px-3 py-8 ">
          <span className="text-4xl ">Car Hire – Search, Compare & Save</span>
          <span className="text-2xl py-5">
            <span className="px-2">✔️</span>
            <span>Free cancellations on most bookings</span>
            <span className="px-2">✔️</span>
            <span>60,000+ locations</span>
            <span className="px-2">✔️</span> <span>Customer support</span>
          </span>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-20">
        <section className="flex flex-wrap md:justify-center gap-4 md:gap-8 px-4 py-10">
          <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] ">
            <Image
              src={CarRental1}
              alt="Flexible rentals icon"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Flexible rentals</span>
              <span className="text-sm text-gray-600 text">
                Cancel or change most bookings for free up to 48 hours before
                pick-up
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] py-5 md:py-0">
            <Image
              src={CarRental2}
              alt="Flexible rentals icon"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">No hidden fees</span>
              <span className="text-sm text-gray-600">
                Know exactly what you’re paying
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 min-w-[280px] max-w-[350px] ">
            <Image
              src={CarRental3}
              alt="Flexible rentals icon"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl">Price Match Guarantee</span>
              <span className="text-sm text-gray-600">
                Found the same deal for less? We’ll match the price.
              </span>
            </div>
          </div>
        </section>
        <section className="pb-10 md:flex md:justify-center">
          <div className="md:flex items-center gap-4  md:w-1/2 w-full border-2 p-3 rounded-2xl">
            <Image
              src={CarClean}
              alt="Flexible rentals icon"
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <span className="font-medium text-xl py-3 md:py-0">
                Clean cars. Flexible bookings. Socially distant rental counters.
              </span>
              <span className="text-sm text-gray-600 text">
                We’re working with our partners to keep you safe and in the
                driving seat.
              </span>
            </div>
          </div>
        </section>
        <section className="py-5">
          {FAQ.map((item, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full mb-4 last:mb-0"
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100"
              >
                <AccordionTrigger className="flex items-center justify-between w-full p-5 text-left hover:no-underline group">
                  <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-gray-700 transition-all duration-300">
                  <div className="prose max-w-none bg-white/70 backdrop-blur-sm p-4 rounded-lg mt-2 border border-blue-100">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </section>
      </div>
    </>
  );
};

export default carRentals;
