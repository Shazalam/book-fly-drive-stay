import dbConnect from '@/app/(lib)/db';
import { ApiResponse, ErrorCode } from '@/app/(lib)/utils/api-response';
import User from '@/app/models/User';
import VerificationToken from '@/app/models/VerificationToken';
import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import { LoginFormData, loginSchema } from '@/app/(lib)/validators/userValidator';
import { generateOtp, generateToken } from '@/app/(lib)/utils/utils';
import { LoginResponseData } from '@/app/(types)/user';
import { generateOtpEmail, sendEmail } from '@/app/(lib)/email';

export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        // Validate and parse request (Zod)
        const rawBody = await request.json();
        const parseResult = loginSchema.safeParse(rawBody);
        if (!parseResult.success) {
            return ApiResponse.badRequest(
                "Invalid input",
                ErrorCode.VALIDATION_ERROR,
                parseResult.error.flatten().fieldErrors
            );
        }
        
        const { email, password }: LoginFormData = parseResult.data;

        // Lookup user (by email, case-insensitive)
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return ApiResponse.unauthorized(
                "Invalid email or password",
                ErrorCode.INVALID_CREDENTIALS
            );
        }

        // Compare candidate password with hashed DB password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return ApiResponse.unauthorized(
                "Invalid email or password",
                ErrorCode.INVALID_CREDENTIALS
            );
        }

        // If not verified, send or resend OTP and require verification
        if (!user.emailVerified) {
            const otp = generateOtp();
            const expires = new Date(Date.now() + 10 * 60 * 1000);

            // Remove old verification tokens and create a new one
            await VerificationToken.deleteMany({ email: email.toLowerCase() });
            await VerificationToken.create({
                email: email.toLowerCase(),
                token: otp,
                expires,
            });

            // Send verification mail (async, always try/catch)
            try {
                await sendEmail({
                    to: email,
                    subject: "Verify Your Login - BookFlyDriveStay",
                    html: generateOtpEmail(otp, `${user.firstName} ${user.lastName}`),
                });
            } catch (e) {
                console.error("Failed to send OTP email:", e);
                // In production you might notify admin or log this elsehwere.
            }

            const responseBody: LoginResponseData = {
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
            };

            return ApiResponse.success<LoginResponseData>(
                responseBody,
                "Email verification required. OTP sent to your email."
            );
        }

        // ---- USER VERIFIED: Generate token and set cookie ----
        const authToken = generateToken(user._id.toString());

        const responseBody: LoginResponseData = {
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                emailVerified: user.emailVerified,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
            requiresVerification:false
        };

        const response = ApiResponse.success<LoginResponseData>(
            responseBody,
            "Login successful."
        );

        // Set HTTP-only auth token
        response.cookies.set('auth-token', authToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 1, // 1 day
            path: '/',
        });

        // Optional: security headers
        response.headers.set("X-Auth-Type", "jwt");
        response.headers.set("X-User-Id", user._id.toString());

        return response;

    } catch (error: unknown) {
        // Full error capture and safe reporting
        const errMsg = error instanceof Error ? error.message : String(error);
        console.error("Login error:", error);
        return ApiResponse.internalError(
            "Unable to login. Please try again.",
            ErrorCode.DATABASE_ERROR,
            process.env.NODE_ENV === "development" ? { error: errMsg } : undefined
        );
    }
} 
