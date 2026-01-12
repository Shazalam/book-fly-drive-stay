// "use client";

// import React, { useEffect, useState } from "react";
// import clsx from "clsx";
// import {
//   useForm,
//   Controller,
//   UseFormReturn,
//   Resolver,
//   FieldValues,
// } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { FaMapMarkerAlt, FaDollarSign, FaCar } from "react-icons/fa";
// import InputField from "../common/InputField";
// import DatePicker from "../common/DatePicker";
// import Button from "../common/Button";
// import {
//   carRentalSchema,
//   CarRentalFormValues,
//   TIME_SLOTS,
// } from "../../(types)/CarRentalSchema";
// import TimeSelect from "../common/TimeSelect";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// // --- Small typed shape for location results returned by your API
// type PlaceResult = {
//   id: string;
//   name: string;
//   address?: string;
// };

// // Enhanced BundleOptions
// const BundleOptions = ({
//   control,
// }: {
//   control: UseFormReturn<CarRentalFormValues>["control"];
// }) => (
//   <div
//     className="flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 rounded-2xl space-y-4 sm:space-y-0 sm:space-x-6 h-full border-2 border-emerald-200 transition-all duration-300 hover:shadow-md bg-emerald-50/30 backdrop-blur-sm"
//   >
//     <div className="flex items-center space-x-3 min-w-max">
//       <div className="p-2 bg-emerald-100 rounded-lg">
//         <FaDollarSign className="text-emerald-600 text-lg" />
//       </div>
//       <span className="text-base font-bold text-gray-800 whitespace-nowrap">
//         Bundle & Save
//       </span>
//     </div>

//     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//       <Controller
//         name="addHotel"
//         control={control}
//         render={({ field }) => (
//           <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-all duration-200 hover:opacity-80">
//             <input
//               type="checkbox"
//               {...field}
//               checked={!!field.value}
//               // no need for value attr on checkbox; controlled by checked
//               className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
//             />
//             <span className="ml-3">Add a hotel</span>
//           </label>
//         )}
//       />
//       <Controller
//         name="addFlight"
//         control={control}
//         render={({ field }) => (
//           <label className="flex items-center text-sm font-semibold text-gray-800 cursor-pointer whitespace-nowrap transition-all duration-200 hover:opacity-80">
//             <input
//               type="checkbox"
//               {...field}
//               checked={!!field.value}
//               className="h-5 w-5 rounded border-2 border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-200 transition-colors duration-200"
//             />
//             <span className="ml-3">Add a flight</span>
//           </label>
//         )}
//       />
//     </div>
//   </div>
// );

// interface CoreRentalFormProps {
//   onFormSubmit: (data: CarRentalFormValues) => void;
//   isMobile?: boolean;
// }

// export const CoreRentalForm: React.FC<CoreRentalFormProps> = ({
//   onFormSubmit,
// }) => {
//   // Cast resolver to the exact Resolver type for our form values
//   const resolver = zodResolver(carRentalSchema) as unknown as Resolver<
//     CarRentalFormValues,
//     FieldValues
//   >;

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     control,
//     formState: { errors, isSubmitting },
//     trigger,
//   } = useForm<CarRentalFormValues>({
//     resolver,
//     defaultValues: {
//       pickupLocation: "",
//       dropoffLocation: "",
//       pickupDate: "",
//       pickupTime: TIME_SLOTS[2],
//       dropoffDate: "",
//       dropoffTime: TIME_SLOTS[2],
//       isDropoffSame: false,
//       addHotel: false,
//       addFlight: false,
//     },
//     mode: "onChange",
//   });

//   const isDropoffSame = watch("isDropoffSame");
//   const pickupLocation = watch("pickupLocation");

//   const [query, setQuery] = useState<string>("");
//   const [results, setResults] = useState<PlaceResult[]>([]);
//   const [loading, setLoading] = useState(false);

//   // debounce search
//   useEffect(() => {
//     if (!query) return;
//     const timeout = setTimeout(() => {
//       fetchLocations(query);
//     }, 400); // debounce 400ms

//     return () => clearTimeout(timeout);
//   }, [query]);

//   useEffect(() => {
//     if (!query) {
//       setResults([]);
//     }
//   }, [query]);

