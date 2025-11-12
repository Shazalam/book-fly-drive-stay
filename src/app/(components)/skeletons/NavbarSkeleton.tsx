// components/skeletons/EnhancedNavbarSkeleton.tsx

export default function EnhancedNavbarSkeleton() {
    return (
        <>
            {/* Main Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo Area */}
                        <div className="flex items-center space-x-45">
                            <div className="w-36 h-10 bg-gray-300 rounded-lg"></div>

                            {/* Desktop Nav Items */}
                            <div className="hidden lg:flex items-center space-x-5">
                                {['Home', 'Cars', 'Flights', 'Hotels', 'Cruise'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 py-2">
                                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-2 md:gap-6 ">

                            {/* Auth Buttons */}
                            <div className="hidden lg:flex items-center gap-4">
                                <div className="w-20 h-9 bg-gray-200 rounded-lg"></div>
                                <div className="w-24 h-9 bg-gray-300 rounded-lg"></div>
                            </div>

                            {/* User Avatar */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full border border-gray-300"></div>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden w-10 h-10 bg-gray-200 rounded-full border border-gray-300"></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation Bar - Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-40 py-3 px-6">
                <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex flex-col items-center space-y-1">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-12 h-2 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}