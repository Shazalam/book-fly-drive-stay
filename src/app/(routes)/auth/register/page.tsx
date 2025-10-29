"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/(lib)/auth-actions";
import Button from "@/app/(components)/common/Button";
import InputField from "@/app/(components)/common/InputField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });

      if (result.error) {
        setError(result.error);
      } else {
        // Redirect to OTP verification page
        router.push(`/auth/verify-email?email=${encodeURIComponent(formData.email)}`);
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Create Your Account
        </h2>
        <p className="text-gray-600">
          Join 10 crore+ happy travellers
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm text-center">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            icon={<FiUser className="w-4 h-4" />}
            placeholder="First name"
            variant="priceline"
            size="md"
          />

          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            icon={<FiUser className="w-4 h-4" />}
            placeholder="Last name"
            variant="priceline"
            size="md"
          />
        </div>

        <InputField
          label="Email Address"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          icon={<FiMail className="w-4 h-4" />}
          placeholder="Enter your email"
          variant="priceline"
          size="md"
        />

        <InputField
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={handleInputChange}
          icon={<FiLock className="w-4 h-4" />}
          placeholder="Create a password"
          variant="priceline"
          size="md"
          iconRight={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
            </button>
          }
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          required
          value={formData.confirmPassword}
          onChange={handleInputChange}
          icon={<FiLock className="w-4 h-4" />}
          placeholder="Confirm your password"
          variant="priceline"
          size="md"
        />

        <Button
          type="submit"
          loading={isSubmitting}
          variant="primary"
          fullWidth
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}