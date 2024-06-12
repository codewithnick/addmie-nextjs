import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const adminsecret = process.env.ADMIN_SECRET ?? "";

export async function authenticateJWT(req: NextRequest) {
  const username = req.cookies.get('username')?.value;
  const bearer = req.cookies.get('token')?.value ?? '';
  const token = bearer?.split(' ')[1];
  
  if (!username || !token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
  
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(adminsecret));
    if(payload.username!=username)return NextResponse.redirect(new URL('/signin', req.url));

    console.log("Middleware says:", username, " is logged in");
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
}
