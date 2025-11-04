const ServiceBenefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Cost Savings",
      description: "Access exclusive deals and negotiated rates unavailable to the public"
    },
    {
      icon: "⏱️",
      title: "Time Efficiency",
      description: "Save hours of research with our expert flight planning and booking"
    },
    {
      icon: "🛡️",
      title: "Risk Reduction",
      description: "Professional handling of changes, cancellations, and emergencies"
    },
    {
      icon: "🌟",
      title: "Premium Service",
      description: "Personalized attention and premium support throughout your journey"
    },
    {
      icon: "🔍",
      title: "Expert Insight",
      description: "Industry knowledge for optimal routing and timing decisions"
    },
    {
      icon: "📞",
      title: "Dedicated Support",
      description: "Single point of contact for all your flight-related needs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Service?
          </h2>
          <p className="text-xl text-gray-600">
            Professional flight reservation expertise that delivers real value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;