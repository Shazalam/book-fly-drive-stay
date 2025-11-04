const ServiceFeatures = () => {
  const features = [
    {
      title: "Multi-Airline Access",
      description: "Exclusive partnerships with 50+ major airlines worldwide",
      benefits: ["Best price guarantee", "Flexible options", "Premium routes"]
    },
    {
      title: "Expert Route Planning",
      description: "Optimized flight paths with minimal layovers and best timing",
      benefits: ["Time efficiency", "Cost optimization", "Comfort focus"]
    },
    {
      title: "24/7 Reservation Support",
      description: "Round-the-clock assistance for all your flight needs",
      benefits: ["Instant changes", "Emergency support", "Expert guidance"]
    },
    {
      title: "Secure Payment Handling",
      description: "Protected transactions with comprehensive booking insurance",
      benefits: ["Payment security", "Booking protection", "Transparent pricing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Service Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Professional flight reservation services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group hover:border-blue-200"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                {feature.description}
              </p>
              
              <div className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;