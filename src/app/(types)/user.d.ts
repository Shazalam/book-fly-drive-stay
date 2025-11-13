
// =====================
// User core data types
// =====================
export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
} 

// =====================
// API response types
// =====================
export interface RegisterResponseData {
  user: UserResponse;
  requiresVerification: boolean;
}

export interface LoginResponseData {
  user: UserResponse;
  requiresVerification: boolean;
}

// =====================
// Auth request types
// =====================
export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface ResendOtpRequest {
  email: string;
}

// =====================
// Verification/Token
// =====================

// For OTP verification success response:
export interface VerifyOtpResponse {
  user: UserResponse;
}

