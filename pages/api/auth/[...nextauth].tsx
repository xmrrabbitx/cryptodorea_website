import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {connect} from "../db"
import CredentialsProvider from "next-auth/providers/credentials"
import UserCredentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt" 

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
            
            return user[0]
          }
         
        }
        // Return null if user data could not be retrieved
        return null
        
      }
    })
  ],
  
}

export default NextAuth(authOptions)