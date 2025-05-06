"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoCarSport } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaHotel } from "react-icons/fa";
import { RiMenuSearchFill } from "react-icons/ri";
import { MdOutlineCardTravel } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CgReadme } from "react-icons/cg";
import "./HeroSection.css";
const HeroSection = () => {
  const slides = [
    {
      title: "Big names, great deals",
      icon: <CgReadme />,
    },
    {
      title: "Trusted and free",
      icon: <VscWorkspaceTrusted />,
    },
    {
      title: "Filter for what you want",
      icon: <RiMenuSearchFill />,
    },
    {
      title: "We know travel",
      icon: <MdOutlineCardTravel />,
    },
    {
      title: "Best Hotel deals",
      icon: <FaHotel />,
    },
    {
      title: "Flexible car rentals deals",
      icon: <IoCarSport />,
    },
    {
      title: "Call 24/7 Support",
      icon: <IoMdCall />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-2 bg-[url('/hero-image-2.jpeg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="flex flex-col absolute top-10 left-1/2 transform -translate-x-1/2 w-full text-center  text-white  ">
        <span className="text-4xl ">Convinient Flights, Stays and Car Rentals</span>
        <span className="text-2xl ">
         Book your packages with us now!
        </span>
      </div>
      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-full max-w-5xl  bg-white rounded p-7">
        <div className="slider-container">
          <Slider {...settings}>
            {slides.map((item, index) => (
              <div key={index} className="px-3 !flex justify-center">
                <div className="relative w-1/2  md:w-full h-[50px]">
                  <div className="font-medium flex flex-col items-center">
                    <div className="font-extrabold text-xl py-1">
                      {item.icon}
                    </div>
                    <div className="text-sm">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
