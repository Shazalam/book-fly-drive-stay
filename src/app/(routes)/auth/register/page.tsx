// app/(routes)/auth/register/page.tsx
import { Suspense } from 'react';
import RegisterForm from './RegisterForm';

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Loading registration form...
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-2">Please wait...</p>
        </div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}