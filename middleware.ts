import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const secretKey:any = process.env.JwtSecretKey

  const cookies = request.cookies;
  const authCookie:any = cookies.get("authToken");
  

  if(authCookie){

    const authCookieValue:any = authCookie.value;


        const check = fetch(`http://localhost:3000/api/auth/checkAuth?authCookie=${authCookieValue}&&secretKey=${secretKey}`)

        check.then(data=>{
          const res = data.json()

          res.then(data=>{
            if(data.verifyStatus){
                return true
            }
          })
        })
    
  }else{
      return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
  
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};