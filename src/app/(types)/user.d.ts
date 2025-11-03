// export interface User {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   phone?: string;
//   emailVerified: boolean;
//   avatar?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  createdAt: string; // or Date if you parse it
  updatedAt: string; // or Date if you parse it
}

export interface RegisterResponseData {
  user: UserResponse;
  requiresVerification: boolean;
  token?: string; // if you add JWT later
}

export interface LoginResponseData {
  user: UserResponse;
  token: string;
}

export interface AuthApiResponse<T = unknown> {
  status: 'success' | 'error';
  message: string;
  data?: T;
  error?: {
    code: string;
    details?: unknown;
  };
  meta?: {
    timestamp: string;
    version: string;
  };
}

export interface VerificationToken {
  _id: string;
  email: string;
  token: string;
  expires: Date;
  createdAt: Date;
}

// export interface AuthResponse {
//   success: boolean;
//   message?: string;
//   user?: Omit<User, 'password'>;
//   token?: string;
// }

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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