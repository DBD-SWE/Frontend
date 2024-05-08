import { getMe } from '@/lib/actions/auth';
import axios from '@/lib/api/axios';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const res = await getMe();
  if (res === 401) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
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
