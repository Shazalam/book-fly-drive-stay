// app/(routes)/auth/register/RegisterForm.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";
import { RegisterFormData, registerSchema } from "@/app/(lib)/validators/userValidator";
import InputField from "@/app/(components)/common/InputField";
import Button from "@/app/(components)/common/Button";
import { clearAllErrors, clearAllSuccess, registerUser } from "@/app/(store)/slices/authSlice";
import { useApiToast } from "@/app/(hooks)/useApiToast";

export default function RegisterForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [redirectTo, setRedirectTo] = useState('/'); // Default value

  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const { registerLoading, registerError, registerSuccessMsg, requiresVerification, registeredEmail } = useAppSelector(
    (state) => state.auth
  );

  useApiToast({
    loading: registerLoading,
    error: registerError,
    success: registerSuccessMsg,
    loadingMsg: "Creating account...",
    showToast: true,
  });

  // Get redirect parameter from URL on client side
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      setRedirectTo(redirect);
    }
  }, []);

  // Clear errors when component unmounts
  useEffect(() => {
    return () => {
      dispatch(clearAllErrors());
      dispatch(clearAllSuccess());
    };
  }, [dispatch]);


  // Redirect when verification is required
  useEffect(() => {
    if (requiresVerification && registeredEmail) {
      const verifyUrl = new URL('/auth/verify-email', window.location.origin);
      verifyUrl.searchParams.set('email', encodeURIComponent(registeredEmail));
      verifyUrl.searchParams.set('redirect', redirectTo);

      router.push(verifyUrl.toString());
    }
  }, [requiresVerification, registeredEmail, redirectTo, router]);

  const onSubmit = async (data: RegisterFormData) => {

    // Transform form data for API
    const apiData = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.toLowerCase().trim(),
      password: data.password,
    };

    dispatch(registerUser(apiData));
  };

  return (
    <>
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Join millions of travelers worldwide
          </p>
        </div>

        {/* Error Alert */}
        {/* {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm text-center">{error}</p>
        </div>
      )} */}

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-xl shadow-sm border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              type="text"
              placeholder="John"
              icon={<FiUser className="w-4 h-4" />}
              error={errors.firstName}
              disabled={registerLoading}
              {...register("firstName")}
            />

            <InputField
              label="Last Name"
              type="text"
              placeholder="Doe"
              icon={<FiUser className="w-4 h-4" />}
              error={errors.lastName}
              disabled={registerLoading}
              {...register("lastName")}
            />
          </div>

          <InputField
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            icon={<FiMail className="w-4 h-4" />}
            error={errors.email}
            disabled={registerLoading}
            {...register("email")}
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            icon={<FiLock className="w-4 h-4" />}
            error={errors.password}
            disabled={registerLoading}
            iconRight={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                disabled={registerLoading}
              >
                {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
              </button>
            }
            {...register("password")}
          />

          <InputField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            icon={<FiLock className="w-4 h-4" />}
            error={errors.confirmPassword}
            disabled={registerLoading}
            {...register("confirmPassword")}
          />

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center h-5">
              <input
                id="termsAccepted"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                disabled={registerLoading}
                {...register("termsAccepted")}
              />
            </div>
            <div className="text-sm">
              <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-600 text-sm mt-1">{errors.termsAccepted.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            loading={registerLoading}
            variant="primary"
            fullWidth
            size="lg"
            disabled={!isDirty || !isValid || registerLoading}
            className="mt-6"
          >
            {registerLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        {/* Login Link */}
        <div className="text-center pt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              href={`/auth/login${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ''}`}
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>

  );
}