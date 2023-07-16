import jwtDecoder from 'jwt-decode';
import { getSession } from 'next-auth/react';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

type decodedToken = {
  sub?: number;
  role?: string;
  email?: string;
  iat?: number;
  exp?: number;
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const decoded: decodedToken | null = token && jwtDecoder(token.at!);

  if (!token) {
    if (pathname === '/administrador') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (decoded?.role !== 'admin') {
    if (pathname === '/administrador') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  if (token) {
    if (['/login', '/registro'].includes(pathname)) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
}
