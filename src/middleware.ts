import { NextRequest, NextResponse } from 'next/server';

const SERVER_URL = process.env.NEXT_SERVER_URL;
const BACKEND_URL = process.env.BACKEND_URL;

export async function middleware(request: NextRequest) {
  const { accessToken, refreshToken } = extractTokens(request);
  const { pathname } = request.nextUrl;

  // if the user is on the onboarding path and is not authenticated, redirect to login
  if (pathname.startsWith('/onboarding') && !accessToken) {
    return redirectToLogin();
  }

  // if the access token or refresh token is missing and the path is not onboarding, redirect to login
  if ((!accessToken || !refreshToken) && !pathname.startsWith('/onboarding')) {
    return redirectToLogin();
  }

  const tokenValidationResult = await isTokenValid(accessToken!!);

  // Check the result of token validation
  if (tokenValidationResult === true) {
    // Redirect to home page if the user is authenticated and not already on the home page
    if (pathname !== '/') {
      return NextResponse.redirect(`${SERVER_URL}/`);
    }
    return NextResponse.next();
  } else if (
    tokenValidationResult === 'No UserInfo matches the given query.' &&
    pathname !== '/onboarding'
  ) {
    return redirectToOnboarding();
  } else {
    return handleTokenRefresh(refreshToken!!);
  }
}

// handle the error with try catch
// Function to handle token refresh
async function handleTokenRefresh(refreshToken: string) {
  try {
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
  } catch (err) {
    console.error('Error refreshing token', err);
    return redirectToLogin();
  }
}

// Function to check if the token is valid
async function isTokenValid(accessToken: string) {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/userinfo/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      return true;
    } else {
      const data = await response.json();
      if (data.detail === 'No UserInfo matches the given query.') {
        return 'No UserInfo matches the given query.';
      }
      return false;
    }
  } catch (err) {
    console.error('Error checking token validity', err);
    return false;
  }
}

// Function to redirect to the login page
function redirectToLogin() {
  return NextResponse.redirect(`${SERVER_URL}/login`);
}

// Function to redirect to the placeholder page
function redirectToOnboarding() {
  return NextResponse.redirect(`${SERVER_URL}/onboarding`);
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
    '/onboarding/:path*',
    '/login/:path*',
  ],
};
