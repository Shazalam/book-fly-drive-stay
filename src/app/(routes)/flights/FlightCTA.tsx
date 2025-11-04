const FlightCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Streamline Your Travel?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let our flight experts handle your reservations while you focus on your journey
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Start Your Reservation
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
            Call: +1 (844) 954-5425
          </button>
        </div>

      </div>
    </section>
  );
};

export default FlightCTA;
