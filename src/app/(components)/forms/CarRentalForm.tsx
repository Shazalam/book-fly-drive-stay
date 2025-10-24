"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import { useForm, Controller, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign, FaCar } from "react-icons/fa";
import InputField from "../common/InputField";
import DatePicker from "../common/DatePicker";
import Button from "../common/Button";
import { carRentalSchema, CarRentalFormValues, TIME_SLOTS } from "../../(types)/CarRentalSchema";
import TimeSelect from "../common/TimeSelect";


// Enhanced BundleOptions
const BundleOptions = ({ control }: { control: UseFormReturn<CarRentalFormValues>['control'] }) => (
  <div
    className="flex items-center p-4 rounded-2xl space-x-6 h-full border-2 border-emerald-200 transition-all duration-300 hover:shadow-md"
    style={{
      backgroundColor: 'rgba(209, 250, 229, 0.3)',
      backdropFilter: 'blur(8px)'
    }}
  >
    <div className="flex items-center space-x-3 min-w-max">
      <div className="p-2 bg-emerald-100 rounded-lg">
        <FaDollarSign className="text-emerald-600 text-lg" />
      </div>
      <span className="text-base font-bold text-gray-800 whitespace-nowrap">Bundle & Save</span>
    </div>

    <Controller
      name="addHotel"
      control={control}
      render={({ field }) => (
        <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-opacity duration-200 hover:opacity-80">
          <input
            type="checkbox"
            {...field}
            checked={field.value}
            className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
          />
          <span className="ml-3">Add a hotel</span>
        </label>
      )}
    />
    <Controller
      name="addFlight"
      control={control}
      render={({ field }) => (
        <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-opacity duration-200 hover:opacity-80">
          <input
            type="checkbox"
            {...field}
            checked={field.value}
            className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
          />
          <span className="ml-3">Add a flight</span>
        </label>
      )}
    />
  </div>
);

interface CoreRentalFormProps {
  onFormSubmit: (data: CarRentalFormValues) => void;
  isMobile?: boolean;
}

export const CoreRentalForm: React.FC<CoreRentalFormProps> = ({ onFormSubmit, isMobile = false }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<CarRentalFormValues>({
    resolver: zodResolver(carRentalSchema),
    defaultValues: {
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: "",
      pickupTime: TIME_SLOTS[2],
      dropoffDate: "",
      dropoffTime: TIME_SLOTS[2],
      isDropoffSame: false,
      addHotel: false,
      addFlight: false,
    },
  });

  const isDropoffSame = watch("isDropoffSame");

  useEffect(() => {
    if (isDropoffSame) {
      setValue("dropoffLocation", watch("pickupLocation"));
    } else {
      setValue("dropoffLocation", "");
    }
  }, [isDropoffSame, watch, setValue]);

  const onSubmit = (data: CarRentalFormValues) => {
    if (data.isDropoffSame) {
      data.dropoffLocation = data.pickupLocation;
    }
    onFormSubmit(data);
  };

  // Enhanced input style props
  const inputStyleProps = {
    variant: "priceline" as const,
    size: "md" as const,
    labelClassName: "text-sm font-semibold text-gray-700 mb-2",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Enhanced Checkbox */}
      <div className="mb-6">
        <Controller
          name="isDropoffSame"
          control={control}
          render={({ field }) => (
            <label className="flex items-center text-gray-800 text-base font-semibold cursor-pointer group">
              <div className={clsx(
                "w-5 h-5 border-2 rounded mr-3 flex items-center justify-center transition-all duration-200",
                field.value
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white border-gray-300 group-hover:border-blue-500"
              )}>
                {field.value && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <input type="checkbox" {...field} className="hidden" />
              <span className="transition-colors duration-200 group-hover:text-blue-700">
                Drop-off location is the same
              </span>
            </label>
          )}
        />
      </div>

      {/* Enhanced Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pick-up Location */}
        <div className="lg:col-span-2">
          <InputField
            // label="Pick-up Location"
            placeholder="City, Airport or Address"
            icon={<FaMapMarkerAlt className="text-blue-600" />}
            {...register("pickupLocation")}
            error={errors.pickupLocation?.message}
            {...inputStyleProps}
          />
        </div>


        {/* Drop-off Location */}
        {
          !isDropoffSame && (
            <div className={`lg:col-span-2 transition-all duration-300`}>
              <InputField
                // label="Drop-off Location"
                placeholder="City, Airport or Address"
                icon={<FaMapMarkerAlt className="text-blue-600" />}
                {...register("dropoffLocation")}
                error={errors.dropoffLocation?.message}
                {...inputStyleProps}
              />
            </div>
          )
        }


        {/* Pick-up Date */}
        <div>
          <DatePicker
            // label="Pick-up Date"
            icon={<FaCalendarAlt className="text-gray-600" />}
            {...register("pickupDate")}
            error={errors.pickupDate?.message}
            {...inputStyleProps}
          />
        </div>

        {/* Pick-up Time */}
        <div>
          <TimeSelect
            label="Pick-up Time"
            name="pickupTime"
            icon={<FaClock className="text-gray-600" />}
            options={TIME_SLOTS}
            register={register}
            error={errors.pickupTime}
          />
        </div>

        {/* Drop-off Date */}
        <div>
          <DatePicker
            // label="Drop-off Date"
            icon={<FaCalendarAlt className="text-gray-600" />}
            {...register("dropoffDate")}
            error={errors.dropoffDate?.message}
            {...inputStyleProps}
          />
        </div>

        {/* Drop-off Time */}
        <div>
          <TimeSelect
            label="Drop-off Time"
            name="dropoffTime"
            icon={<FaClock className="text-gray-600" />}
            options={TIME_SLOTS}
            register={register}
            error={errors.dropoffTime}
          />
        </div>

        {/* Bundle & Save Options */}
        <div className="md:col-span-2">
          <BundleOptions control={control} />
        </div>

        {/* Enhanced Submit Button */}
        <div className="md:col-span-2">
          <Button
            label="Find Your Perfect Car"
            type="submit"
            iconLeft={<FaCar className="text-white" />}
            className="w-full h-14 font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              borderRadius: '16px',
              border: '2px solid transparent',
              backgroundClip: 'padding-box'
            }}
          />
        </div>

        {/* Enhanced Footer Note */}
        {/* <div className="lg:col-span-4 text-center mt-4">
          <p className="text-sm text-gray-600 font-medium flex items-center justify-center">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Book with free cancellation for maximum flexibility
          </p>
        </div> */}
      </div>
    </form>
  );
};