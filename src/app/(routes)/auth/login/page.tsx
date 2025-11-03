// "use client";

// import { useState,ChangeEvent } from "react";
// import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

// import Link from "next/link";
// // import { useRouter } from "next/navigation";
// // import Button from "@/app/(components)/common/Button";
// import InputField from "@/app/(components)/common/InputField";

// interface FormData {
//   email: string;
//   password: string;
// }

// export default function LoginPage() {
//   const [formData, setFormData] = useState<FormData>({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   // const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');
//   // const router = useRouter();

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     setError('');
//   };

//   // const handleSubmit = async (e: FormEvent) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
//   //   setError('');

//   //   try {
//   //     const result = await loginUser({
//   //       email: formData.email,
//   //       password: formData.password
//   //     });

//   //     if (result.error) {
//   //       setError(result.error);
//   //     } else {
//   //       // Redirect to dashboard or home page
//   //       router.push('/dashboard');
//   //     }
//   //   } catch (error) {
//   //     setError('Something went wrong. Please try again.');
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//   return (
//     <div className="space-y-6">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-gray-900 mb-2">
//           Welcome Back
//         </h2>
//         <p className="text-gray-600">
//           Sign in to access your account
//         </p>
//       </div>

//       {error && (
//         <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
//           <p className="text-red-600 text-sm text-center">{error}</p>
//         </div>
//       )}

//       <form onSubmit={() => console.log("work in progress")} className="space-y-4">
//         <InputField
//           label="Email Address"
//           name="email"
//           type="email"
//           required
//           value={formData.email}
//           onChange={handleInputChange}
//           icon={<FiMail className="w-4 h-4" />}
//           placeholder="Enter your email"
//           variant="priceline"
//           size="md"
//         />

//         <InputField
//           label="Password"
//           name="password"
//           type={showPassword ? "text" : "password"}
//           required
//           value={formData.password}
//           onChange={handleInputChange}
//           icon={<FiLock className="w-4 h-4" />}
//           placeholder="Enter your password"
//           variant="priceline"
//           size="md"
//           iconRight={
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               {showPassword ? <FiEyeOff className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
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
//           <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
//             Forgot password?
//           </Link>
//         </div>

//         {/* <Button
//           type="submit"
//           loading={isSubmitting}
//           variant="primary"
//           fullWidth
//         >
//           {isSubmitting ? "Signing In..." : "Sign In"}
//         </Button> */}
//       </form>

//       <div className="text-center">
//         <p className="text-gray-600">
//          {` Don't have an account?`}{" "}
//           <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }







// app/(routes)/auth/login/page.tsx
import { Suspense } from 'react';
import LoginForm from './LoginForm';

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Loading login form...
          </p>
        </div>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}