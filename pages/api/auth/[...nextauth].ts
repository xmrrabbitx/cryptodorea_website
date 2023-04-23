import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {connect} from "../db"
import CredentialsProvider from "next-auth/providers/credentials"
import UserCredentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt" 
import { randomUUID, randomBytes } from "crypto"


interface Session {
  user?: {
    name: string,
    email: string,
    image: string,
  };
  expires: string;
}

export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any) {
   
        const db = await connect(); // connect to your database
        const user:any = await db.query(
          "SELECT * FROM users WHERE email = ?",
          [credentials.email]
        );
        
        const matchpass = await bcrypt.compare(credentials.password, user[0][0]["password"]);
        
        if (user[0] && user[0].length > 0) {
          
          if(matchpass){
                                 
            return user[0][0];

          }
         
        }
        // Return null if user data could not be retrieved
        return null
        
      }
    })
  ],

  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",
  
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days
    maxAge: 2 * 60 * 60, // 30 days
  
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
    
    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },

  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },

  callbacks: {

    async session<T extends Session>(session:any) {
    
      
      let email = session.session.user.email;
      const db = await connect(); // connect to your database
        const user:any = await db.query(
          "SELECT * FROM users WHERE email = ?",
          email
        );


        let username = user[0][0]['username']
        session.session.user.name = username;
      //session.session.user.image = "";

      return session

    },

  }
  
  
}

export default NextAuth(authOptions)