//   const fetchLocations = async (term: string) => {
//     setLoading(true);
//     try {
//       const res = await fetch(`/api/locations?search=${encodeURIComponent(term)}`);
//       const data = await res.json();
//       // make sure to guard if API returns unexpected shape
//       setResults(Array.isArray(data?.data) ? data.data : []);
//     } catch (err) {
//       console.error("Failed to fetch locations", err);
//       setResults([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // called when user selects a place from the dropdown
//   const onSelect = (place: PlaceResult) => {
//     setQuery(place.name);
//     // set both pickup and dropoff fields if desired; here we set pickup only
//     setValue("pickupLocation", place.name);
//     // if dropoff should also be set when checkbox is on, that logic is handled in effect below
//     setResults([]);
//     // validate pickup
//     trigger("pickupLocation");
//   };

//   useEffect(() => {
//     if (isDropoffSame && pickupLocation) {
//       setValue("dropoffLocation", pickupLocation);
//       void trigger("dropoffLocation");
//     } else if (isDropoffSame) {
//       setValue("dropoffLocation", "");
//     }
//     // we include trigger and setValue in deps to satisfy lint rules
//   }, [isDropoffSame, pickupLocation, setValue, trigger]);

//   const onSubmit = async (data: CarRentalFormValues) => {
//     // ensure dropoffLocation sync if needed
//     if (data.isDropoffSame) {
//       data.dropoffLocation = data.pickupLocation;
//     }
//     await onFormSubmit(data);
//   };

//   // Enhanced responsive input style props
//   const inputStyleProps = {
//     variant: "priceline" as const,
//     size: "md" as const,
//     labelClassName: "text-sm font-semibold text-gray-700 mb-2",
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//       <div className="grid grid-cols-1 gap-4 sm:gap-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//           {/* Pick-up Location - Full Width */}
//           <div className="col-span-1 relative z-50">
//             <input
//               type="text"
//               placeholder="Enter city or airport..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="w-full rounded-xl border p-3"
//             />
//             {loading && (
//               <p className="absolute top-full left-0 bg-white p-2">Loading...</p>
//             )}
//             {results?.length > 0 && (
//               <ul className="absolute top-full left-0 bg-white border w-full rounded-xl mt-1 shadow-lg max-h-60 overflow-y-auto z-40">
//                 {results.map((place) => (
//                   <li
//                     key={place.id}
//                     onClick={() => onSelect(place)}
//                     className="p-3 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
//                   >
//                     <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
//                     <div>
//                       <p className="font-medium">{place.name}</p>
//                       {place.address && (
//                         <p className="text-xs text-gray-500">{place.address}</p>
//                       )}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Drop-off Location - Full Width with Conditional Rendering */}
//           <div
//             className={clsx(
//               "col-span-1 transition-all duration-300 overflow-hidden",
//               isDropoffSame ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
//             )}
//           >
//             {!isDropoffSame && (
//               <InputField
//                 // label="Drop-off Location"
//                 placeholder="City, Airport or Address"
//                 icon={<FaMapMarkerAlt />}
//                 {...register("dropoffLocation")}
//                 error={errors.dropoffLocation?.message as string | undefined}
//                 required
//                 {...inputStyleProps}
//               />
//             )}
//           </div>
//         </div>

//         {/* Pick-up Date & Time Row */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//           {/* Pick-up Date */}
//           <div className="col-span-1">
//             <Controller
//               name="pickupDate"
//               control={control}
//               render={({ field }) => (
//                 <DatePicker
//                   placeholder="Pick-up Date"
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   error={errors.pickupDate?.message as string | undefined}
//                   required
//                   {...inputStyleProps}
//                 />
//               )}
//             />
//           </div>

//           {/* Pick-up Time */}
//           <div className="">
//             <Controller
//               name="pickupTime"
//               control={control}
//               render={({ field }) => (
//                 <TimeSelect
//                   label="Pick-up Time"
//                   name="pickupTime"
//                   options={TIME_SLOTS}
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   error={errors.pickupTime}
//                   required
//                 />
//               )}
//             />
//           </div>

//           {/* Drop-off Date */}
//           <div className="col-span-1">
//             <Controller
//               name="dropoffDate"
//               control={control}
//               render={({ field }) => (
//                 <DatePicker
//                   placeholder="Drop-off Date"
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   error={errors.dropoffDate?.message as string | undefined}
//                   required
//                   {...inputStyleProps}
//                 />
//               )}
//             />
//           </div>

//           {/* Drop-off Time */}
//           <div className="col-span-1">
//             <Controller
//               name="dropoffTime"
//               control={control}
//               render={({ field }) => (
//                 <TimeSelect
//                   label="Drop-off Time"
//                   name="dropoffTime"
//                   options={TIME_SLOTS}
//                   value={field.value}
//                   onChange={field.onChange}
//                   onBlur={field.onBlur}
//                   error={errors.dropoffTime}
//                   required
//                 />
//               )}
//             />
//           </div>
//         </div>

