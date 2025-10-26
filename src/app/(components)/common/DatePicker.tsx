// "use client";
// import React from "react";
// import clsx from "clsx";

// interface DatePickerProps {
//   label?: string;
//   name: string;
//   value?: string;
//   icon?: React.ReactNode;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   min?: string | number;
//   max?: string | number;
//   error?: string;
//   required?: boolean;
//   className?: string;
//   disabled?: boolean;
//   variant?: "default" | "priceline" | "modern";
//   size?: "sm" | "md" | "lg";
// }

// const DatePicker: React.FC<DatePickerProps> = ({
//   label,
//   name,
//   value,
//   icon,
//   onChange,
//   onBlur,
//   min,
//   max,
//   error,
//   required = false,
//   className = "",
//   disabled = false,
//   variant = "priceline",
//   size = "md"
// }) => {
//   // Size classes
//   const sizeClasses = {
//     sm: "h-10 text-sm",
//     md: "h-12 text-base",
//     lg: "h-14 text-lg"
//   };

//   // Variant styles
//   const variantClasses = {
//     default: clsx(
//       "border border-gray-300 bg-white rounded-lg",
//       "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
//       "transition-all duration-200",
//       error && "border-red-500 focus:border-red-500 focus:ring-red-200"
//     ),
//     priceline: clsx(
//       "border-2 border-gray-200 bg-white rounded-xl",
//       "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
//       "shadow-sm hover:shadow-md transition-all duration-300",
//       "hover:border-gray-300",
//       error && "border-red-400 focus:border-red-500 focus:ring-red-100"
//     ),
//     modern: clsx(
//       "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg",
//       "focus:border-blue-600 focus:bg-white focus:ring-0",
//       "transition-colors duration-200",
//       error && "border-red-500 focus:border-red-500"
//     )
//   };

//   // Custom date formatting for display
//   const formatDisplayDate = (dateString: string) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric', 
//       year: 'numeric' 
//     });
//   };

//   return (
//     <div className={clsx("w-full group", className)}>
//       {label && (
//         <label 
//           htmlFor={name}
//           className={clsx(
//             "block font-semibold mb-2 transition-colors duration-200",
//             error ? "text-red-600" : "text-gray-700",
//             "text-sm md:text-base"
//           )}
//         >
//           {label}
//           {required && <span className="text-red-500 ml-1">*</span>}
//         </label>
//       )}
      
//       <div className="relative">
//         {/* Custom Date Display */}
//         {value && (
//           <div className={clsx(
//             "absolute left-12 top-1/2 transform -translate-y-1/2",
//             "text-gray-900 font-medium pointer-events-none",
//             size === "sm" ? "text-sm" : "text-base",
//             disabled && "text-gray-500"
//           )}>
//             {formatDisplayDate(value)}
//           </div>
//         )}

//         {/* Hidden Native Date Input */}
//         <input
//           type="date"
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           onBlur={onBlur}
//           min={min}
//           max={max}
//           disabled={disabled}
//           className={clsx(
//             "w-full outline-none text-transparent caret-transparent", // Hide text but keep functional
//             "cursor-pointer",
//             "px-4 font-medium",
//             sizeClasses[size],
//             variantClasses[variant],
//             disabled && "opacity-50 cursor-not-allowed bg-gray-100",
//             icon && "pl-12", // Add extra padding when icon is present
//             // Custom calendar icon appearance
//             "[color-scheme:light]",
//             "relative z-10"
//           )}
//         />

//         {/* Enhanced Icon Container */}
//         {icon && (
//           <div className={clsx(
//             "absolute left-0 top-0 bottom-0 flex items-center justify-center",
//             "transition-colors duration-200",
//             size === "sm" ? "w-8" : "w-12",
//             error ? "text-red-500" : "text-gray-500",
//             disabled && "text-gray-400"
//           )}>
//             {icon}
//           </div>
//         )}

//         {/* Custom Calendar Icon on the right */}
//         <div className={clsx(
//           "absolute right-0 top-0 bottom-0 flex items-center justify-center",
//           "transition-colors duration-200",
//           size === "sm" ? "w-8" : "w-12",
//           error ? "text-red-500" : "text-gray-400",
//           disabled && "text-gray-300"
//         )}>
//           <svg 
//             className={clsx(
//               size === "sm" ? "w-4 h-4" : "w-5 h-5"
//             )} 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//         </div>

//         {/* Placeholder text when no value */}
//         {!value && (
//           <div className={clsx(
//             "absolute left-12 top-1/2 transform -translate-y-1/2",
//             "text-gray-500 pointer-events-none",
//             size === "sm" ? "text-sm" : "text-base",
//             disabled && "text-gray-400"
//           )}>
//             Select date
//           </div>
//         )}

