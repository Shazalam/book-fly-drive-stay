// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
// import Link from "next/link";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { loginSchema } from "@/app/(lib)/validators/userValidator";
// import { zodResolver } from "@hookform/resolvers/zod";
// import InputField from "@/app/(components)/common/InputField";
// import Button from "@/app/(components)/common/Button";
// import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";
// import { loginUser, clearError, selectAuth } from "@/app/(store)/slices/authSlice";
// import { useApiToast } from "@/app/(hooks)/useApiToast";

// type LoginFields = z.infer<typeof loginSchema>;

// export default function LoginForm() {
//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [showPassword, setShowPassword] = useState(false);
//   const redirectTo =
//     searchParams.get("redirect") && searchParams.get("redirect") !== "/auth/login"
//       ? decodeURIComponent(searchParams.get("redirect") as string)
//       : "/";

//   // Redux state
//   const { loginLoading, error, requiresVerification, registeredEmail } = useAppSelector(selectAuth);

//   // Toasts for error, loading, and success
//   useApiToast({
//     loading: loginLoading,
//     error,
//     success: requiresVerification ? "Signed in successfully!" : null,
//     loadingMsg: "Signing in...",
//     showToast: true,
//   });

//   // Form
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFields>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   // Clear errors when component unmounts
//   useEffect(() => {
//     return () => {
//       dispatch(clearError());
//     };
//   }, [dispatch]);

//   // Redirect when verification is required
//   useEffect(() => {
//     if (requiresVerification && registeredEmail) {
//       const verifyUrl = new URL('/auth/verify-email', window.location.origin);
//       verifyUrl.searchParams.set('email', encodeURIComponent(registeredEmail));
//       verifyUrl.searchParams.set('redirect', redirectTo);

//       router.push(verifyUrl.toString());
//     }
//   }, [requiresVerification, registeredEmail, redirectTo, router]);

//   async function onSubmit(values: LoginFields) {
//     try {
//       await dispatch(
//         loginUser({ email: values.email, password: values.password })
//       ).unwrap();

//       // No need for manual redirect here; handled by useEffect on Redux state
//     } catch{
//       // Do nothing here, error will be displayed by toast and errors.message
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
//         <p className="text-gray-600">Sign in to access your account</p>
//       </div>

//       {/* Inline form error */}
//       {/* {error && (
//         <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
//           <p className="text-red-600 text-sm text-center">{error}</p>
//         </div>
//       )} */}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <InputField
//           label="Email Address"
//           type="email"
//           required
//           placeholder="Enter your email"
//           icon={<FiMail className="w-4 h-4" />}
//           variant="priceline"
//           inputSize="md"
//           {...register("email")}
//           error={errors.email}
//         />

//         <InputField
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           required
//           placeholder="Enter your password"
//           icon={<FiLock className="w-4 h-4" />}
//           variant="priceline"
//           inputSize="md"
//           {...register("password")}
//           error={errors.password}
//           iconRight={
//             <button
//               type="button"
//               onClick={() => setShowPassword((v) => !v)}
//               className="text-gray-400 hover:text-gray-600"
//               tabIndex={-1}
//             >
//               {showPassword ? (
//                 <FiEyeOff className="w-4 h-4" />
//               ) : (
//                 <FiEye className="w-4 h-4" />
//               )}
//             </button>
//           }
//         />

//         <div className="flex items-center justify-between">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <Link
//             href="/auth/forgot-password"
//             className="text-sm text-blue-600 hover:text-blue-700"
//           >
//             Forgot password?
//           </Link>
//         </div>

//         <Button
//           type="submit"
//           variant="primary"
//           loading={loginLoading}
//           fullWidth
//         >
//           {loginLoading ? "Signing In..." : "Sign In"}
//         </Button>
//       </form>

//       <div className="text-center">
//         <p className="text-gray-600">
//           {" Don't have an account? "}
//           <Link
//             href={`/auth/register${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ''}`}
//             className="text-blue-600 hover:text-blue-700 font-medium"
//           >
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/app/(lib)/validators/userValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/app/(components)/common/InputField";
import Button from "@/app/(components)/common/Button";
import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";
import { loginUser, selectAuth, clearAllErrors, clearAllSuccess } from "@/app/(store)/slices/authSlice";
import { useApiToast } from "@/app/(hooks)/useApiToast";

type LoginFields = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [showPassword, setShowPassword] = useState(false);

  // Parse redirect
  const redirectTo =
    searchParams.get("redirect") && searchParams.get("redirect") !== "/auth/login"
      ? decodeURIComponent(searchParams.get("redirect") as string)
      : "/";

  // Redux
  const { loginLoading, loginError,loginSuccessMsg, requiresVerification, user, registeredEmail } = useAppSelector(selectAuth);

  // Toasts for all async/user states (loading, error, success)
  useApiToast({
    loading: loginLoading,
    error:loginError,
    success:loginSuccessMsg,
    loadingMsg: "Signing in...",
    showToast: true,
  });

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });

  // Clear errors on component unmount
  useEffect(() => {
    return () => {
      dispatch(clearAllErrors());
      dispatch(clearAllSuccess());
    };
  }, [dispatch]);


  // Redirect if verification is needed
  useEffect(() => {
    if (requiresVerification && registeredEmail) {
      // Let the success toast show for 1 second, then redirect
      const timerId = setTimeout(() => {
   
        const verifyUrl = new URL('/auth/verify-email', window.location.origin);
        verifyUrl.searchParams.set('email', encodeURIComponent(registeredEmail));
        verifyUrl.searchParams.set('redirect', redirectTo);
        router.push(verifyUrl.toString());
      }, 1200);
      return () => clearTimeout(timerId);
    }

    // Show success when fully authenticated and not requiring verification
    if (user && !requiresVerification) {

      // Optionally, redirect after a short delay
      const timerId = setTimeout(() => {
   
        if (redirectTo && redirectTo !== "/auth/login") {
          router.push(redirectTo);
        } else {
          router.push("/");
        }
      }, 1700);
      return () => clearTimeout(timerId);
    }
  }, [requiresVerification, registeredEmail, router, redirectTo, user]);

  async function onSubmit(values: LoginFields) {
    try {
      await dispatch(loginUser({ email: values.email, password: values.password })).unwrap();
      // No need to manually handle redirect: handled in useEffect
    } catch {
      // Error is handled by slice and toast
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
        <p className="text-gray-600">Sign in to access your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Email Address"
          type="email"
          required
          placeholder="Enter your email"
          icon={<FiMail className="w-4 h-4" />}
          variant="priceline"
          inputSize="md"
          {...register("email")}
          error={errors.email}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Enter your password"
          icon={<FiLock className="w-4 h-4" />}
          variant="priceline"
          inputSize="md"
          {...register("password")}
          error={errors.password}
          iconRight={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="text-gray-400 hover:text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
            </button>
          }
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          loading={loginLoading}
          fullWidth
        >
          {loginLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-600">
          {" Don't have an account? "}
          <Link
            href={`/auth/register${redirectTo ? `?redirect=${encodeURIComponent(redirectTo)}` : ''}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
