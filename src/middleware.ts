import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access')?.value;
  const refreshToken = request.cookies.get('refresh')?.value;

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(`http://localhost:3000/login`);
  }

  try {
    const getUserInfo = await fetch(
      `${process.env.BACKEND_URL}/auth/userinfo/`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (getUserInfo.status === 401) {
      const refreshResponse = await fetch(
        `${process.env.BACKEND_URL}/auth/token/refresh/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        },
      );
      if (refreshResponse.status === 200) {
        const response = NextResponse.next();
        const newAccessToken = await refreshResponse.json();
        request.cookies.set('access', newAccessToken.access);
        response.cookies.set('access', newAccessToken.access);
        return response;
      } else {
        return NextResponse.redirect(`http://localhost:3000/login`);
      }
    } else if (getUserInfo.status === 200) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(`http://localhost:3000/login`);
    }
  } catch (err) {
    return NextResponse.redirect(`http://localhost:3000/login`);
  }
}

export const config = {
  matcher: [
    '/',
    '/activity-log/:path*',
    '/edit-roles/:path*',
    '/roles/:path*',
    '/services/:path*',
    '/users/:path*',
    '/view-roles/:path*',
  ],
};
