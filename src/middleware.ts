import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = [
  '/', '/auth/login', '/auth/register', '/auth/verify-otp', '/auth/forgot-password', '/auth/reset-password',
  '/about', '/contact', '/privacy', '/terms',
  '/search', '/search/:path*',
  '/car-rentals', '/car-rentals/:path*',
  '/hotels', '/hotels/:path*',
  '/flights', '/flights/:path*',
  '/cruise', '/cruise/:path*',
];
const protectedRoutes = [
  "/dashboard", "/profile", "/admin",
  "/search/cars/:path*", "/search/flights/:path*", "/search/hotels/:path*", "/search/cruises/:path*"
];

const authRoutes = ['/auth/login', '/auth/register'];

function matchesWildcard(array: string[], path: string) {
  return array.some(route => route.includes(':path*') ? path.startsWith(route.replace('/:path*', '')) : path === route);
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const { pathname, search } = request.nextUrl;

  // Logged in users:
  if (token) {
    // If user tries to access /auth/login or /auth/register while logged in, redirect to intended dest or homepage
    if (authRoutes.includes(pathname)) {
      const redirectTo = request.nextUrl.searchParams.get('redirect') || '/';
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }
    return NextResponse.next();
  }

  // Not logged in:
  // Only restrict protected routes! Browsing is always public!
  if (matchesWildcard(protectedRoutes, pathname)) {
    const loginUrl = new URL('/auth/login', request.url);
    const originalDestination = pathname + search;
    loginUrl.searchParams.set('redirect', originalDestination);
    return NextResponse.redirect(loginUrl);
  }

  // If on /auth/login or /auth/register and user came from a protected route, preserve `redirect`
  if (authRoutes.includes(pathname)) return NextResponse.next();

  // Always allow public (including car-rentals, hotels, etc)
  if (matchesWildcard(publicRoutes, pathname)) return NextResponse.next();

  // Fallback: allow (static, 404s, etc)
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
