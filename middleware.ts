import { NextResponse, NextRequest } from 'next/server';
import { authenticateJWT } from './middlewares/authenticate';

export function middleware(req: NextRequest) {
  let response = authenticateJWT(req);
  if (response.status !== 200) {
    return response;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/user'], 
};
