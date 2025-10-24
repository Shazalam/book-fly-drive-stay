import React from 'react';
import { FaHeadset, FaShieldAlt, FaWallet, FaGlobe } from 'react-icons/fa';

const ServicesGrid = () => {
  const services = [
    {
      icon: <FaHeadset size={32} className="text-blue-600" />,
      title: "24/7 Customer Support",
      description: "Our team is always ready to help you with any questions or issues."
    },
    {
      icon: <FaShieldAlt size={32} className="text-blue-600" />,
      title: "Secure Booking",
      description: "Your information is protected with our advanced security measures."
    },
    {
      icon: <FaWallet size={32} className="text-blue-600" />,
      title: "Best Price Guarantee",
      description: "Found a better price? We'll match it and give you credit."
    },
    {
      icon: <FaGlobe size={32} className="text-blue-600" />,
      title: "Worldwide Coverage",
      description: "Book travel services in thousands of destinations worldwide."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {`We're committed to making your travel experience seamless and enjoyable`}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-4 rounded-full">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;