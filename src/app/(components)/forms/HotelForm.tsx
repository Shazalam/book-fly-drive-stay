// components/forms/HotelForm.tsx

"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSearch, FaCalendarAlt, FaUsers, FaDollarSign } from "react-icons/fa";
import Button from "../common/Button"; // Assume this exists
import { GuestRoomPopover } from "../hotels/GuestRoomPopover"; // New component
import { hotelSchema, HotelFormValues, GuestRoomDetails } from "../../(types)/HotelSchema"; // New schema
import InputField from "../common/InputField";
// NOTE: DatePicker is omitted to simplify the visual layout, using a text input or a custom field styled like the image.

// Helper to format the guest summary
const formatGuestSummary = (details: GuestRoomDetails) => {
  const parts = [];
  if (details.adults > 0) parts.push(`${details.adults} Adult${details.adults > 1 ? 's' : ''}`);
  if (details.children > 0) parts.push(`${details.children} Child${details.children > 1 ? 'ren' : ''}`);
  parts.push(`${details.rooms} Room${details.rooms > 1 ? 's' : ''}`);

  return `${details.adults} Adults, ${details.rooms} Rooms`; // Match image format
};

const HotelForm = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // State for responsive detection

  // --- Form Setup ---
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<HotelFormValues>({
    resolver: zodResolver(hotelSchema),
    defaultValues: {
      searchType: "single",
      destination: "",
      checkIn: "10/23/2025", // Hardcoded date to match image
      checkOut: "10/24/2025", // Hardcoded date to match image
      rooms: 1,
      adults: 2,
      children: 0,
      addCar: false,
      addFlight: false,
    },
  });

  // Watch values for the guest summary display
  const guestDetails = watch(['rooms', 'adults', 'children']);

  // --- Responsive Logic (Simple breakpoint check) ---
  React.useEffect(() => {
    const checkMobile = () => {
      // Assuming 'md' breakpoint is 768px in Tailwind config
      setIsMobileView(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Handlers ---
  const onSubmit = (data: HotelFormValues) => {
    console.log("🏨 Hotel Booking Data =>", data);
    alert(`Searching hotels in ${data.destination} for ${data.adults} adults in ${data.rooms} rooms.`);
    reset();
  };

  const handleGuestApply = useCallback((details: GuestRoomDetails) => {
    setValue('rooms', details.rooms);
    setValue('adults', details.adults);
    setValue('children', details.children);
  }, [setValue]);

  // --- Render Components ---

  // Custom Field Component to match the border/icon styling of the image
  const CustomField = ({ icon, label, children, className, onClick, hasError }: any) => (
    <div className={`flex items-center bg-white border border-gray-200 rounded-lg p-3 h-full ${className} ${hasError ? 'border-error-red' : ''}`}
      style={{ borderRadius: 'var(--radius-lg)' }}
      onClick={onClick}
    >
      {icon && <span className="text-gray-500 mr-3">{icon}</span>}
      <div className="flex-grow">
        {label && <p className="text-xs text-gray-500 leading-none">{label}</p>}
        {children}
      </div>
    </div>
  );

  const BundleOptions = ({ control }: { control: any }) => (
    <div
      className="flex items-center p-4 rounded-xl space-x-4 h-full min-h-[56px]"
      style={{
        backgroundColor: 'var(--success-emerald, #10b981)', // Use base color
        borderRadius: 'var(--radius-lg)'
      }}
    >
      <div className="flex items-center space-x-2 min-w-max text-white">
        <FaDollarSign />
        <span className="text-sm font-bold whitespace-nowrap">Bundle + Save</span>
      </div>

      <Controller
        name="addCar"
        control={control}
        render={({ field }) => (
          <label className="flex items-center text-sm font-medium text-white cursor-pointer whitespace-nowrap">
            <input type="checkbox" {...field} checked={field.value} className="h-4 w-4 rounded text-white bg-transparent border-white" style={{ backgroundColor: 'transparent' }} />
            <span className="ml-2">Add a car</span>
          </label>
        )}
      />
      <Controller
        name="addFlight"
        control={control}
        render={({ field }) => (
          <label className="flex items-center text-sm font-medium text-white cursor-pointer whitespace-nowrap">
            <input type="checkbox" {...field} checked={field.value} className="h-4 w-4 rounded text-white bg-transparent border-white" style={{ backgroundColor: 'transparent' }} />
            <span className="ml-2">Add a flight</span>
          </label>
        )}
      />
    </div>
  );

  return (
    <div className="max-w-6xl md:mt-5 relative z-10 p-4 md:p-0 bg-amber-600">

      {/* Header Text - Styled for the image's vibrant look */}
      {/* <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-1 text-white">
        Save big on your next hotel
      </h1>
      <p className="text-xl text-gray-100 mb-6">
        Great deals on hotels, resorts and private homes
      </p> */}

      {/* Main Search Block (White Card) */}

      <div className="bg-blue-800 p-6" style={{ borderRadius: 'var(--radius-xl)' }}>

        {/* Search Type Radio Buttons */}
        <div className="flex space-x-4 mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="single"
              {...register("searchType")}
              className="h-4 w-4 text-primary-blue border-gray-300 focus:ring-primary-blue"
              checked={watch('searchType') === 'single'}
            />
            <span className="ml-2 text-gray-800 font-semibold">Single Hotel</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              value="multi"
              {...register("searchType")}
              className="h-4 w-4 text-primary-blue border-gray-300 focus:ring-primary-blue"
              checked={watch('searchType') === 'multi'}
            />
            <span className="ml-2 text-gray-800 font-semibold">Multi Hotel</span>
          </label>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

            {/* 1. Destination Input */}
            <div className="md:col-span-1">
              <CustomField icon={<FaSearch />} hasError={!!errors.destination}>
                <InputField
                  placeholder="Where to?"
                  className="!p-0 !h-auto !border-none !shadow-none !bg-transparent"
                  {...register("destination")}
                />
              </CustomField>
              {errors.destination && (
                <p className="text-error-red text-xs mt-1 font-medium" style={{ color: 'var(--error-red)' }}>
                  {errors.destination.message}
                </p>
              )}
            </div>

            {/* 2. Check-in / Check-out Dates */}
            <div className="md:col-span-2">
              <CustomField icon={<FaCalendarAlt />} label="Check-in - Check-out">
                {/* Simplified date display to match the image's single field */}
                <p className="text-base font-semibold text-gray-800">{watch('checkIn')} – {watch('checkOut')}</p>
                {/* Note: In a real app, this would trigger a date picker modal */}
              </CustomField>
            </div>

            {/* 3. Guests/Rooms Popover Trigger */}
            <div className="md:col-span-1 relative">
              <CustomField
                icon={<FaUsers />}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsPopoverOpen(true)}
              >
                <p className="text-base font-semibold text-gray-800">
                  {formatGuestSummary(guestDetails as GuestRoomDetails)}
                </p>
              </CustomField>

              {/* GuestRoom Popover/Drawer */}
              <GuestRoomPopover
                initialValues={guestDetails as GuestRoomDetails}
                onApply={handleGuestApply}
                isOpen={isPopoverOpen}
                setIsOpen={setIsPopoverOpen}
                isMobile={isMobileView}
              />
            </div>

            {/* 4. Bundle & Save Options (spans two columns) */}
            <div className="md:col-span-2 mt-2">
              <BundleOptions control={control} />
            </div>

            {/* 5. Find Your Hotel Button (spans two columns) */}
            <div className="md:col-span-2 mt-2">
              <Button
                label="Find Your Hotel"
                type="submit"
                className="w-full !py-3 font-semibold !text-lg"
                style={{ backgroundColor: 'var(--primary-blue)', borderRadius: 'var(--radius-lg)' }}
              />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelForm;