import { NextRequest, NextResponse } from 'next/server';

const SERVER_URL = process.env.NEXT_SERVER_URL;
const BACKEND_URL = process.env.BACKEND_URL;

export async function middleware(request: NextRequest) {
  const { accessToken, refreshToken } = extractTokens(request);

  // if the access token or refresh token is missing, redirect to login
  if (!accessToken || !refreshToken) {
    return redirectToLogin();
  }

  // if the access token is valid, continue to the next middleware otherwise refresh the token
  if (await isTokenValid(accessToken)) {
    return NextResponse.next();
  } else {
    return handleTokenRefresh(refreshToken);
  }
}

// Function to handle token refresh
async function handleTokenRefresh(refreshToken: string) {
  // get a new access token using the refresh token
  const refreshResponse = await fetch(`${BACKEND_URL}/auth/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  });

  // if the refresh was successful, set the new access token in the cookies otherwise redirect to login
  if (refreshResponse.ok) {
    const { access: newAccessToken } = await refreshResponse.json();
    const response = NextResponse.next();
    response.cookies.set('access', newAccessToken);
    return response;
  } else return redirectToLogin();
}

// Function to check if the token is valid
async function isTokenValid(accessToken: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/userinfo/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.status === 200;
  } catch (err) {
    console.error('Error checking token validity', err);
    return false;
  }
}

// Function to redirect to the login page
function redirectToLogin() {
  return NextResponse.redirect(`${SERVER_URL}/login`);
}

// Function to extract tokens from the request object
function extractTokens(request: NextRequest) {
  return {
    accessToken: request.cookies.get('access')?.value,
    refreshToken: request.cookies.get('refresh')?.value,
  };
}

// Matchers for the middleware
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