//         {/* Bundle & Save Options */}
//         <div className="col-span-1">
//           <BundleOptions control={control} />
//         </div>

//         {/* Submit Button */}
//         <div className="col-span-1">
//           <Button
//             label={isSubmitting ? "Searching..." : "Find Your Perfect Car"}
//             type="submit"
//             disabled={isSubmitting}
//             iconLeft={<FaCar className="text-white" />}
//             className="w-full h-14 font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             style={{
//               background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
//               borderRadius: "16px",
//               border: "2px solid transparent",
//               backgroundClip: "padding-box",
//             }}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// export default CoreRentalForm;



"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  carRentalSchema,
  CarRentalFormValues,
  TIME_SLOTS,
} from "../../(types)/CarRentalSchema";
import TimeSelect from "../common/TimeSelect";
import InputField from "../common/InputField";
import Button from "../common/Button";
import { FaLocationDot } from "react-icons/fa6";
import { useDebounce } from "@/app/(hooks)/useDebounce";
import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";
import { clearLocationsData, fetchLocations, resetLocationsUi, selectLocationItems, selectLocationsError, selectLocationsLoading } from "@/app/(store)/slices/locationSlice";

interface CarRentalFormProps {
  onSubmit: (data: CarRentalFormValues) => void;
  isMobile?: boolean;
}

