"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FiMail, FiFileText, FiBriefcase } from "react-icons/fi";

import Link from "next/link";
import Button from "@/app/(components)/common/Button";
import InputField from "@/app/(components)/common/InputField";

interface FormData {
  email: string;
  itineraryNumber: string;
}

export default function FindMyTripPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    itineraryNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your find trip logic here
    console.log('Find trip data:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiBriefcase className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Find My Trip</h2>
        <p className="text-gray-600">Retrieve your booking details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Email Address"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          icon={<FiMail className="w-4 h-4" />}
          placeholder="Enter your email address"
          variant="priceline"
          size="md"
        />

        <InputField
          label="Itinerary Number"
          name="itineraryNumber"
          type="text"
          required
          value={formData.itineraryNumber}
          onChange={handleInputChange}
          icon={<FiFileText className="w-4 h-4" />}
          placeholder="Enter itinerary number"
          variant="priceline"
          size="md"
        />

        <Button
          type="submit"
          loading={isSubmitting}
          variant="primary"
          fullWidth
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
          }}
        >
          {isSubmitting ? "Finding..." : "Find My Trip"}
        </Button>
      </form>

      <div className="p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700 text-center">
          <strong>AVIS Code: PREMIUMRIDE</strong> - Use this code for special offers
        </p>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Need to{" "}
          <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
            sign in
          </Link>{" "}
          or{" "}
          <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
            create an account
          </Link>
          ?
        </p>
      </div>
    </div>
  );
}