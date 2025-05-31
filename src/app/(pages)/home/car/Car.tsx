"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './car.css'
import Image1 from "../../../utils/assests/car1.jpg";
import Image2 from "../../../utils/assests/car2.jpg";
import Image5 from "../../../utils/assests/fordCar.avif";

const Car = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],


  };
  
  const images = [Image1, Image2, Image2, Image5];

  return (
    <div className="container mx-auto px-6 md:px-20">
      <h1 className="text-2xl md:text-3xl text-black font-semibold text-center md:text-left mb-6">
        Check out the Best Car Deals
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-3">
              <div className="relative w-full h-[250px]">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full  rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-semibold"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Car;