const CarRentalForm: React.FC<CarRentalFormProps> = ({ onSubmit, isMobile }) => {

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CarRentalFormValues>({
    resolver: zodResolver(carRentalSchema),
    defaultValues: {
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: "",
      pickupTime: TIME_SLOTS[0], // Provide actual default time
      dropoffDate: "",
      dropoffTime: TIME_SLOTS[0], // Provide actual default time
      isDropoffSame: false,
      addHotel: false,
      addFlight: false,
    },
  });

  const dispatch = useAppDispatch()
  const items = useAppSelector(selectLocationItems);
  const loading = useAppSelector(selectLocationsLoading);
  const error = useAppSelector(selectLocationsError);

  const isDropoffSame = watch("isDropoffSame");
  const pickupLocation = watch("pickupLocation");
  const dropoffLocation = watch("dropoffLocation");

  const [activeField, setActiveField] = useState<"pickup" | "dropoff" | null>(null);
  const [selectedPickup, setSelectedPickup] = useState("");
  const [selectedDropoff, setSelectedDropoff] = useState("");

  const debouncedPickup = useDebounce(pickupLocation, 400);
  const debouncedDropoff = useDebounce(dropoffLocation, 400);

  // Effect for pickup
  useEffect(() => {
    if (activeField !== "pickup") return;

    const query = debouncedPickup.trim();

    if (!query) {
      dispatch(clearLocationsData());
      dispatch(resetLocationsUi());
      return;
    }

    // Do not refetch if it's exactly the selected value
    if (query === selectedPickup) return;

    dispatch(fetchLocations(debouncedPickup));
  }, [debouncedPickup, activeField, dispatch, selectedPickup]);

  // Effect for dropoff
  useEffect(() => {
    if (activeField !== "dropoff") return;

    const query = debouncedDropoff.trim();

    if (!query) {
      dispatch(clearLocationsData());
      dispatch(resetLocationsUi());
      return;
    }

    if (query === selectedDropoff) return;

    dispatch(fetchLocations(debouncedDropoff));
  }, [debouncedDropoff, activeField, dispatch, selectedDropoff]);

  // Handle the "same as pickup" logic
  useEffect(() => {
    if (isDropoffSame && pickupLocation) {
      setValue("dropoffLocation", pickupLocation);
    }
  }, [isDropoffSame, pickupLocation, setValue]);

  const handleFormSubmit: SubmitHandler<CarRentalFormValues> = (values) => {
    onSubmit(values);
  };

  const handleSelectLocations = (name: string, field: "pickupLocation" | "dropoffLocation") => {
    setValue(field, name, { shouldValidate: true, shouldDirty: true })

    if (field === "pickupLocation") {
      setSelectedPickup(name);
    } else {
      setSelectedDropoff(name);
    }

    dispatch(clearLocationsData())
    dispatch(resetLocationsUi())

    // Close dropdown
    setActiveField(null);
  }

  const showDropdown = !!activeField && (items.length > 0 || loading || !!error);

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`
        bg-white/95 backdrop-blur
        shadow-xl rounded-2xl border border-slate-200
        p-4 sm:p-5 md:p-6
        space-y-5
        w-full
        ${isMobile ? "" : "max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto"}
      `}
    >
      {/* Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Pickup */}
        <div className="relative">
          <Controller
            name="pickupLocation"
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                label="Pick-up Location"
                placeholder="City, airport or address"
                icon={<FaLocationDot />}
                error={errors.pickupLocation}
                onFocus={() => setActiveField("pickup")}
              />
            )}
          />

          {showDropdown && activeField === "pickup" && (
            <div className="absolute left-0 right-0 mt-1 z-20 rounded-lg bg-[#130a3a] border border-white/10 shadow-xl max-h-64 overflow-y-auto">
              {loading && (
                <div className="px-3 py-2 text-xs text-slate-300">
                  Searching locations...
                </div>
              )}

              {error && !loading && (
                <div className="px-3 py-2 text-xs text-red-400">{error}</div>
              )}

              {!loading && !error && items.length > 0 && (
                <>
                  {items.map((loc) => (
                    <button
                      key={`${loc.source}-${loc.id}`}
                      type="button"
                      onClick={() =>
                        handleSelectLocations(loc.name, "pickupLocation")
                      }
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm text-slate-100 hover:bg-[#1d1246] flex flex-col"
                    >
                      <span className="font-medium">{loc.name}</span>
                      {loc.address && (
                        <span className="text-[11px] text-slate-300">
                          {loc.address}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 uppercase mt-0.5">
                        {loc.source}
                      </span>
                    </button>
                  ))}
                </>
              )}

              {!loading && !error && items.length === 0 && (
                <div className="px-3 py-2 text-xs text-slate-300">
                  No locations found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Dropoff */}
        <div className="relative">
          {!isDropoffSame && (
            <Controller
              name="dropoffLocation"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  label="Drop-off Location"
                  placeholder="City, airport or address"
                  icon={<FaLocationDot />}
                  error={errors.dropoffLocation}
                  onFocus={() => setActiveField("dropoff")}
                />
              )}
            />
          )}

          {showDropdown && !isDropoffSame && activeField === "dropoff" && (
            <div className="absolute left-0 right-0 mt-1 z-20 rounded-lg bg-[#130a3a] border border-white/10 shadow-xl max-h-64 overflow-y-auto">
              {loading && (
                <div className="px-3 py-2 text-xs text-slate-300">
                  Searching locations...
                </div>
              )}

              {error && !loading && (
                <div className="px-3 py-2 text-xs text-red-400">{error}</div>
              )}

              {!loading && !error && items.length > 0 && (
                <>
                  {items.map((loc) => (
                    <button
                      key={`${loc.source}-${loc.id}`}
                      type="button"
                      onClick={() =>
                        handleSelectLocations(loc.name, "dropoffLocation")
                      }
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm text-slate-100 hover:bg-[#1d1246] flex flex-col"
                    >
                      <span className="font-medium">{loc.name}</span>
                      {loc.address && (
                        <span className="text-[11px] text-slate-300">
                          {loc.address}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-500 uppercase mt-0.5">
                        {loc.source}
                      </span>
                    </button>
                  ))}
                </>
              )}

              {!loading && !error && items.length === 0 && (
                <div className="px-3 py-2 text-xs text-slate-300">
                  No locations found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Dates & times */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Pickup block */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="pickupDate"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="date"
                  label="Pick-up Date"
                  error={errors.pickupDate}
                />
              )}
            />

            <Controller
              name="pickupTime"
              control={control}
              render={({ field }) => (
                <TimeSelect
                  {...field}
                  label="Time"
                  placeholder="Select time"
                  options={TIME_SLOTS}
                  error={errors.pickupTime}
                />
              )}
            />
          </div>
        </div>

        {/* Dropoff block */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-3">
            <Controller
              name="dropoffDate"
              control={control}
              render={({ field }) => (
                <InputField
                  {...field}
                  type="date"
                  label="Drop-off Date"
                  error={errors.dropoffDate}
                />
              )}
            />

            <Controller
              name="dropoffTime"
              control={control}
              render={({ field }) => (
                <TimeSelect
                  {...field}
                  label="Time"
                  placeholder="Select time"
                  options={TIME_SLOTS}
                  error={errors.dropoffTime}
                />
              )}
            />
          </div>
        </div>
      </div>

      {/* Checkbox row – keep responsive */}
      <div className="flex flex-wrap gap-3 items-center text-xs sm:text-sm">
        {/* Future checkboxes go here */}
      </div>

      {/* Submit */}
      <Button type="submit" variant="primary" size="md" fullWidth
        onClick={() => {
          window.location.href = "tel:+18449545425";
        }}
        className="cursor-pointer"
      >
        Search Cars
      </Button>
    </form>
  );
};

export default CarRentalForm;
