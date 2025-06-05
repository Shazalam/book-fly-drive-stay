"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import image1 from "../../../utils/assests/image-One.jpg"
import image2 from "../../../utils/assests/image-Two.jpg"
import image3 from "../../../utils/assests/image-Three.jpg"
import Image from 'next/image';
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Booking through this platform was so easy! Found great deals on flights and hotels for our family vacation to Hawaii. Will definitely use again!",
      image: image2
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      comment: "The car rental service was exceptional. Got a premium vehicle at an affordable price with no hidden fees. Highly recommend!",
      image: image1
    },
    {
      name: "Anthony Simson",
      location: "London, UK",
      rating: 4,
      comment: "Customer service helped me change my flight last minute with no hassle. Very professional and understanding.",
      image: image3
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
         {`Don't just take our word for it - hear from travelers like you`}
        </p>
      </div>

      <Slider {...settings} className="px-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="bg-white p-6 rounded-xl shadow-md h-full">
              <div className="flex items-start mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                
                  <Image
                     src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-gray-200 text-3xl absolute -top-2 -left-2" />
                <p className="text-gray-700 relative z-10 pl-6">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;