export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isVerified: boolean;
  otp?: string;
  otpExpiration?: Date;
}

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
}

export interface LoginResponseData {
  user: UserResponse;
  requiresVerification: boolean;
  message?:string
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
export interface JWTPayload {
  userId: string;
}