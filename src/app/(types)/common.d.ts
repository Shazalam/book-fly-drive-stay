// =====================
// Auth Rejected Payload
// =====================
export interface RejectedPayload {
    message: string;
    status: number;
    error?: unknown;
}

// =====================
// JWT Payload
// =====================
export interface JWTPayload {
    userId: string;
}

// =====================
// API Response Wrapper
// =====================
export interface ApiResponse<T = unknown> {
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

// =====================
// Error payloads/types
// =====================
export interface ErrorDetail {
  code: string;
  message: string;
  details?: unknown;
}

export interface ApiError {
  message: string;
  error?: ErrorDetail | string;
  status?: number;
  stack?: string;
}
