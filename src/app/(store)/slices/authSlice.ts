import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginFormData, RegisterApiData, ResendOtpData, VerifyOtpRequest } from '@/app/(lib)/validators/userValidator';
import { LoginResponseData, RegisterResponseData, ResendOtpResponseData, UserResponse, VerifyOtpResponse } from '@/app/(types)/user';
import { ApiResponse, RejectedPayload } from '@/app/(types)/common';

// Auth state interface
interface AuthState {
  user: UserResponse | null;
  isAuthenticated: boolean;
  requiresVerification: boolean;
  registeredEmail: string | null;
  isAuthHydrated: boolean;          // ← add this!

  // ADD THIS ↓
  otpExpires: Date | null;  // or Date | null if you prefer

  // Per-action states!
  loginLoading: boolean;
  loginError: string | null;
  loginSuccessMsg: string | null;

  registerLoading: boolean;
  registerError: string | null;
  registerSuccessMsg: string | null;

  verifyOtpLoading: boolean;
  verifyOtpError: string | null;
  verifyOtpSuccessMsg: string | null;

  logoutLoading: boolean;
  logoutError: string | null;
  logoutSuccessMsg: string | null;

  getCurrentUserLoading: boolean;
  getCurrentUserError: string | null;
  getCurrentUserSuccessMsg: string | null;

  resendOtpLoading: boolean;
  resendOtpError: string | null;
  resendOtpSuccessMsg: string | null;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  requiresVerification: false,
  registeredEmail: null,
  isAuthHydrated: false,       // ← add this!

  // ADD THIS ↓
  otpExpires: null,  // or Date | null if you prefer

  // Per-action states!
  loginLoading: false,
  loginError: null,
  loginSuccessMsg: null,

  registerLoading: false,
  registerError: null,
  registerSuccessMsg: null,

  verifyOtpLoading: false,
  verifyOtpError: null,
  verifyOtpSuccessMsg: null,

  logoutLoading: false,
  logoutError: null,
  logoutSuccessMsg: null,

  getCurrentUserLoading: false,
  getCurrentUserError: null,
  getCurrentUserSuccessMsg: null,

  resendOtpLoading: false,
  resendOtpError: null,
  resendOtpSuccessMsg: null,
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
  LoginFormData,
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

