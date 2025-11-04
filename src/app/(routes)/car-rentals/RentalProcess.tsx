const RentalProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Vehicle",
      description: "Select from our premium fleet of luxury sedans, SUVs, or economy cars tailored to your needs."
    },
    {
      number: "02",
      title: "Customize Your Rental",
      description: "Add insurance, child seats, GPS, or other extras. Get instant pricing with no hidden fees."
    },
    {
      number: "03",
      title: "Pick Up & Go",
      description: "Fast, contactless pickup at any of our 500+ locations across USA and Canada."
    },
    {
      number: "04",
      title: "Enjoy Your Journey",
      description: "Drive with confidence knowing 24/7 roadside assistance and customer support are available."
    }
  ];

  return (
    <section className="py-20 px-2 sm:px-15 md:px-12 lg:px-35 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple & Transparent Rental Process
          </h2>
          <p className="text-xl text-gray-600">
            Four easy steps to get you on the road with the perfect vehicle for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-blue-200 transform translate-y-8"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number Circle */}
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 shadow-lg">
                {step.number}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentalProcess;