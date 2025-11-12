import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterApiData, VerifyOtpRequest } from '@/app/(lib)/validators/userValidator';
import { LoginResponseData, RegisterResponseData, UserResponse, VerifyOtpResponse } from '@/app/(types)/user';
import { ApiResponse, RejectedPayload } from '@/app/(types)/common';

// Auth state interface
interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  requiresVerification: boolean;
  registeredEmail: string | null;
  verificationLoading: boolean;
  isAuthHydrated: boolean;          // ← add this!
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
  isAuthHydrated: false       // ← add this!
};

// Async thunk for registration
export const registerUser = createAsyncThunk<
  ApiResponse<RegisterResponseData>, // Return type on success
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

      const data: ApiResponse<RegisterResponseData> = await response.json();

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
  ApiResponse<LoginResponseData>,
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

      const data: ApiResponse<LoginResponseData> = await response.json();

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
  ApiResponse<VerifyOtpResponse>,
  VerifyOtpRequest,
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

      const data: ApiResponse<VerifyOtpResponse> = await response.json();

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
  ApiResponse<null>,
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

      const data: ApiResponse<null> = await response.json();

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
  ApiResponse<{ user: UserResponse }>, // Return type
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

      const data: ApiResponse<{ user: UserResponse }> = await res.json();
      if (!res.ok) {
        return rejectWithValue(data.message || "Failed to fetch user");
      }
      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message || 'Network error');
    }
  }
);

export const logoutUser = createAsyncThunk<
  ApiResponse<null>,
  void,
  { rejectValue: RejectedPayload }
>(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const data: ApiResponse<null> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Logout failed',
          status: response.status,
          error: data.error,
        });
      }
      return data;
    } catch (err) {
      const error = err as Error;
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);


// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
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
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Login failed';
      })
      // Verify email
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const data = action.payload.data;
        if (data?.user) {
          state.user = data.user;
          state.requiresVerification = false;
          state.registeredEmail = null;
          state.isAuthenticated = true;
        }
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.error = action.payload?.message || 'Verification failed';
      })
      // Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(resendOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.isLoading = false;
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
         state.isAuthHydrated = true;                 // ← set true here on success
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to fetch user';
        state.user = null;
        state.isAuthenticated = false;
         state.isAuthHydrated = true;                 // ← set true here on success
      })
      // ...
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // Reset all auth state on logout
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
        state.requiresVerification = false;
        state.registeredEmail = null;
        state.verificationLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.message || 'Logout failed';
      })


  },
});

// Export actions
export const {
  clearError
} = authSlice.actions;

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectRequiresVerification = (state: { auth: AuthState }) => state.auth.requiresVerification;
export const selectRegisteredEmail = (state: { auth: AuthState }) => state.auth.registeredEmail;
export const selectVerificationLoading = (state: { auth: AuthState }) => state.auth.isLoading;

export default authSlice.reducer;
