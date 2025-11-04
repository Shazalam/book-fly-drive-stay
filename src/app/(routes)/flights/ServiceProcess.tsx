const ServiceProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Share your travel needs with our flight experts",
      details: ["Destination & dates", "Budget preferences", "Special requirements"]
    },
    {
      number: "02",
      title: "Research & Planning",
      description: "We analyze 50+ airlines for optimal routes",
      details: ["Best route options", "Exclusive deals", "Time optimization"]
    },
    {
      number: "03",
      title: "Reservation",
      description: "We handle all booking details securely",
      details: ["Secure payment", "Booking confirmation", "Documentation"]
    },
    {
      number: "04",
      title: "Support & Updates",
      description: "24/7 support throughout your journey",
      details: ["Flight updates", "Change assistance", "Emergency support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Reservation Process
          </h2>
          <p className="text-xl text-gray-600">
            Simple, transparent, and expert-driven flight reservation service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number */}
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {step.number}
              </div>
              
              {/* Step Content */}
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                {/* Step Details */}
                <ul className="text-left space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;