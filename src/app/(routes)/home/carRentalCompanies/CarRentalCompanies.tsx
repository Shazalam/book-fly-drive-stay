'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ace from "../../../utils/assests/ace.png"
import Hertz from "../../../utils/assests/Hertz.avif"
import Alamo from "../../../utils/assests/Alamo.png"
import budget from "../../../utils/assests/budget.png"
import avis from "../../../utils/assests/avis.png"
import Enterprise from "../../../utils/assests/Enterprise.png"
import europecar from "../../../utils/assests/europecar.png"
import fox from "../../../utils/assests/foxjpeg.jpeg"
import NU from "../../../utils/assests/NU.webp"
import Payless from "../../../utils/assests/payless.png"
import Sixt from "../../../utils/assests/sixt.avif"
import thrifty from "../../../utils/assests/thrifty.png"
import uSave from "../../../utils/assests/u-Save.png"
import National from "../../../utils/assests/National.png"


import "./CarRentalCompanies.css";
const carRentalCompanies = [
    { name: 'Ace Car Rental', image: ace },
    { name: 'Alamo Car Rental', image: Alamo },
    { name: 'Avis Car Rental', image: avis },
    { name: 'Budget Car Rental', image: budget },
    { name: 'Enterprise Car Rental', image: Enterprise },
    { name: 'Europcar Car Rental', image: europecar },
    { name: 'Fox Car Rental', image: fox },
    { name: 'Hertz Car Rental', image: Hertz },
    { name: 'NU Car Rental', image: NU },
    { name: 'Payless Car Rental', image: Payless },
    { name: 'Sixt Car Rental', image: Sixt },
    { name: 'Thrifty Car Rental', image: thrifty },
    { name: 'U-Save Car Rental', image: uSave },
    { name: 'National Car Rental', image: National },
];


const CarRentalCompanies = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-2 -mt-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Our Car Rental Partners
            </h2>
            <div className="relative px-4 md:px-8 py-6 bg-gray-50 rounded-xl">
                <Slider {...settings}>
                    {carRentalCompanies.map((company, index) => (
                        <div
                            key={`${company.name}-${index}`}
                            className="px-2 group my-1"
                        >
                            <div className="relative w-full h-25 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100 flex flex-col">

                                {/* Logo Container with Gradient Overlay */}
                                <div className="relative h-25 w-full bg-gradient-to-br from-white-50 to-gray-50 flex items-center justify-center p-4">
                                    <Image
                                        src={company.image}
                                        alt={company.name}
                                        width={180}
                                        height={80}
                                        className="object-contain h-full w-auto transition-transform duration-300 group-hover:scale-110"
                                        priority={index < 3}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default CarRentalCompanies;