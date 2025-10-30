// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const { pathname, search } = request.nextUrl;

  // Define public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/verify-otp',
    '/forgot-password',
    '/reset-password',
    '/search',
    '/search/:path*',
    '/cars',
    '/cars/:path*',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ];

  // Define auth routes that should redirect to original destination if user is logged in
  const authRoutes = ['/login', '/register'];

  // Define protected routes that require authentication
  const protectedRoutes = [
    "/search/cars/:path*",
    "/search/hotels/:path*",
    "/search/flights/:path*",
    "/search/cruises/:path*"
  ];

  // Check if current route is public
  const isPublicRoute = publicRoutes.some(route => {
    if (route.includes(':path*')) {
      const baseRoute = route.replace('/:path*', '');
      return pathname.startsWith(baseRoute);
    }
    return pathname === route;
  });

  // Check if current route is auth route
  const isAuthRoute = authRoutes.includes(pathname);

  // Check if current route is protected
  const isProtectedRoute = protectedRoutes.some(route => {
    if (route.includes(':path*')) {
      const baseRoute = route.replace('/:path*', '');
      return pathname.startsWith(baseRoute);
    }
    return pathname === route;
  });

  // User is logged in
  if (token) {
    // If user is on auth routes, redirect to their intended destination or search
    if (isAuthRoute) {
      // Get the redirect URL from query params or use default
      const redirectTo = request.nextUrl.searchParams.get('redirect') || '/search/cars/:path*';
      
      // Ensure the redirect URL is safe (starts with /)
      if (redirectTo.startsWith('/')) {
        return NextResponse.redirect(new URL(redirectTo, request.url));
      }
      
      // Fallback to safe redirect
      return NextResponse.redirect(new URL('/search/cars/car-1', request.url));
    }

    // Allow access to all other routes
    return NextResponse.next();
  }

  // User is not logged in
  else {
    // If user is trying to access protected routes, redirect to login with return URL
    if (isProtectedRoute) {
      const loginUrl = new URL('/login', request.url);
      
      // Store the complete intended destination (path + query params)
      const returnUrl = pathname + search;
      loginUrl.searchParams.set('redirect', returnUrl);
      
      return NextResponse.redirect(loginUrl);
    }

    // Allow access to public and auth routes
    if (isPublicRoute || isAuthRoute) {
      return NextResponse.next();
    }

    // For any other unknown routes, allow access
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};