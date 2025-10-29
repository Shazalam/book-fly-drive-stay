// "use client";
// import React, { useState } from "react";
// import clsx from "clsx";
// import { FieldError } from "react-hook-form";

// interface TimeSelectProps {
//   label: string;
//   name: string;
//   icon?: React.ReactNode;
//   register?: any; // react-hook-form register
//   error?: FieldError;
//   options: string[];
//   placeholder?: string;
//   required?: boolean;
//   className?: string;
// }

// const TimeSelect: React.FC<TimeSelectProps> = ({
//   label,
//   name,
//   icon,
//   register,
//   error,
//   options,
//   placeholder = "Select time",
//   required = false,
//   className = "",
// }) => {
//   const [focused, setFocused] = useState(false);
//   const [selected, setSelected] = useState("");

//   return (
//     <div className={clsx("relative w-full", className)}>
//       {/* Floating Label */}
//       <label
//         htmlFor={name}
//         className={clsx(
//           "absolute left-11 text-gray-500 text-sm transition-all duration-200 pointer-events-none -top-2  bg-white px-1",
//           focused || selected
//             ? " text-blue-600"
//             : ""
//         )}
//       >
//         {label}
//         {required && <span className="text-red-500 ml-0.5">*</span>}
//       </label>

//       {/* Icon + Select */}
//       <div
//         className={clsx(
//           "flex items-center border rounded-xl bg-white w-full px-4 py-2.5 shadow-sm transition-all duration-200",
//           focused
//             ? "border-blue-500 ring-2 ring-blue-200"
//             : "border-gray-300",
//           error && "border-red-500 ring-red-100"
//         )}
//       >
//         {icon && (
//           <div className="text-gray-500 absolute left-4 pointer-events-none">
//             {icon}
//           </div>
//         )}

//         <select
//           id={name}
//           {...(register ? register(name) : {})}
//           value={selected}
//           onChange={(e) => setSelected(e.target.value)}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           className={clsx(
//             "appearance-none w-full bg-transparent outline-none text-gray-800 cursor-pointer",
//             icon ? "pl-8" : "pl-2"
//           )}
//         >
//           <option value="">{placeholder}</option>
//           {options.map((time, i) => (
//             <option key={i} value={time}>
//               {time}
//             </option>
//           ))}
//         </select>

//         {/* Dropdown Arrow */}
//         <div className="absolute right-4 text-gray-400 pointer-events-none">
//           <svg
//             className="w-4 h-4"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth={2}
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>

//       {/* Error message */}
//       {error && (
//         <p className="text-xs text-red-500 flex items-center gap-1 mt-1 ml-1">
//           <svg
//             className="w-4 h-4"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//           {error.message}
//         </p>
//       )}
//     </div>
//   );
// };

// export default TimeSelect;








"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { FieldError } from "react-hook-form";
import { FaClock } from "react-icons/fa";

interface TimeSelectProps {
  label: string;
  name: string;
  register?: any;
  error?: FieldError;
  options: string[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
}

const TimeSelect: React.FC<TimeSelectProps> = ({
  label,
  name,
  register,
  error,
  options,
  placeholder = "Select time",
  required = false,
  className = "",
  value,
  onChange,
  onBlur,
}) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInternalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    setFocused(false);
    if (onBlur) onBlur();
  };

  const hasValue = internalValue !== "";

  return (
    <div className={clsx("relative w-full group", className)}>
      {/* Floating Label */}
      <label
        htmlFor={name}
        className={clsx(
          "absolute left-4 text-gray-500 transition-all duration-200 pointer-events-none bg-white px-1 z-10",
          "text-xs sm:text-sm",
          focused || hasValue
            ? "top-0 transform -translate-y-1/2 text-blue-600 font-medium scale-90 origin-left"
            : "top-1/2 transform -translate-y-1/2"
        )}
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>

      {/* Select Wrapper */}
      <div
        className={clsx(
          "flex items-center border-2 rounded-lg sm:rounded-xl bg-white w-full transition-all duration-300 shadow-sm",
          "hover:shadow-md hover:border-blue-300",
          "min-h-[56px] sm:min-h-[60px]",
          focused
            ? "border-transparent ring-2 sm:ring-4 ring-blue-500/30 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100"
            : "border-gray-200",
          error && "border-red-400 ring-red-100"
        )}
      >
        {/* Icon */}
        {/* <div className="absolute left-3 flex items-center justify-center">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 rounded-md p-1.5 sm:p-2 shadow-md">
            <FaClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div> */}

        {/* Select Input */}
        <select
          id={name}
          {...(register ? register(name) : {})}
          value={internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(
            "appearance-none w-full bg-transparent outline-none text-gray-800 cursor-pointer font-medium",
            "py-3.5 sm:py-4 pr-8 sm:pr-10 pl-12 sm:pl-14",
            "text-sm sm:text-base transition-all duration-200"
          )}
        >
          <option value="" className="text-gray-400 text-sm sm:text-base">
            {placeholder}
          </option>
          {options.map((time, i) => (
            <option key={i} value={time} className="text-gray-800">
              {time}
            </option>
          ))}
        </select>

        {/* Dropdown Arrow */}
        {/* <div className="absolute right-3 pointer-events-none">
          <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 rounded p-1 sm:p-1.5 shadow-sm">
            <svg
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div> */}
      </div>

      {/* Focus Indicator */}
      {focused && (
        <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-100 transition-all duration-300">
          <div
            className={clsx(
              "w-10 sm:w-14 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 shadow-md",
              error && "bg-gradient-to-r from-red-500 to-red-400 shadow-red-500/25"
            )}
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1 mt-1 sm:mt-2 ml-2 sm:ml-3">
          <svg
            className="w-3 h-3 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs sm:text-sm">{error.message}</span>
        </p>
      )}
    </div>
  );
};

export default TimeSelect;