//         {/* Focus indicator dot for priceline variant */}
//         {variant === "priceline" && (
//           <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-0 transition-opacity duration-200 group-focus-within:opacity-100">
//             <div className={clsx(
//               "w-1 h-1 rounded-full",
//               error ? "bg-red-500" : "bg-blue-600"
//             )} />
//           </div>
//         )}
//       </div>

//       {/* Error Message */}
//       {error && (
//         <p className={clsx(
//           "mt-2 text-sm font-medium flex items-center animate-fadeIn",
//           "text-red-600 transition-all duration-200"
//         )}>
//           <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//           </svg>
//           {error}
//         </p>
//       )}
//     </div>
//   );
// };

// export default DatePicker;



"use client";
import React, { useRef } from "react";
import clsx from "clsx";
import { FaCalendarAlt } from "react-icons/fa";

interface DatePickerProps {
  label?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: string | number;
  max?: string | number;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "priceline" | "modern";
  size?: "sm" | "md" | "lg";
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  min,
  max,
  error,
  required = false,
  className = "",
  disabled = false,
  variant = "priceline",
  size = "md",
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 📏 Sizes
  const sizeClasses = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg",
  };

  // 🎨 Theme and variants (same as InputField)
  const variantClasses = {
    default: clsx(
      "border border-gray-300 bg-white rounded-lg",
      "focus:border-emerald-500 focus:ring-2 focus:ring-teal-200/50",
      "transition-all duration-200",
      error && "border-red-500 focus:border-red-500 focus:ring-red-200"
    ),
    priceline: clsx(
      "border-2 border-gray-200 bg-white rounded-xl",
      "focus:border-transparent focus:ring-4 focus:ring-emerald-500/20",
      "shadow-sm hover:shadow-md transition-all duration-300",
      "hover:border-emerald-300 group",
      "focus:bg-gradient-to-r focus:from-white focus:to-emerald-50",
      error && "border-red-400 focus:border-red-500 focus:ring-red-100"
    ),
    modern: clsx(
      "border-b-2 border-gray-300 bg-gray-50 rounded-t-lg",
      "focus:border-emerald-500 focus:bg-white focus:ring-0",
      "transition-colors duration-200",
      error && "border-red-500 focus:border-red-500"
    ),
  };

  return (
    <div className={clsx("", className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            "block font-semibold mb-2 transition-colors duration-200",
            error ? "text-red-600" : "text-gray-700",
            "text-sm md:text-base"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div
        className="relative w-full cursor-pointer border-amber-400"
        onClick={() => !disabled && inputRef.current?.showPicker?.()}
      >
        {/* 📅 Left Icon */}
        <div
          className={clsx(
            "absolute left-1 top-0 bottom-0 flex items-center justify-start",
            size === "sm" ? "w-10" : "w-12"
          )}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-1.5">
            <FaCalendarAlt className="text-white w-4 h-4" />
          </div>
        </div>

        {/* 📆 Date Input */}
        <input
          ref={inputRef}
          type="date"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          min={min}
          max={max}
          disabled={disabled}
          className={clsx(
            "w-full outline-none text-gray-900 bg-transparent cursor-pointer font-medium transition-all duration-300",
            sizeClasses[size],
            variantClasses[variant],
            "pl-7.5", // ensures space for the icon even on small screens
            "sm:pl-12", // maintain spacing on all devices
            disabled && "opacity-50 cursor-not-allowed bg-gray-100"
          )}
          style={{
            accentColor: "#10b981", // Slightly match emerald-green theme
          }}
        />

        {/* 🌈 Priceline Focus Bar */}
        {variant === "priceline" && (
          <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-0 transition-all duration-300 group-focus-within:opacity-100">
            <div
              className={clsx(
                "w-12 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500",
                "shadow-lg shadow-emerald-500/25",
                error &&
                  "bg-gradient-to-r from-red-500 to-red-400 shadow-red-500/25"
              )}
            />
          </div>
        )}

        {/* 💚 Modern underline animation */}
        {variant === "modern" && (
          <div
            className={clsx(
              "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 transition-transform duration-300",
              "group-focus-within:scale-x-100",
              error && "bg-gradient-to-r from-red-500 to-red-400"
            )}
          />
        )}
      </div>

      {/* ❌ Error Message */}
      {error && (
        <p
          className={clsx(
            "mt-2 text-sm font-medium flex items-center animate-fadeIn text-red-600 transition-all duration-200"
          )}
        >
          <svg
            className="w-4 h-4 mr-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
