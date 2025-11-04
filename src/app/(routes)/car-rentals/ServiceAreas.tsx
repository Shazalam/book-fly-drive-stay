const ServiceAreas = () => {
  const usCities = [
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", 
    "Las Vegas, NV", "San Francisco, CA", "Seattle, WA", "Boston, MA"
  ];

  const canadaCities = [
    "Toronto, ON", "Vancouver, BC", "Montreal, QC", "Calgary, AB",
    "Ottawa, ON", "Edmonton, AB", "Winnipeg, MB", "Quebec City, QC"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving Major Cities Across USA & Canada
          </h2>
          <p className="text-xl text-gray-600">
           {` With 500+ convenient locations, we're always nearby when you need a reliable rental vehicle.`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* USA Cities */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-sm border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-6 bg-red-600 rounded shadow-sm"></div>
              <h3 className="text-2xl font-bold text-gray-900">United States</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usCities.map((city, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-red-100">
              <p className="text-gray-600 text-sm">
                Plus 200+ additional locations across all 50 states
              </p>
            </div>
          </div>

          {/* Canada Cities */}
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-sm border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-6 bg-red-600 rounded shadow-sm" style={{
                background: 'linear-gradient(to right, red 0%, red 33%, white 33%, white 66%, red 66%, red 100%)'
              }}></div>
              <h3 className="text-2xl font-bold text-gray-900">Canada</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {canadaCities.map((city, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-red-100">
              <p className="text-gray-600 text-sm">
                Serving all major provinces and territories across Canada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;