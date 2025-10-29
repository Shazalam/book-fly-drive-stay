"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FiMail, FiArrowLeft } from "react-icons/fi";

import Link from "next/link";
import Button from "@/app/(components)/common/Button";
import InputField from "@/app/(components)/common/InputField";
import { resendOtp, verifyEmail } from "@/app/(lib)/auth-actions";


function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await verifyEmail(email, otp);
      
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess('Email verified successfully! Redirecting to login...');
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setError('');
    setSuccess('');

    try {
      const result = await resendOtp(email);
      
      if (result.error) {
        setError(result.error);
      } else {
        setSuccess('New OTP sent to your email!');
      }
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiMail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Verify Your Email
        </h2>
        <p className="text-gray-600">
          We've sent a verification code to
        </p>
        <p className="text-gray-900 font-semibold mt-1">{email}</p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm text-center">{error}</p>
        </div>
      )}

      {success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-600 text-sm text-center">{success}</p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-4">
        <InputField
          label="Verification Code"
          name="otp"
          type="text"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          icon={<FiMail className="w-4 h-4" />}
          placeholder="Enter 6-digit OTP"
          variant="priceline"
          size="md"
          maxLength={6}
        />

        <Button
          type="submit"
          loading={isSubmitting}
          variant="primary"
          fullWidth
        >
          {isSubmitting ? "Verifying..." : "Verify Email"}
        </Button>
      </form>

      <div className="text-center space-y-3">
        <button
          onClick={handleResendOtp}
          disabled={isResending}
          className="text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50"
        >
          {isResending ? "Sending..." : "Resend OTP"}
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
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}