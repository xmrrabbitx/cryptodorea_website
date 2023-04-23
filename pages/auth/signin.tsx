import { useState, useEffect } from 'react';
import { signIn,signOut} from "next-auth/react";
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"

export default function Home() {

  const { data: session,status } = useSession()
  const loading = status === 'loading'

  const router = useRouter();
  
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  if (session) {
    
      
    router.push('/dashboard')
    
   
  }else{

    const handleSubmit = async (event:any) => {
      
      event.preventDefault();
      var result:any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });


    }

  
  return (
    <>
          sign in page
          <form onSubmit={handleSubmit}>
            <label>email
              <input 
              type="text"
              value={email}
              onChange={(event)=>setUsername(event.target.value)}
              />
              </label>
               <label>pass
              <input 
              type="password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              />
              </label>
              <button type="submit">signin</button>
            </form>
    </>
  )

  }
}
