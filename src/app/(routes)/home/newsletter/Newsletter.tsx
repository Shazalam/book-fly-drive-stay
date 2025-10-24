import React from 'react';
import { FiMail } from 'react-icons/fi';

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Exclusive Travel Deals</h2>
        <p className="text-xl text-blue-100 mb-8">
          Subscribe to our newsletter and be the first to know about special offers
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <div className="relative flex-1 ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300  text-zinc-50"
            />
          </div>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
            Subscribe
          </button>
        </div>
        
        <p className="text-blue-100 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;