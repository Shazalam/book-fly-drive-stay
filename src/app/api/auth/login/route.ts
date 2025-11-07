// app/api/auth/login/route.ts
import dbConnect from '@/app/(lib)/db';
import { ApiResponse, ErrorCode } from '@/app/(lib)/utils/api-response';
import User from '@/app/models/User';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const { email, password } = await request.json();
        console.log("login crediential =>", email, password)

        
        // Validation
        if (!email?.trim()) {
            return ApiResponse.badRequest(
                'Email is required',
                ErrorCode.REQUIRED_FIELD,
            );
        }

        if (!password) {
            return ApiResponse.badRequest(
                'Password is required',
                ErrorCode.REQUIRED_FIELD,
            );
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return ApiResponse.badRequest(
                'Please provide a valid email address',
                ErrorCode.INVALID_EMAIL,
            );
        }

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return ApiResponse.unauthorized(
                "Invalid email or password",
                ErrorCode.INVALID_CREDENTIALS
            );
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return ApiResponse.unauthorized(
                "Invalid email or password",
                ErrorCode.INVALID_CREDENTIALS
            );
        }
        // Optionally set httpOnly cookie here, or return token for SPA Redux use

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
                },
                requiresVerification: true,
            },
            "Login successful"
        );
    } catch (error: unknown) {
        console.error('Login error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return ApiResponse.internalError(
            'Unable to login. Please try again.',
            ErrorCode.DATABASE_ERROR,
            process.env.NODE_ENV === 'development' ? { error: errorMessage } : undefined
        );
    }
}
