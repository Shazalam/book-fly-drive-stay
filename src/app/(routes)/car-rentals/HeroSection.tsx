"use client"

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Floating Circles */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float">
                    <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping"></div>
                </div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-400 rounded-full opacity-30 animate-float delay-1000">
                    <div className="absolute inset-0 bg-indigo-300 rounded-full animate-ping"></div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-25 animate-float delay-2000">
                    <div className="absolute inset-0 bg-cyan-300 rounded-full animate-ping"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            {/* Main Content */}
            <div className="container relative mx-auto px-4 py-20 lg:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
                            <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></span>
                            <span className="text-sm font-semibold text-white tracking-wide">
                                🚗 Serving 500+ Locations Across USA & Canada
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                            <span className="text-white drop-shadow-2xl">
                                Feel the
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">
                                Premium Drive
                            </span>
                        </h1>


                        {/* Subheading */}
                        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
                            Premium car rental experience across <span className="font-semibold text-white">North America</span>.
                            From luxury sedans to family SUVs — your perfect ride awaits.
                        </p>

                        {/* CTA Buttons */}
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <button className="group bg-white text-blue-900 hover:bg-gray-50 font-bold py-5 px-10 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                                <span className="flex items-center gap-3">
                                    Find Your Vehicle
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>

                            <button className="group border-2 border-white/50 text-white hover:border-white hover:bg-white/10 font-bold py-5 px-10 rounded-2xl text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                                <span className="flex items-center gap-3">
                                    View Fleet
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                                    </svg>
                                </span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Enhanced Wave Divider */}
            {/* <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-20 text-gray-50 fill-current"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                </svg>
            </div> */}

            {/* Add custom animations to tailwind config */}

            {/* Add this CSS for animated gradient */}

        <style jsx>{`
            @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
            }
            .animate-float {
            animation: float 6s ease-in-out infinite;
            }
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-gradient {
                animation: gradient 3s ease infinite;
                background-size: 300% 300%;
            }
      `}</style>
        </section>
    );
};

export default HeroSection;