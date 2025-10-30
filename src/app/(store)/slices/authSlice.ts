import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RegisterApiData } from '@/app/(lib)/validators/userValidator';
import { AuthApiResponse, RegisterResponseData, UserResponse } from '@/app/(types)/user';

// Async thunk for registration
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData: RegisterApiData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    } catch (error: any) {
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data: AuthApiResponse<{ user: UserResponse; token: string }> = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Login failed',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for email verification
export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async (verificationData: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    } catch (error: any) {
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Async thunk for resend OTP
export const resendOtp = createAsyncThunk(
  'auth/resendOtp',
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: AuthApiResponse = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || 'Failed to resend OTP',
          status: response.status,
          error: data.error,
        });
      }

      return data;
    } catch (error: any) {
      return rejectWithValue({
        message: error.message || 'Network error',
        status: 500,
      });
    }
  }
);

// Auth state interface
interface AuthState {
  user: UserResponse | null;
  token: string | null;
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
  token: null,
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
    // Clear errors
    clearError: (state) => {
      state.error = null;
    },
    
    // Set authentication state
    setAuth: (state, action: PayloadAction<{ user: UserResponse; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    
    // Logout user
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.requiresVerification = false;
      state.registeredEmail = null;
      // Clear from localStorage if you're using it
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    },
    
    // Set verification required
    setVerificationRequired: (state, action: PayloadAction<string>) => {
      state.requiresVerification = true;
      state.registeredEmail = action.payload;
    },
    
    // Clear verification state
    clearVerification: (state) => {
      state.requiresVerification = false;
      state.registeredEmail = null;
    },

    // Initialize auth from storage (if using localStorage)
    initializeAuth: (state) => {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        const userData = localStorage.getItem('user_data');
        
        if (token && userData) {
          try {
            state.token = token;
            state.user = JSON.parse(userData);
            state.isAuthenticated = true;
          } catch (error) {
            // Clear invalid data
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_data');
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Register user cases
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.requiresVerification = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        if (action.payload.data?.requiresVerification) {
          state.requiresVerification = true;
          state.registeredEmail = action.payload.data.user.email;
        } else if (action.payload.data?.user) {
          state.user = action.payload.data.user;
          state.isAuthenticated = true;
          // Store in localStorage if needed
          if (typeof window !== 'undefined') {
            localStorage.setItem('user_data', JSON.stringify(action.payload.data.user));
          }
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as any)?.message || 'Registration failed';
        state.requiresVerification = false;
        state.registeredEmail = null;
      })

      // Login user cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        if (action.payload.data?.user && action.payload.data?.token) {
          state.user = action.payload.data.user;
          state.token = action.payload.data.token;
          state.isAuthenticated = true;
          
          // Store in localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('auth_token', action.payload.data.token);
            localStorage.setItem('user_data', JSON.stringify(action.payload.data.user));
          }
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as any)?.message || 'Login failed';
      })

      // Verify email cases
      .addCase(verifyEmail.pending, (state) => {
        state.verificationLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.verificationLoading = false;
        state.error = null;
        
        if (action.payload.data?.user) {
          state.user = action.payload.data.user;
          state.requiresVerification = false;
          state.registeredEmail = null;
          state.isAuthenticated = true;
          
          // Update localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('user_data', JSON.stringify(action.payload.data.user));
          }
        }
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.verificationLoading = false;
        state.error = (action.payload as any)?.message || 'Verification failed';
      })

      // Resend OTP cases
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
        state.error = (action.payload as any)?.message || 'Failed to resend OTP';
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
  initializeAuth
} = authSlice.actions;

// Export selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth;
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.isLoading;
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;
export const selectRequiresVerification = (state: { auth: AuthState }) => state.auth.requiresVerification;
export const selectRegisteredEmail = (state: { auth: AuthState }) => state.auth.registeredEmail;
export const selectVerificationLoading = (state: { auth: AuthState }) => state.auth.verificationLoading;

export default authSlice.reducer;