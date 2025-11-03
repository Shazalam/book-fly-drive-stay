// import React from 'react';
// import { FaHeadset, FaShieldAlt, FaWallet, FaGlobe } from 'react-icons/fa';

// const ServicesGrid = () => {
//   const services = [
//     {
//       icon: <FaHeadset size={32} className="text-indigo-500" />,
//       title: "24/7 Customer Support",
//       description: "Our team is always ready to help you with any questions or issues."
//     },
//     {
//       icon: <FaShieldAlt size={32} className="text-indigo-500" />,
//       title: "Secure Booking",
//       description: "Your information is protected with our advanced security measures."
//     },
//     {
//       icon: <FaWallet size={32} className="text-indigo-500" />,
//       title: "Best Price Guarantee",
//       description: "Found a better price? We'll match it and give you credit."
//     },
//     {
//       icon: <FaGlobe size={32} className="text-indigo-500" />,
//       title: "Worldwide Coverage",
//       description: "Book travel services in thousands of destinations worldwide."
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         {`We're committed to making your travel experience seamless and enjoyable`}
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
//             <div className="flex justify-center mb-4">
//               <div className="bg-blue-100 p-4 rounded-full">
//                 {service.icon}
//               </div>
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
//             <p className="text-gray-600">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesGrid;





import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      icon: "🚗",
      title: "Car Rentals",
      description: "We help you find the perfect vehicle for your journey from our trusted rental partners worldwide."
    },
    {
      icon: "🏨",
      title: "Hotel Reservations",
      description: "Get the best accommodations tailored to your preferences and budget through our reservation service."
    },
    {
      icon: "✈️",
      title: "Flight Bookings",
      description: "Let us handle your flight arrangements with optimal routing and competitive pricing."
    },
    {
      icon: "🚢",
      title: "Cruise Packages",
      description: "Experience seamless cruise reservations with our personalized booking assistance."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Travel Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         {` We specialize in personalized travel reservation services. Contact us directly, 
          and we'll handle all your booking needs with expertise and care.`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;