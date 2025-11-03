import dbConnect from '@/app/(lib)/db';
import { ApiResponse, ErrorCode, HttpStatus } from '@/app/(lib)/utils/api-response';
import { generateToken } from '@/app/(lib)/utils/utils';
import User from '@/app/models/User';
import VerificationToken from '@/app/models/VerificationToken';
import { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { email, otp } = body;

    // Validation
    if (!email || !otp) {
      return ApiResponse.badRequest(
        'Email and OTP are required',
        ErrorCode.REQUIRED_FIELD,
        { missingFields: [!email ? 'email' : '', !otp ? 'otp' : ''].filter(Boolean) }
      );
    }

    // Find the verification token
    const token = await VerificationToken.findOne({
      email: email.toLowerCase(),
      token: otp,
    });

    if (!token) {
      return ApiResponse.badRequest(
        'Invalid OTP',
        ErrorCode.INVALID_OPERATION,
        { suggestion: 'Please request a new OTP if this one has expired' }
      );
    }

    // Check if token is expired
    if (token.expires < new Date()) {
      await VerificationToken.deleteOne({ _id: token._id });
      return ApiResponse.badRequest(
        'OTP has expired',
        ErrorCode.INVALID_OPERATION,
        { suggestion: 'Please request a new OTP' }
      );
    }

    // Find user and mark as verified
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return ApiResponse.notFound(
        'User not found',
        ErrorCode.NOT_FOUND,
        { email: email.toLowerCase() }
      );
    }

    // Update user verification status
    user.emailVerified = true;
    await user.save();

    // Delete the used token
    await VerificationToken.deleteOne({ _id: token._id });

    // Generate JWT token
    const authToken = generateToken(user._id.toString());

    // Create success response
    const response = ApiResponse.success(
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
        },
        // Optionally include token in response if needed for mobile apps
        // token: authToken
      },
      'Email verified successfully',
      HttpStatus.OK,
      {
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      }
    );

    // Set HTTP-only cookie for web clients
    response.cookies.set('auth-token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
    });

    // Add additional security headers
    response.headers.set('X-Auth-Type', 'jwt');
    response.headers.set('X-User-Id', user._id.toString());

    return response;

  } catch (error: unknown) {
    console.error('OTP verification error:', error);
  
  return ApiResponse.internalError(
    'Failed to verify OTP',
    ErrorCode.INTERNAL_ERROR,
    {
      systemError: process.env.NODE_ENV === 'development' 
        ? (error instanceof Error ? error.message : String(error))
        : undefined,
      action: 'Please try again or contact support'
    }
  );
  }
}