"use client";

import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";
import { verifyEmail, resendOtp, selectAuth, clearError } from "@/app/(store)/slices/authSlice";
import Button from "@/app/(components)/common/Button";
import InputField from "@/app/(components)/common/InputField";
import { useApiToast } from "@/app/(hooks)/useApiToast";
import { Toaster } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { VerifyOtpRequest, verifyOtpSchema } from "@/app/(lib)/validators/userValidator";

export default function VerifyEmailContent() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();

    const { verificationLoading, error, user } = useAppSelector(selectAuth);
    const [resendLoading, setResendLoading] = React.useState(false);
    const [success, setSuccess] = React.useState<string | null>(null);
    // Pull & decode params
    const email = useMemo(
        () => searchParams.get("email") ? decodeURIComponent(searchParams.get("email") as string) : "",
        [searchParams]
    );
    const redirect = useMemo(
        () => searchParams.get("redirect") ? decodeURIComponent(searchParams.get("redirect") as string) : "/",
        [searchParams]
    );

    // RHF with Zod
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        setValue,
    } = useForm<VerifyOtpRequest>({
        resolver: zodResolver(verifyOtpSchema),
        defaultValues: { email, otp: "" },
        mode: "onChange",
    });

    // Toast for async feedback
    useApiToast({
        loading: verificationLoading,
        success,
        error,
        loadingMsg: "Verifying OTP...",
        successMsg: "Email verified!",
        errorMsg: error ?? "Failed to verify.",
    });

    // On success, immediately redirect
    useEffect(() => {
        if (user?.emailVerified) {
            // setSuccess("Email verified successfully! Redirecting to login...");
            router.push(redirect);
        }

        return () => {
            setSuccess(null);
            dispatch(clearError()); // clear Redux error on unmount
        };
    }, [user, router, dispatch]);

    useEffect(() => {
        // Always clear errors (redux and RHF) on unmount
        return () => {
            dispatch(clearError());
            setValue("otp", "");
        };
    }, [dispatch, setValue]);

    // Submit handler
    const onSubmit = async (data: VerifyOtpRequest) => {
        dispatch(clearError());
        setSuccess(null);
        try {
            await dispatch(verifyEmail(data)).unwrap();
            setSuccess("Email verified successfully! Redirecting...");
            // You may redirect here or rely on the useEffect to handle it
        } catch{
            setError("otp", { message: "Invalid or expired OTP" });
        }
    };


    // Resend handler
    const handleResendOtp = async () => {
        setResendLoading(true);
        dispatch(clearError());
        setSuccess(null);
        try {
            await dispatch(resendOtp(email)).unwrap();
            setSuccess("A new OTP code was sent!");
        } finally {
            setResendLoading(false);
        }
    };

    if (!email) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Invalid Request</h2>
                <p className="text-gray-600 mb-4">Email parameter is missing</p>
                <Link href="/auth/register" className="text-blue-600 hover:text-blue-700">
                    Go back to registration
                </Link>
            </div>
        );
    }

    return (
        <>
            <Toaster position="top-right" />
            <div className="space-y-6 max-w-md mx-auto">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FiMail className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
                    <p className="text-gray-600">{`We've sent a verification code to`}</p>
                    <p className="text-gray-900 font-semibold mt-1">{email}</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        label="Verification Code"
                        {...register("otp")}
                        error={errors.otp}
                        type="text"
                        icon={<FiMail className="w-4 h-4" />}
                        placeholder="Enter 6-digit OTP"
                        inputSize="md"
                        maxLength={6}
                        autoComplete="one-time-code"
                        disabled={verificationLoading}
                    />
                    <Button
                        type="submit"
                        loading={verificationLoading}
                        variant="primary"
                        fullWidth
                    >
                        {verificationLoading ? "Verifying..." : "Verify Email"}
                    </Button>
                </form>

                <div className="text-center space-y-3">
                    <button
                        onClick={handleResendOtp}
                        disabled={resendLoading}
                        className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
                        type="button"
                    >
                        {resendLoading ? "Sending..." : "Resend OTP"}
                    </button>
                    <div className="pt-2">
                        <Link
                            href="/auth/register"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            Back to registration
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}





// "use client";
// import React, { useEffect, useState } from "react";
// import { FiMail, FiArrowLeft } from "react-icons/fi";
// import Link from "next/link";
// import { useSearchParams, useRouter } from "next/navigation";
// import { verifyEmail, resendOtp, selectAuth, clearError } from "@/app/(store)/slices/authSlice";
// import Button from "@/app/(components)/common/Button";
// import InputField from "@/app/(components)/common/InputField";
// import { useApiToast } from "@/app/(hooks)/useApiToast";
// import { Toaster } from "react-hot-toast";
// import { useAppDispatch, useAppSelector } from "@/app/(hooks)/redux";