      console.log("login User =>", data)
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
  ApiResponse<ResendOtpResponseData>,
  ResendOtpData,
  { rejectValue: RejectedPayload }
>(
  'auth/resendOtp',
  async (email, { rejectWithValue }) => {
    try {

      console.log("slice email =>", email)
      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      });

      const data: ApiResponse<ResendOtpResponseData> = await response.json();

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
    // Global clear for all errors (good for route changes/unmount)
    clearAllErrors: (state) => {
      state.loginError = null;
      state.registerError = null;
      state.verifyOtpError = null;
      state.logoutError = null;
      state.getCurrentUserError = null;
      state.resendOtpError = null;
      // ...add any future error fields here as well
    },
    // Global clear for all success messages
    clearAllSuccess: (state) => {
      state.loginSuccessMsg = null;
      state.registerSuccessMsg = null;
      state.verifyOtpSuccessMsg = null;
      state.logoutSuccessMsg = null;
      state.getCurrentUserSuccessMsg = null;
      state.resendOtpSuccessMsg = null;
      // ...add any future success fields here as well
    },
    // Optional: clear error per-action
    clearLoginError: (state) => { state.loginError = null; },
    clearRegisterError: (state) => { state.registerError = null; },
    clearVerifyOtpError: (state) => { state.verifyOtpError = null; },
    clearLogoutError: (state) => { state.logoutError = null; },
    clearResendOtpError: (state) => { state.resendOtpError = null; },
    clearGetCurrentUserError: (state) => { state.getCurrentUserError = null; },

    // Optional: clear success per-action
    clearLoginSuccess: (state) => { state.loginSuccessMsg = null; },
    clearRegisterSuccess: (state) => { state.registerSuccessMsg = null; },
    clearVerifyOtpSuccess: (state) => { state.verifyOtpSuccessMsg = null; },
    clearLogoutSuccess: (state) => { state.logoutSuccessMsg = null; },
    clearResendOtpSuccess: (state) => { state.resendOtpSuccessMsg = null; },
    clearGetCurrentUserSuccess: (state) => { state.getCurrentUserSuccessMsg = null; },

    // (Optional) for toast-driven resets on navigation:
    resetAuthUi: (state) => {
      // This can clear all error/success/loading in one reducer if you want
      state.loginError = null;
      state.registerError = null;
      state.verifyOtpError = null;
      state.logoutError = null;
      state.getCurrentUserError = null;
      state.resendOtpError = null;
      state.loginSuccessMsg = null;
      state.registerSuccessMsg = null;
      state.verifyOtpSuccessMsg = null;
      state.logoutSuccessMsg = null;
      state.getCurrentUserSuccessMsg = null;
      state.resendOtpSuccessMsg = null;
      state.loginLoading = false;
      state.registerLoading = false;
      state.verifyOtpLoading = false;
      state.logoutLoading = false;
      state.getCurrentUserLoading = false;
      state.resendOtpLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.registerLoading = true;
        state.registerError = null;
        state.requiresVerification = false;
        state.registerSuccessMsg = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.registerError = null;
        const data = action.payload.data;
        if (data?.requiresVerification) {
          state.requiresVerification = true;
          state.registeredEmail = data.user.email;
          state.registerSuccessMsg = action.payload.message || "Registered successfully!";
          const expires = data?.otpExpires;
          state.otpExpires = expires ? new Date(expires) : null;
        } else if (data?.user) {
          state.isAuthenticated = true;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload?.message || 'Registration failed';
        state.registerSuccessMsg = null;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
        state.loginError = null;
        state.requiresVerification = false;
        state.loginSuccessMsg = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginError = null;
        state.loginSuccessMsg = action.payload.message
        const data = action.payload.data;
        if (data?.requiresVerification) {
          state.requiresVerification = true;
          state.registeredEmail = data.user.email;
        }

        if (!data?.requiresVerification && data?.user) {
          state.user = data.user;
          state.requiresVerification = false;
          state.isAuthenticated = true;
          state.registeredEmail = null;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload?.message || 'Login failed';
        state.loginSuccessMsg = null;
      })
      // Verify email
      .addCase(verifyEmail.pending, (state) => {
        state.verifyOtpLoading = true;
        state.verifyOtpError = null;
        state.verifyOtpSuccessMsg = null
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.verifyOtpLoading = false;
        state.verifyOtpError = null;

        const data = action.payload.data;
        if (data?.user) {
          state.user = data.user;
          state.requiresVerification = false;
          state.registeredEmail = null;
          state.isAuthenticated = true;
          state.verifyOtpSuccessMsg = action.payload.message || "Email verified!";
        }
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.verifyOtpLoading = false;
        state.isAuthenticated = true;
        state.verifyOtpError = action.payload?.message || 'Verification failed';
        state.verifyOtpSuccessMsg = null
      })
      // Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.resendOtpLoading = true;
        state.resendOtpError = null;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.resendOtpLoading = false;
        state.resendOtpError = null;
        state.resendOtpSuccessMsg = action.payload.message;
        const expires = action.payload.data?.otpExpires;
        state.otpExpires = expires ? new Date(expires) : null;
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.resendOtpLoading = false;
        state.resendOtpError = action.payload?.message || 'Failed to resend OTP';
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.getCurrentUserLoading = true;
        state.getCurrentUserError = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.getCurrentUserLoading = false;
        state.getCurrentUserError = null;
        state.user = action.payload.data?.user ?? null;
        state.isAuthenticated = !!action.payload.data?.user;
        state.isAuthHydrated = true;                 // ← set true here on success
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.getCurrentUserLoading = false;
        state.getCurrentUserError = action.payload ?? 'Failed to fetch user';
        state.user = null;
        state.isAuthenticated = false;
        state.isAuthHydrated = true;                 // ← set true here on success
      })
      // ...
      .addCase(logoutUser.pending, (state) => {
        state.logoutLoading = true;
        state.logoutError = null;
        state.logoutSuccessMsg = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        // Reset all auth state on logout
        state.logoutLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.logoutError = null;
        state.requiresVerification = false;
        state.registeredEmail = null;
        state.logoutSuccessMsg = action.payload.message || "Logout Successful!";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.logoutLoading = false;
        state.logoutError = action.payload?.message || 'Logout failed';
        state.logoutSuccessMsg = null;
      })


  },
});

// Export actions
// Export actions (place after your createSlice definition)
export const {
  clearAllErrors,
  clearAllSuccess,
  clearLoginError,
  clearRegisterError,
  clearVerifyOtpError,
  clearLogoutError,
  clearResendOtpError,
  clearGetCurrentUserError,
  clearLoginSuccess,
  clearRegisterSuccess,
  clearVerifyOtpSuccess,
  clearLogoutSuccess,
  clearResendOtpSuccess,
  clearGetCurrentUserSuccess,
  resetAuthUi // if using the global UI reset/cleanup
} = authSlice.actions;


// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectRequiresVerification = (state: { auth: AuthState }) => state.auth.requiresVerification;
export const selectRegisteredEmail = (state: { auth: AuthState }) => state.auth.registeredEmail;

export default authSlice.reducer;
