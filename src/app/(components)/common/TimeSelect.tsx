
"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface TimeSelectProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  error?: FieldError;
  options: string[];
  placeholder?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: () => void;
}

const TimeSelect = <T extends FieldValues>({
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
}: TimeSelectProps<T>) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || "");

  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

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
    <div className={clsx("w-full flex flex-col text-left", className)}>
      {/* Label above, like InputField */}
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-800"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div
        className={clsx(
          "flex items-center border-2 rounded-xl bg-white w-full transition-all duration-300 shadow-sm",
          "hover:shadow-md hover:border-blue-300",
          focused
            ? "border-blue-600 ring-4 ring-blue-100"
            : "border-gray-200",
          error && "border-red-400 ring-red-100"
        )}
      >
        <select
          id={name}
          {...(register ? register(name) : {})}
          value={internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={clsx(
            "appearance-none w-full bg-transparent outline-none text-gray-800 cursor-pointer font-medium",
            "py-3 px-4 text-sm sm:text-base"
          )}
        >
          <option value="" className="text-gray-400">
            {placeholder}
          </option>
          {options.map((time, i) => (
            <option key={i} value={time} className="text-gray-800">
              {time}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
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
          <span>{error.message}</span>
        </p>
      )}
    </div>
  );
};

export default TimeSelect;
