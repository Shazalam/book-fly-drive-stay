
import dbConnect from '@/app/(lib)/db';
import { generateOtpEmail, sendEmail } from '@/app/(lib)/email';
import { ApiResponse, ErrorCode } from '@/app/(lib)/utils/api-response';
import { generateOtp } from '@/app/(lib)/utils/utils';
import { RegisterApiData, registerApiSchema } from '@/app/(lib)/validators/userValidator';
import { RegisterResponseData, UserResponse } from '@/app/(types)/user';
import User from '@/app/models/User';
import VerificationToken from '@/app/models/VerificationToken';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const rawBody = await request.json();

    const parseResult = registerApiSchema.safeParse(rawBody);
    if (!parseResult.success) {
      // Return Zod errors in generic format for your frontend
      return ApiResponse.badRequest(
        "Invalid input",
        ErrorCode.VALIDATION_ERROR,
        parseResult.error.flatten().fieldErrors
      );
    }

    const body: RegisterApiData = parseResult.data; // Now TypeScript and runtime agree!

    const { firstName, lastName, email, password } = body;

    // Validation
    if (!firstName?.trim()) {
      return ApiResponse.badRequest(
        'First name is required',
        ErrorCode.REQUIRED_FIELD,
        { field: 'firstName' }
      );
    }

    if (!lastName?.trim()) {
      return ApiResponse.badRequest(
        'Last name is required',
        ErrorCode.REQUIRED_FIELD,
        { field: 'lastName' }
      );
    }

    if (!email?.trim()) {
      return ApiResponse.badRequest(
        'Email is required',
        ErrorCode.REQUIRED_FIELD,
        { field: 'email' }
      );
    }

    if (!password) {
      return ApiResponse.badRequest(
        'Password is required',
        ErrorCode.REQUIRED_FIELD,
        { field: 'password' }
      );
    }

    if (password.length < 6) {
      return ApiResponse.badRequest(
        'Password must be at least 6 characters',
        ErrorCode.INVALID_PASSWORD,
        { minLength: 6 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ApiResponse.badRequest(
        'Please provide a valid email address',
        ErrorCode.INVALID_EMAIL,
        { field: 'email' }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return ApiResponse.conflict(
        'An account with this email already exists',
        ErrorCode.ALREADY_EXISTS,
        { email }
      );
    }

    // Create user
    const user: UserResponse = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password
    });

    // Generate OTP
    const otp = generateOtp();
    const expires = new Date(Date.now() + 1 * 60 * 1000); // 10 minutes

    // Delete any existing tokens for this email
    await VerificationToken.deleteMany({ email: email.toLowerCase() });

    // Create verification token
    await VerificationToken.create({
      email: email.toLowerCase(),
      token: otp,
      expires,
    });

    // Send verification email
    try {
      await sendEmail({
        to: email,
        subject: 'Verify Your Email - BookFlyDriveStay',
        html: generateOtpEmail(otp, `${firstName} ${lastName}`),
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue even if email fails for development
    }

    return ApiResponse.created<RegisterResponseData>(
      {
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        requiresVerification: true,
        otpExpires: expires,
      },
      'Account created successfully. Please check your email for verification code.'
    );

  } catch (error: unknown) {
    console.error('Registration error:', error);

    // Safe way to get error message from unknown type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return ApiResponse.internalError(
      'Unable to create account. Please try again.',
      ErrorCode.DATABASE_ERROR,
      process.env.NODE_ENV === 'development' ? { error: errorMessage } : undefined
    );
  }
}