// export default function VerifyEmailContent() {
//     const router = useRouter();
//     const dispatch = useAppDispatch();

//     const searchParams = useSearchParams();
//     const rawEmail = searchParams.get("email");
//     const email = rawEmail ? decodeURIComponent(rawEmail) : ""; // Always decode here

//     const rawPath = searchParams.get("redirect"); // could be /flights, /anywhere
//     const redirect = rawPath ? decodeURIComponent(rawPath) : "/"; // Always decode here

//     const [otp, setOtp] = useState('');
//     const { verificationLoading, error, user } = useAppSelector(selectAuth);
//     const [success, setSuccess] = React.useState<string | null>(null);
//     const [resendLoading, setResendLoading] = React.useState(false);

//     // Show toast when status changes
//     useApiToast({
//         loading: verificationLoading,
//         success,
//         error,
//         loadingMsg: "Verifying OTP...",
//         successMsg: "Email verified, redirecting...",
//         errorMsg: error ?? "Failed to verify.",
//     });

//     useEffect(() => {
//         if (user?.emailVerified) {
//             setSuccess("Email verified successfully! Redirecting to login...");
//             router.push(redirect);
//         }

//         return () => {
//             setSuccess(null);
//             dispatch(clearError()); // clear Redux error on unmount
//         };
//     }, [user, router, dispatch]);

//     if (!email) {
//         return (
//             <div className="text-center">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">Invalid Request</h2>
//                 <p className="text-gray-600 mb-4">Email parameter is missing</p>
//                 <Link href="/auth/register" className="text-blue-600 hover:text-blue-700">
//                     Go back to registration
//                 </Link>
//             </div>
//         );
//     }

//     // ---- SUBMIT HANDLER ----
//     const handleVerify = (e: React.FormEvent) => {
//         e.preventDefault();
//         setSuccess(null);
//         dispatch(clearError());
//         dispatch(verifyEmail({ email, otp }))
//             .unwrap()
//             .then(() => {
//                 setSuccess("Email verified successfully! Redirecting...");
//                 setTimeout(() => router.push("/auth/login"), 2000);
//             })
//             .catch(() => { });
//     };

//     // ---- RESEND HANDLER ----
//     const handleResendOtp = async () => {
//         setResendLoading(true);
//         setSuccess(null);
//         dispatch(clearError());
//         dispatch(resendOtp(email))
//             .unwrap()
//             .then(() => setSuccess("A new OTP code was sent!"))
//             .catch(() => { })
//             .finally(() => setResendLoading(false));
//     };

//     return (
//         <>
//             <Toaster position="top-right" />
//             <div className="space-y-6 max-w-md mx-auto">
//                 <div className="text-center">
//                     <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                         <FiMail className="w-8 h-8 text-white" />
//                     </div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                         Verify Your Email
//                     </h2>
//                     <p className="text-gray-600">{`We've sent a verification code to`}</p>
//                     <p className="text-gray-900 font-semibold mt-1">{email}</p>
//                 </div>

//                 <form onSubmit={handleVerify} className="space-y-4">
//                     <InputField
//                         label="Verification Code"
//                         name="otp"
//                         type="text"
//                         required
//                         value={otp}
//                         onChange={e => setOtp(e.target.value)}
//                         icon={<FiMail className="w-4 h-4" />}
//                         placeholder="Enter 6-digit OTP"
//                         variant="priceline"
//                         inputSize="md"
//                         maxLength={6}
//                         autoComplete="one-time-code"
//                     />
//                     <Button
//                         type="submit"
//                         loading={verificationLoading}
//                         variant="primary"
//                         fullWidth
//                     >
//                         {verificationLoading ? "Verifying..." : "Verify Email"}
//                     </Button>
//                 </form>

//                 <div className="text-center space-y-3">
//                     <button
//                         onClick={handleResendOtp}
//                         disabled={resendLoading}
//                         className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
//                     >
//                         {resendLoading ? "Sending..." : "Resend OTP"}
//                     </button>
//                     <div className="pt-2">
//                         <Link
//                             href="/auth/register"
//                             className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700"
//                         >
//                             <FiArrowLeft className="w-4 h-4" />
//                             Back to registration
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }







