"use client";
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaGasPump, FaUsers } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import rav4 from "../../../utils/assests/toyota-rav4.avif"
import Mercedes from "../../../utils/assests/Mercedes.jpg"
import civic from "../../../utils/assests/honda-civic.jpg"
import Chrysler from "../../../utils/assests/Chrysler-Pacifica.avif"
import Expidition from "../../../utils/assests/ford-expidition.jpg"
import Acadia from "../../../utils/assests/GMC-Acadia.jpg"
import Kona from "../../../utils/assests/kona.webp"

const Car = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  
  const cars = [
    {
      image: rav4,
      name: "Mid Size SUV",
      type: "Toyota RAV4 or similar",
      rating: 4.8,
      features: [
        { icon: <FaUsers />, text: "5 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Hybrid" }
      ]
    },
    {
      image: Mercedes,
      name: "Luxury Sedan",
      type: "Mercedes E-Class or similar",
      rating: 4.9,
      features: [
        { icon: <FaUsers />, text: "4 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Premium" }
      ]
    },
    {
      image: civic,
      name: "Economy Car",
      type: "Honda Civic or similar",
      rating: 4.5,
      features: [
        { icon: <FaUsers />, text: "5 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
    {
      image: Chrysler,
      name: "Family Van",
      type: "Chrysler Pacifica or similar",
      rating: 4.5,
      features: [
        { icon: <FaUsers />, text: "7 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
    {
      image: Expidition,
      name: "Full Size SUV",
      type: "Ford Expidition or similar",
      rating: 4.7,
      features: [
        { icon: <FaUsers />, text: "7 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
    {
      image: Chrysler,
      name: "Family Van",
      type: "Chrysler Pacifica or similar",
      rating: 4.4,
      features: [
        { icon: <FaUsers />, text: "7 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
    {
      image: Acadia,
      name: "Elite SUV",
      type: "GMC Acadia or similar",
      rating: 4.9,
      features: [
        { icon: <FaUsers />, text: "7 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
    {
      image: Kona,
      name: "Compact",
      type: "Hyunndai Kona or similar",
      rating: 4.3,
      features: [
        { icon: <FaUsers />, text: "5 seats" },
        { icon: <IoMdSpeedometer />, text: "Automatic" },
        { icon: <FaGasPump />, text: "Regular" }
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Best Car Rental Deals</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our wide selection of vehicles for your perfect trip
        </p>
      </div>

      <Slider {...settings} className="px-2">
        {cars.map((car, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-48">
                <Image
                  src={car.image}
                  alt={car.name}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                  <FaStar className="mr-1" />
                  {car.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                    <p className="text-gray-600">{car.type}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-4 pt-4 border-t border-gray-100">
                  {car.features.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-gray-500">
                      <span className="text-blue-500">{feature.icon}</span>
                      <span className="text-xs mt-1">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const phoneNumber = "+1 (844) 954-5425";

                    if (typeof window !== "undefined") {
                      if (window.innerWidth <= 768) {
                        // Mobile devices: redirect to call
                        window.location.href = `tel:${phoneNumber}`;
                      } else {
                        // Desktop: show alert or alternative action
                        alert(`Please call ${phoneNumber} from your phone.`);
                      }
                    }
                  }}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
                >
                  Book Now
                </button>

              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="text-center mt-8">
        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
          View All Vehicles
        </button>
      </div> */}
    </div>
  );
};

export default Car;