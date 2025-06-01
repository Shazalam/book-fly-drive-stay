"use client";

import { useState, useEffect } from 'react';
import { FiCalendar, FiUsers, FiChevronDown, FiArrowRight } from 'react-icons/fi';

const FlightSearchSection = () => {
    const [activeTab, setActiveTab] = useState<'roundtrip' | 'oneway'>('roundtrip');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travelers, setTravelers] = useState('1');
    const [cabinClass, setCabinClass] = useState('economy');
    const [todayDate, setTodayDate] = useState('');

    const [originQuery, setOriginQuery] = useState('');
    const [destinationQuery, setDestinationQuery] = useState('');
    const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
    const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);

    // Sample airport data - you might want to fetch this from an API
    const airportData = [
        { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi' },
        { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
        { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
        { code: 'ORD', name: "O'Hare International Airport", city: 'Chicago' },
        { code: 'MIA', name: 'Miami International Airport', city: 'Miami' },
        { code: 'LHR', name: 'Heathrow Airport', city: 'London' },
        { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' },
        { code: 'FLL', name: 'Fort Lauderdale-Hollywood International Airport', city: 'Fort Lauderdale' },
        { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris' },
        { code: 'FCO', name: 'Leonardo da Vinci-Fiumicino Airport', city: 'Rome' },
        { code: 'DPS', name: 'Ngurah Rai International Airport', city: 'Bali' },
        { code: 'BCN', name: 'Barcelona-El Prat Airport', city: 'Barcelona' },
        { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore' },
    ];
    // Initialize date on client side only
    useEffect(() => {
        setTodayDate(new Date().toISOString().split('T')[0]);
    }, []);

    return (
        <section className="container mx-auto px-4 py-12  relative z-30">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Search Flights
                </h2>
                {/* Tab Navigation */}
                <div className="flex mb-6">
                    <button
                        className={`py-3 px-6 font-medium rounded-t-lg transition-colors ${activeTab === 'roundtrip' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                        onClick={() => setActiveTab('roundtrip')}
                    >
                        Roundtrip
                    </button>
                    <button
                        className={`py-3 px-6 font-medium rounded-t-lg transition-colors ${activeTab === 'oneway' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
                        onClick={() => setActiveTab('oneway')}
                    >
                        One Way
                    </button>
                </div>

                {/* Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    {/* From - Changed to input with autocomplete */}
                    <div className="relative">
                        <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">From</label>
                        <div className="relative">
                            <input
                                id="from"
                                type="text"
                                placeholder="City or Airport"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                value={originQuery}
                                onChange={(e) => setOriginQuery(e.target.value)}
                                onFocus={() => setShowOriginSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowOriginSuggestions(false), 200)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            {showOriginSuggestions && originQuery && (
                                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 max-h-60 overflow-auto">
                                    {airportData
                                        .filter(airport =>
                                            airport.name.toLowerCase().includes(originQuery.toLowerCase()) ||
                                            airport.code.toLowerCase().includes(originQuery.toLowerCase()) ||
                                            airport.city.toLowerCase().includes(originQuery.toLowerCase())
                                        )
                                        .slice(0, 5)
                                        .map(airport => (
                                            <div
                                                key={airport.code}
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                                                onClick={() => {
                                                    setOriginQuery(`${airport.city} (${airport.code})`);
                                                    setShowOriginSuggestions(false);
                                                }}
                                            >
                                                <div className="font-medium">{airport.city} ({airport.code})</div>
                                                <div className="text-sm text-gray-500">{airport.name}</div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* To - Changed to input with autocomplete */}
                    <div className="relative">
                        <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">To</label>
                        <div className="relative">
                            <input
                                id="to"
                                type="text"
                                placeholder="City or Airport"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                value={destinationQuery}
                                onChange={(e) => setDestinationQuery(e.target.value)}
                                onFocus={() => setShowDestinationSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowDestinationSuggestions(false), 200)}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            {showDestinationSuggestions && destinationQuery && (
                                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg py-1 max-h-60 overflow-auto">
                                    {airportData
                                        .filter(airport =>
                                            airport.name.toLowerCase().includes(destinationQuery.toLowerCase()) ||
                                            airport.code.toLowerCase().includes(destinationQuery.toLowerCase()) ||
                                            airport.city.toLowerCase().includes(destinationQuery.toLowerCase())
                                        )
                                        .slice(0, 5)
                                        .map(airport => (
                                            <div
                                                key={airport.code}
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                                                onClick={() => {
                                                    setDestinationQuery(`${airport.city} (${airport.code})`);
                                                    setShowDestinationSuggestions(false);
                                                }}
                                            >
                                                <div className="font-medium">{airport.city} ({airport.code})</div>
                                                <div className="text-sm text-gray-500">{airport.name}</div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Rest of your date pickers and other inputs remain the same */}
                    {/* Departure Date */}
                    <div className="relative">
                        <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                        <div className="relative">
                            <input
                                id="departure"
                                type="date"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                min={todayDate}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiCalendar className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Conditional Return Date or Travelers/Class section remains the same */}
                    {/* Return Date - only for roundtrip */}
                    {activeTab === 'roundtrip' && (
                        <div className="relative">
                            <label htmlFor="return" className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                            <div className="relative">
                                <input
                                    id="return"
                                    type="date"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    min={departureDate || todayDate}
                                    disabled={!departureDate}
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiCalendar className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Travelers and Cabin Class - only for oneway */}

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travelers & Class</label>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative">
                                <select
                                    value={travelers}
                                    onChange={(e) => setTravelers(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
                                    <option value="1">1 traveler</option>
                                    <option value="2">2 travelers</option>
                                    <option value="3">3 travelers</option>
                                    <option value="4">4 travelers</option>
                                </select>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiUsers className="h-5 w-5 text-gray-400" />
                                </div>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <FiChevronDown className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    value={cabinClass}
                                    onChange={(e) => setCabinClass(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
                                    <option value="economy">Economy</option>
                                    <option value="premium">Premium</option>
                                    <option value="business">Business</option>
                                    <option value="first">First</option>
                                </select>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiChevronDown className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Search Button */}
                <div className="mt-4">
                    <a
                        href="tel:+1 (844) 954-5425"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                    >
                        Search Flights
                        <FiArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FlightSearchSection;