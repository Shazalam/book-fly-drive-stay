'use client';

import { useState } from 'react';
import { PhoneIcon, UserIcon, EnvelopeIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';

export default function CallbackRequest() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', country: '' });

        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 mb-4 shadow-inner">
                        <PhoneIcon className="h-10 w-10 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        Request a Callback
                    </h2>
                    <p className="text-gray-600">{`Fill out the form and we'll call you back within 24 hours`}</p>
                </div>

                {isSuccess ? (
                    <div className="p-4 mb-6 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-700 text-center shadow-sm">
                        <h3 className="font-medium text-lg mb-1">Thank you!</h3>
                        <p>{`We'll call you back soon at ${formData.phone}`}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-5">
                            {/* Name Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <UserIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Full Name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Email Address"
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Country Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <GlobeAmericasIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-200 focus:border-blue-500 appearance-none transition-all duration-200"
                                    placeholder="Enter Country"

                                />
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="consent-checkbox"
                                    name="consent-checkbox"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3">
                                <label htmlFor="consent-checkbox" className="text-sm text-gray-700">
                                    I agree to receive communications from Book-Fly-Drive-Stay
                                </label>

                                <p className="text-xs text-gray-500 mt-1">
                                    We value your privacy. Your mobile phone number and any opt-in information collected through our platform will never be sold or shared with third-party companies. We use this information solely to provide service updates and respond to your inquiries </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    By submitting this form, you consent to our Terms of Service and Privacy Policy
                                </p>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${isSubmitting ? 'opacity-80' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                'Request Callback Now'
                            )}
                        </button>
                    </form>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 text-center">
                        By submitting your number, you agree to receive account updates and service-related SMS messages.
                        Message frequency varies. Message & data rates may apply.
                        <span className="block mt-1">
                            Text STOP to opt-out or HELP for support.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}