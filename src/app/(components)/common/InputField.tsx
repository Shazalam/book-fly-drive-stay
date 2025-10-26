// "use client";
// import React from "react";
// import clsx from "clsx";
// import BaseInputWrapper from "./BaseInputWrapper";


// interface InputFieldProps {
//   label?: string;
//   name: string;
//   value?: string;
//   placeholder?: string;
//   icon?: React.ReactNode;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
//   type?: string;
//   error?: string;
//   required?: boolean;
//   className?: string;
//   disabled?: boolean;
//   variant?: "default" | "priceline" | "modern";
//   size?: "sm" | "md" | "lg";
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   name,
//   value,
//   placeholder,
//   icon,
//   onChange,
//   onBlur,
//   type = "text",
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
//   // Variant styles (emerald–teal themed)
//   const variantClasses = {
//     default: clsx(
//       "border border-gray-300 bg-white rounded-lg",
//       "focus:border-emerald-500 focus:ring-2 focus:ring-teal-200",
//       "transition-all duration-200",
//       error && "border-red-500 focus:border-red-500 focus:ring-red-200"
//     ),
//     priceline: clsx(
//       "border-2 border-gray-200 bg-white rounded-xl",
//       "focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100",
//       "shadow-sm hover:shadow-md transition-all duration-300",
//       "hover:border-emerald-300",
//       error && "border-red-400 focus:border-red-500 focus:ring-red-100"
//     ),
//     modern: clsx(
//       "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg",
//       "focus:border-emerald-600 focus:bg-white focus:ring-0",
//       "transition-colors duration-200",
//       error && "border-red-500 focus:border-red-500"
//     ),
//   };

//   return (
//     <BaseInputWrapper
//       label={label}
//       name={name}
//       icon={icon}
//       error={error}
//       required={required}
//       className={className}
//     >
//       <div className="relative w-full">
//         <input
//           id={name}
//           name={name}
//           value={value}
//           placeholder={placeholder}
//           onChange={onChange}
//           onBlur={onBlur}
//           type={type}
//           disabled={disabled}
//           className={clsx(
//             "w-full outline-none text-gray-900 placeholder-gray-500 bg-transparent",
//             "px-4 font-medium",
//             sizeClasses[size],
//             variantClasses[variant],
//             disabled && "opacity-50 cursor-not-allowed bg-gray-100",
//             icon && "pl-12" // Add extra padding when icon is present
//           )}
//         />
//         {/* Enhanced Icon Container */}
//         {icon && (
//           <div className={clsx(
//             "absolute left-0 top-0 bottom-0 flex items-center justify-center",
//             size === "sm" ? "w-8" : "w-12"
//           )}>
//             <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
//               {icon}
//             </span>
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
//     </BaseInputWrapper>
//   );
// };

// export default InputField;



"use client";
import React from "react";
import clsx from "clsx";
import BaseInputWrapper from "./BaseInputWrapper";
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLock,
  FaSearch,
  FaDollarSign,
  FaCreditCard,
  FaPassport
} from "react-icons/fa";

