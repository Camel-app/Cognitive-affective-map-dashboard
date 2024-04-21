import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/experiments', '/experiment'];

export default function middleware(req: NextRequest) {
  console.log('In the middleware');
  console.log(protectedRoutes.includes(req.nextUrl.pathname));
  const cookies = req.cookies.get('CAM-API-KEY')?.value;

  if (!cookies && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/login', req.nextUrl.origin);
    console.log('Redirecting');

    return NextResponse.redirect(absoluteURL.toString());
  }
}
