import React from 'react';
import Image from 'next/image';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const AppDownload = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Download Our Mobile App</h2>
            <p className="text-gray-600 mb-6">
              Book flights, hotels, and car rentals on the go with our easy-to-use mobile app. 
              Get exclusive mobile-only deals and manage your bookings anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                <FaApple className="text-2xl mr-2" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-medium">App Store</p>
                </div>
              </button>
              
              <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                <FaGooglePlay className="text-xl mr-2" />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="font-medium">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image 
              src="/mobile-app-screens.png"
              alt="Mobile App Screens"
              layout="fill"
              objectFit="cover"
              className="object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;