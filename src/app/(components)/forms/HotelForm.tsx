"use client";

import React, { useState, useCallback } from "react";
import { useForm, Controller, Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSearch, FaCalendarAlt, FaUsers, FaDollarSign } from "react-icons/fa";
import Button from "../common/Button";
import { GuestRoomPopover } from "../hotels/GuestRoomPopover";
import { hotelSchema, HotelFormValues, GuestRoomDetails } from "../../(types)/HotelSchema";
import InputField from "../common/InputField";

interface CustomFieldProps {
  icon?: React.ReactNode;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hasError?: boolean;
}

// Helper to format the guest summary
const formatGuestSummary = (details: GuestRoomDetails) => {
  return `${details.adults} Adults, ${details.rooms} Rooms`;
};

const HotelForm = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

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
      checkIn: "10/23/2025",
      checkOut: "10/24/2025",
      rooms: 1,
      adults: 2,
      children: 0,
      addCar: false,
      addFlight: false,
    },
  });

  // Watch values for the guest summary display
  // Watch values for the guest summary display - convert to object
  const guestDetails = watch(['rooms', 'adults', 'children']);
  const guestDetailsObject: GuestRoomDetails = {
    rooms: guestDetails[0],
    adults: guestDetails[1],
    children: guestDetails[2],
  };

  // --- Responsive Logic ---
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Handlers ---
  const onSubmit = (data: HotelFormValues) => {
    alert(`Searching hotels in ${data.destination} for ${data.adults} adults in ${data.rooms} rooms.`);
    reset();
  };

  const handleGuestApply = useCallback((details: GuestRoomDetails) => {
    setValue('rooms', details.rooms);
    setValue('adults', details.adults);
    setValue('children', details.children);
  }, [setValue]);

  // --- Render Components ---

  // Custom Field Component
  const CustomField = ({ icon, label, children, className, onClick, hasError }: CustomFieldProps) => (
    <div
      className={`flex items-center bg-white border border-gray-200 rounded-lg p-3 h-full ${className} ${hasError ? 'border-error-red' : ''}`}
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

  const BundleOptions = ({ control }: { control: Control<HotelFormValues> }) => (
    <div
      className="flex items-center p-4 rounded-xl space-x-4 h-full min-h-[56px]"
      style={{
        backgroundColor: 'var(--success-emerald, #10b981)',
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
            <input
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              name={field.name}
              className="h-4 w-4 rounded text-white bg-transparent border-white"
              style={{ backgroundColor: 'transparent' }}
            />
            <span className="ml-2">Add a car</span>
          </label>
        )}
      />
      <Controller
        name="addFlight"
        control={control}
        render={({ field }) => (
          <label className="flex items-center text-sm font-medium text-white cursor-pointer whitespace-nowrap">
            <input
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              name={field.name}
              className="h-4 w-4 rounded text-white bg-transparent border-white"
              style={{ backgroundColor: 'transparent' }}
            />
            <span className="ml-2">Add a flight</span>
          </label>
        )}
      />
    </div>
  );

  return (
    <div className="max-w-6xl md:mt-5 relative z-10 p-4 md:p-0 bg-amber-600">
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
                <p className="text-base font-semibold text-gray-800">{watch('checkIn')} – {watch('checkOut')}</p>
              </CustomField>
            </div>

            {/* 3. Guests/Rooms Popover Trigger */}
            {/* 3. Guests/Rooms Popover Trigger */}
            <div className="md:col-span-1 relative">
              <CustomField
                icon={<FaUsers />}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsPopoverOpen(true)}
              >
                <p className="text-base font-semibold text-gray-800">
                  {formatGuestSummary(guestDetailsObject)}
                </p>
              </CustomField>

              <GuestRoomPopover
                initialValues={guestDetailsObject}
                onApply={handleGuestApply}
                isOpen={isPopoverOpen}
                setIsOpen={setIsPopoverOpen}
                isMobile={isMobileView}
              />
            </div>
            {/* 4. Bundle & Save Options */}
            <div className="md:col-span-2 mt-2">
              <BundleOptions control={control} />
            </div>

            {/* 5. Find Your Hotel Button */}
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