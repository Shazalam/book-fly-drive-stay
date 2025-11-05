import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: "01",
      title: "Contact Us",
      description: "Reach out to us with your travel requirements and preferences"
    },
    {
      step: "02",
      title: "Personalized Planning",
      description: "We research and create the best options for your specific needs"
    },
    {
      step: "03",
      title: "Expert Booking",
      description: "We handle all reservations and confirmations on your behalf"
    },
    {
      step: "04",
      title: "Travel with Confidence",
      description: "Enjoy your journey with our support throughout your travel"
    }
  ];

  return (
    <div className="mx-auto pt-5">
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8 xl:px-20 py-5 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our personalized approach ensures you get the best travel experience without the hassle 
          of managing multiple bookings.
        </p>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 xl:px-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center py-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Direct Reservation Service
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Unlike automated booking platforms, we provide personalized service. Our travel experts 
          work directly with you to understand your needs and make reservations that match your 
          exact requirements for cars, flights, hotels, and cruises.
        </p>
      </div>
    </div>
  );
};

export default HowWeWork;