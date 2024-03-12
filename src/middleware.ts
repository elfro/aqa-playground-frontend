import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const username = request.cookies.get('username')?.value;

  if (accessToken && request.nextUrl.pathname.startsWith('/signin')) {
    console.log({ username });
    return Response.redirect(new URL('/', request.url));
  }
}