interface InputFieldProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  iconType?: string; // Optional: allow specific icon override
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "priceline" | "modern";
  size?: "sm" | "md" | "lg";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  iconType,
  onChange,
  onBlur,
  type = "text",
  error,
  required = false,
  className = "",
  disabled = false,
  variant = "priceline",
  size = "md"
}) => {
  // Size classes
  const sizeClasses = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg"
  };

  // Variant styles with gradient theme
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
      "border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 bg-gray-50 rounded-t-lg",
      "focus:border-gradient-to-r focus:from-emerald-500 focus:to-teal-500 focus:bg-white focus:ring-0",
      "transition-colors duration-200",
      error && "border-red-500 focus:border-red-500"
    ),
  };

  // Icon mapping based on field name, type, or placeholder
  const getIcon = () => {
    // If specific iconType is provided, use it
    if (iconType) {
      const iconMap: { [key: string]: React.ReactNode } = {
        location: <FaMapMarkerAlt className="w-4 h-4" />,
        calendar: <FaCalendarAlt className="w-4 h-4" />,
        user: <FaUser className="w-4 h-4" />,
        email: <FaEnvelope className="w-4 h-4" />,
        phone: <FaPhone className="w-4 h-4" />,
        lock: <FaLock className="w-4 h-4" />,
        search: <FaSearch className="w-4 h-4" />,
        dollar: <FaDollarSign className="w-4 h-4" />,
        card: <FaCreditCard className="w-4 h-4" />,
        passport: <FaPassport className="w-4 h-4" />
      };
      return iconMap[iconType];
    }

    // Auto-detect icon based on field name, type, or placeholder
    const fieldName = name.toLowerCase();
    const fieldPlaceholder = placeholder?.toLowerCase() || "";

    // Location fields
    if (fieldName.includes('location') || fieldName.includes('address') || 
        fieldName.includes('city') || fieldName.includes('destination') ||
        fieldPlaceholder.includes('city') || fieldPlaceholder.includes('address') ||
        fieldPlaceholder.includes('location')) {
      return <FaMapMarkerAlt className="w-4 h-4" />;
    }

    // Date fields
    if (fieldName.includes('date') || fieldName.includes('time') || 
        type === 'date' || fieldPlaceholder.includes('date')) {
      return <FaCalendarAlt className="w-4 h-4" />;
    }

    // Name fields
    if (fieldName.includes('name') || fieldName.includes('firstname') || 
        fieldName.includes('lastname') || fieldName.includes('fullname') ||
        fieldPlaceholder.includes('name')) {
      return <FaUser className="w-4 h-4" />;
    }

    // Email fields
    if (fieldName.includes('email') || type === 'email' || 
        fieldPlaceholder.includes('email')) {
      return <FaEnvelope className="w-4 h-4" />;
    }

    // Phone fields
    if (fieldName.includes('phone') || fieldName.includes('mobile') || 
        fieldName.includes('tel') || fieldPlaceholder.includes('phone')) {
      return <FaPhone className="w-4 h-4" />;
    }

    // Password fields
    if (fieldName.includes('password') || fieldName.includes('confirmpassword') || 
        type === 'password' || fieldPlaceholder.includes('password')) {
      return <FaLock className="w-4 h-4" />;
    }

    // Search fields
    if (fieldName.includes('search') || fieldPlaceholder.includes('search')) {
      return <FaSearch className="w-4 h-4" />;
    }

    // Price fields
    if (fieldName.includes('price') || fieldName.includes('amount') || 
        fieldName.includes('cost') || fieldPlaceholder.includes('price') ||
        fieldPlaceholder.includes('amount')) {
      return <FaDollarSign className="w-4 h-4" />;
    }

    // Payment fields
    if (fieldName.includes('card') || fieldName.includes('payment') || 
        fieldName.includes('cvc') || fieldName.includes('expiry')) {
      return <FaCreditCard className="w-4 h-4" />;
    }

    // Travel fields
    if (fieldName.includes('passport') || fieldName.includes('visa') ||
        fieldPlaceholder.includes('passport')) {
      return <FaPassport className="w-4 h-4" />;
    }

    // Default icon for text fields
    return <FaSearch className="w-4 h-4" />;
  };

  const icon = getIcon();

  return (
    <BaseInputWrapper
      label={label}
      name={name}
      error={error}
      required={required}
      className={className}
    >
      <div className="relative w-full group">
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          disabled={disabled}
          className={clsx(
            "w-full outline-none text-gray-900 placeholder-gray-500 bg-transparent",
            "px-4 font-medium transition-all duration-300",
            sizeClasses[size],
            variantClasses[variant],
            disabled && "opacity-50 cursor-not-allowed bg-gray-100",
            icon && "pl-12" // Add extra padding when icon is present
          )}
        />
        
        {/* Gradient Icon Container - Fixed styling */}
        {icon && (
          <div className={clsx(
            "absolute left-0 top-0 bottom-0 flex items-center justify-center",
            "transition-all duration-300",
            size === "sm" ? "w-10" : "w-12"
          )}>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-2">
              <div className="text-white">
                {icon}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Focus Indicator for Priceline Variant */}
        {variant === "priceline" && (
          <div className="absolute inset-x-0 -bottom-1 flex justify-center opacity-0 transition-all duration-300 group-focus-within:opacity-100">
            <div className={clsx(
              "w-12 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500",
              "shadow-lg shadow-emerald-500/25",
              error && "bg-gradient-to-r from-red-500 to-red-400 shadow-red-500/25"
            )} />
          </div>
        )}

        {/* Modern Variant Bottom Border Enhancement */}
        {variant === "modern" && (
          <div className={clsx(
            "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 transition-transform duration-300",
            "group-focus-within:scale-x-100",
            error && "bg-gradient-to-r from-red-500 to-red-400"
          )} />
        )}
      </div>
    </BaseInputWrapper>
  );
};

export default InputField;