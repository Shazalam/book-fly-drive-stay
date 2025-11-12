// app/api/auth/me/route.ts
import dbConnect from '@/app/(lib)/db';
import { ApiResponse, ErrorCode, HttpStatus } from '@/app/(lib)/utils/api-response';
import User from '@/app/models/User';
import { NextRequest } from 'next/server';
import { verifyToken } from '@/app/(lib)/utils/utils';
import { JWTPayload } from '@/app/(types)/common';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // 1. Extract cookie
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return ApiResponse.unauthorized(
        'Authorization token missing',
        ErrorCode.UNAUTHENTICATED
      );
    }

    // 2. Verify JWT and get user ID
    let payload: JWTPayload;
    try {
      payload = verifyToken(token) as JWTPayload;
    } catch {
      return ApiResponse.unauthorized(
        'Invalid or expired token',
        ErrorCode.INVALID_TOKEN
      );
    }

    // If extra safety, check payload structure:
    if (!payload?.userId) {
      return ApiResponse.unauthorized('Invalid token payload', ErrorCode.INVALID_TOKEN);
    }

    // 3. Find the user
    const user = await User.findById(payload.userId);
    if (!user) {
      return ApiResponse.notFound(
        'User not found',
        ErrorCode.NOT_FOUND
      );
    }

    // 4. Return user info
    return ApiResponse.success(
      {
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        }
      },
      'Current user info',
      HttpStatus.OK
    );

  } catch (error: unknown) {
    console.error('Get Current User error:', error);
    return ApiResponse.internalError(
      'Failed to get user info',
      ErrorCode.INTERNAL_ERROR,
      process.env.NODE_ENV === 'development'
        ? { error: error instanceof Error ? error.message : String(error) }
        : undefined
    );
  }
}
