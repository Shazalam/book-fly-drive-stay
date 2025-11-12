import { ApiResponse, ErrorCode, HttpStatus } from "@/app/(lib)/utils/api-response";

export async function POST() {
  try {
    // Invalidate cookie by setting it to '' and maxAge=0
    const response = ApiResponse.success(
      null,
      "Logged out successfully",
      HttpStatus.OK
    );

    response.cookies.set('auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    return ApiResponse.internalError(
      "Failed to logout. Please try again.",
      ErrorCode.INTERNAL_ERROR,
      process.env.NODE_ENV === "development"
        ? { error: error instanceof Error ? error.message : String(error) }
        : undefined
    );
  }
}
