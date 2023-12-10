import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { error } from 'console';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const secretKey:any = process.env.JwtSecretKey

  const cookies = request.cookies;
  let authCookie:any = cookies.get("authToken");
  let response = NextResponse.next();
/*
    if(authCookie){

      let authCookieValue:any = authCookie.value;

          const check = fetch(`http://localhost:3000/api/auth/checkAuth?authCookie=${authCookieValue}&&secretKey=${secretKey}`)
          return new Promise((resolve:any) => {
            check.then(data=>{
              const res = data.json()          
              res.then(data=>{
      
                if(data.authCheck){
                  const dataUserJson = JSON.stringify(data.authCheck);
                  response.cookies.set({name:'user', value:`${dataUserJson}`});
                  
                  resolve(response)
                }
              })
            })
          })

    }else{
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
*/
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};