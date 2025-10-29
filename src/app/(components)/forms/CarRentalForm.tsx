"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useForm, Controller, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaDollarSign, FaCar } from "react-icons/fa";
import InputField from "../common/InputField";
import DatePicker from "../common/DatePicker";
import Button from "../common/Button";
import { carRentalSchema, CarRentalFormValues, TIME_SLOTS } from "../../(types)/CarRentalSchema";
import TimeSelect from "../common/TimeSelect";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Enhanced BundleOptions
const BundleOptions = ({ control }: { control: UseFormReturn<CarRentalFormValues>['control'] }) => (
  <div
    className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 rounded-2xl space-y-4 sm:space-y-0 sm:space-x-6 h-full border-2 border-emerald-200 transition-all duration-300 hover:shadow-md bg-emerald-50/30 backdrop-blur-sm"
  >
    <div className="flex items-center space-x-3 min-w-max">
      <div className="p-2 bg-emerald-100 rounded-lg">
        <FaDollarSign className="text-emerald-600 text-lg" />
      </div>
      <span className="text-base font-bold text-gray-800 whitespace-nowrap">Bundle & Save</span>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Controller
        name="addHotel"
        control={control}
        render={({ field }) => (
          <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-all duration-200 hover:opacity-80">
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              value={field.value?.toString()}
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
          <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-all duration-200 hover:opacity-80">
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              value={field.value?.toString()}
              className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
            />
            <span className="ml-3">Add a flight</span>
          </label>
        )}
      />
    </div>
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
    formState: { errors, isSubmitting },
    trigger
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
    mode: "onChange"
  });

  const isDropoffSame = watch("isDropoffSame");
  const pickupLocation = watch("pickupLocation");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!query) return;
    const timeout = setTimeout(() => {
      fetchLocations(query);
    }, 400); // debounce 400ms

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (!query) {
      setResults([]);
    } 
  }, [query]);

  console.log("result =>", results);

  const fetchLocations = async (term: string) => {
    setLoading(true);
    const res = await fetch(`/api/locations?search=${term}`);
    const data = await res.json();
    console.log(data);
    setResults(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    if (isDropoffSame && pickupLocation) {
      setValue("dropoffLocation", pickupLocation);
      trigger("dropoffLocation");
    } else if (isDropoffSame) {
      setValue("dropoffLocation", "");
    }
  }, [isDropoffSame, pickupLocation, setValue, trigger]);

  const onSubmit = async (data: CarRentalFormValues) => {
    if (data.isDropoffSame) {
      data.dropoffLocation = data.pickupLocation;
    }
    await onFormSubmit(data);
  };

  // Enhanced responsive input style props
  const inputStyleProps = {
    variant: "priceline" as const,
    size: "md" as const,
    labelClassName: "text-sm font-semibold text-gray-700 mb-2",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">

      {/* Enhanced Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Pick-up Location - Full Width */}
          <div className="col-span-1 relative z-50">
            {/* <InputField
              // label="Pick-up Location"
              placeholder="City, Airport or Address"
              icon={<FaMapMarkerAlt />}
              {...register("pickupLocation")}
              error={errors.pickupLocation?.message}
              required
              {...inputStyleProps}
            /> */}
            <input
              type="text"
              placeholder="Enter city or airport..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
            {loading && <p className="absolute top-full left-0 bg-white p-2">Loading...</p>}
            {results?.length > 0 && (
              <ul className="absolute top-full left-0 bg-white border w-full rounded-xl mt-1 shadow-lg scrollable max-h-60 overflow-y-auto">
                {results?.map((place) => (
                  <li
                    key={place.id}
                    onClick={() => onSelect(place)}
                    className="p-3 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
                  >
                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="font-medium">{place.name}</p>
                      <p className="text-xs text-gray-500">{place.address}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Drop-off Location - Full Width with Conditional Rendering */}
          <div className={clsx(
            "col-span-1 transition-all duration-300 overflow-hidden",
            isDropoffSame ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
          )}>
            {!isDropoffSame && (
              <InputField
                // label="Drop-off Location"
                placeholder="City, Airport or Address"
                icon={<FaMapMarkerAlt />}
                {...register("dropoffLocation")}
                error={errors.dropoffLocation?.message}
                required
                {...inputStyleProps}
              />
            )}
          </div>
        </div>


        {/* Pick-up Date & Time Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {/* Pick-up Date */}
          <div className="col-span-1">
            <Controller
              name="pickupDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  // label="Pick-up Date"
                  placeholder="Pick-up Date"
                  // icon={<FaCalendarAlt className="text-gray-600" />}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.pickupDate?.message}
                  required
                  {...inputStyleProps}
                />
              )}
            />
          </div>

          {/* Pick-up Time */}
          <div className="">
            <Controller
              name="pickupTime"
              control={control}
              render={({ field }) => (
                <TimeSelect
                  label="Pick-up Time"
                  name="pickupTime"
                  // icon={<FaClock />}
                  options={TIME_SLOTS}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.pickupTime}
                  required
                />
              )}
            />
          </div>

          {/* Drop-off Date */}
          <div className="col-span-1">
            <Controller
              name="dropoffDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  // label="Drop-off Date"
                  placeholder="Drop-off Date"
                  // icon={<FaCalendarAlt className="text-gray-600" />}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.dropoffDate?.message}
                  required
                  {...inputStyleProps}
                />
              )}
            />
          </div>

          {/* Drop-off Time */}
          <div className="col-span-1">
            <Controller
              name="dropoffTime"
              control={control}
              render={({ field }) => (
                <TimeSelect
                  label="Drop-off Time"
                  name="dropoffTime"
                  // icon={<FaClock />}
                  options={TIME_SLOTS}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  error={errors.dropoffTime}
                  required
                />
              )}
            />
          </div>
        </div>



        {/* Bundle & Save Options */}
        <div className="col-span-1">
          <BundleOptions control={control} />
        </div>

        {/* Enhanced Submit Button */}
        <Link href="/search/cars" className="w-full">
          <div className="col-span-1">
            <Button
              label={isSubmitting ? "Searching..." : "Find Your Perfect Car"}
              type="submit"
              disabled={isSubmitting}
              iconLeft={<FaCar className="text-white" />}
              className="w-full h-14 font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                borderRadius: '16px',
                border: '2px solid transparent',
                backgroundClip: 'padding-box'
              }}
            />

          </div>
        </Link>
      </div>
    </form>
  );
};