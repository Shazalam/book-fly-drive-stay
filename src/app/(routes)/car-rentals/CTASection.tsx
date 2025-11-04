const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          Ready to Experience Premium Car Rental?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers across the United States and Canada who trust us for their transportation needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore Our Fleet
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Contact Our Team
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTASection;