import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RegisterApiData } from '@/app/(lib)/validators/userValidator';
import { AuthApiResponse, LoginResponseData, RegisterResponseData, UserResponse } from '@/app/(types)/user';

// Define the type for rejected payloads
interface RejectedPayload {
  message: string;
  status: number;
  error?: unknown;
}

// Async thunk for registration
export const registerUser = createAsyncThunk<
  AuthApiResponse<RegisterResponseData>, // Return type on success
  RegisterApiData,                       // Argument type
  { rejectValue: RejectedPayload }       // Rejected value type
>(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data: AuthApiResponse<RegisterResponseData> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Registration failed',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (err: unknown) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk<
  AuthApiResponse<LoginResponseData>,
  { email: string, password: string },
  { rejectValue: RejectedPayload }
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data: AuthApiResponse<LoginResponseData> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Login failed',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (err: unknown) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for email verification
export const verifyEmail = createAsyncThunk<
  AuthApiResponse<{ user: UserResponse }>,
  { email: string; otp: string },
  { rejectValue: RejectedPayload }
>(
  'auth/verifyEmail',
  async (verificationData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verificationData),
      });

      const data: AuthApiResponse<{ user: UserResponse }> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Verification failed',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (err: unknown) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for resend OTP
export const resendOtp = createAsyncThunk<
  AuthApiResponse<null>,
  string,
  { rejectValue: RejectedPayload }
>(
  'auth/resendOtp',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data: AuthApiResponse<null> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Failed to resend OTP',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (err: unknown) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);


export const getCurrentUser = createAsyncThunk<
  AuthApiResponse<{ user: UserResponse }>, // Return type
  void,                                   // No args needed
  { rejectValue: string }
>(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',                 // important for httpOnly cookie
      });

      const data: AuthApiResponse<{ user: UserResponse }> = await res.json();
      if (!res.ok) {
        return rejectWithValue(data.message || "Failed to fetch user");
      }
      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message || 'Network error');
    }
  }
);
// Auth state interface
interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  requiresVerification: boolean;
  registeredEmail: string | null;
  verificationLoading: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  requiresVerification: false,
  registeredEmail: null,
  verificationLoading: false,
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setAuth: (state, action: PayloadAction<{ user: UserResponse; token: string }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.requiresVerification = false;
      state.registeredEmail = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    },
    setVerificationRequired: (state, action: PayloadAction<string>) => {
      state.requiresVerification = true;
      state.registeredEmail = action.payload;
    },
    clearVerification: (state) => {
      state.requiresVerification = false;
      state.registeredEmail = null;
    },
    initializeAuth: (state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        const userData = localStorage.getItem('user_data');
        if (token && userData) {
          try {
            state.user = JSON.parse(userData) as UserResponse;
            state.isAuthenticated = true;
          } catch {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_data');
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.requiresVerification = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const data = action.payload.data;
        if (data?.requiresVerification) {
          state.requiresVerification = true;
          state.registeredEmail = data.user.email;
        } else if (data?.user) {
          state.isAuthenticated = true;
          // if (typeof window !== 'undefined') {
          //   localStorage.setItem('user_data', JSON.stringify(data.user));
          // }
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Registration failed';
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.requiresVerification = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const data = action.payload.data;
        if (data?.requiresVerification) {
          state.requiresVerification = true;
          state.registeredEmail = data.user.email;
        } else if (data?.user) {
          state.isAuthenticated = true;
          // if (typeof window !== 'undefined') {
          //   localStorage.setItem('user_data', JSON.stringify(data.user));
          // }
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Login failed';
      })
      // Verify email
      .addCase(verifyEmail.pending, (state) => {
        state.verificationLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.verificationLoading = false;
        state.error = null;
        const data = action.payload.data;
        if (data?.user) {
          state.user = data.user;
          state.requiresVerification = false;
          state.registeredEmail = null;
          state.isAuthenticated = true;
          // if (typeof window !== 'undefined') {
          //   localStorage.setItem('user_data', JSON.stringify(data.user));
          // }
        }
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.verificationLoading = false;
        state.error = action.payload?.message || 'Verification failed';
      })
      // Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.verificationLoading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.verificationLoading = false;
        state.error = null;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.verificationLoading = false;
        state.error = action.payload?.message || 'Failed to resend OTP';
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data?.user ?? null;
        state.isAuthenticated = !!action.payload.data?.user;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to fetch user';
        state.user = null;
        state.isAuthenticated = false;
      });

  },
});

// Export actions
export const {
  clearError,
  setAuth,
  logout,
  setVerificationRequired,
  clearVerification,
  initializeAuth,
} = authSlice.actions;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectRequiresVerification = (state: { auth: AuthState }) => state.auth.requiresVerification;
export const selectRegisteredEmail = (state: { auth: AuthState }) => state.auth.registeredEmail;
export const selectVerificationLoading = (state: { auth: AuthState }) => state.auth.verificationLoading;

export default authSlice.reducer;
