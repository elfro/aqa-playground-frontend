import { auth } from '@/auth';

const publicRoutes = ['/'];
const authRoutes = ['/login', '/register'];
const authProtectedRouts = ['/profile'];
const login_redirect_route = '/profile';
const apiAuthPrefix = '/api/auth';

export default auth(async (request) => {
  const { nextUrl } = request;
  const isLoggedIn = !!request.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAuthProtectedRoute = authProtectedRouts.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isPublicRoute) {
    return;
  }

  if (nextUrl.pathname.endsWith('/shop')) {
    return Response.redirect(new URL('/shop/products', nextUrl));
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(login_redirect_route, nextUrl));
    }

    return;
  }

  if (isAuthProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL('/login', nextUrl));
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
