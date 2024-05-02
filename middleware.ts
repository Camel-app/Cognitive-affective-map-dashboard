import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/experiments', '/experiment', '/logout'];

export default function middleware(req: NextRequest) {
  const cookies = req.cookies.get('CAM-API-KEY')?.value;
  // TODO: check key validity

  if (!cookies && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin);
    console.log('Redirecting');

    return NextResponse.redirect(absoluteURL.toString());
  }
}
