import { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import Cookies from 'js-cookie';

export default function Home() {

  const router = useRouter();
  
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [Error, setError] = useState("")
  const [Status, setStatus] = useState("")
  
 // if (session) {
    
      
   // router.push('/dashboard')
    
   
  //}else{

    //}

    const handleSubmit = async (event:any) => {
      
      event.preventDefault();
      const response = await fetch("/api/auth/signin",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),

      });

      const res = await response.json();
      
      //const token = res.token.split("-")

     Cookies.set("authToken",res.token)

      if (res.error) {

          setError(res.error)

      } else {

          setError(res.status)

          setTimeout(() => {
              router.push('/dashboard');
          }, 3000);

      }

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

            {Error}
            {Status}
    </>
  )

}
