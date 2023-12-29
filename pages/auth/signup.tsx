import { useState } from "react"
import { useRouter } from "next/router"


export default function Signup(){

    const router = useRouter();

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [Error, setError] = useState("")
    const [Status, setStatus] = useState("")

    const handleSignup = async (event:any) => {
 
      event.preventDefault();
      const response = await fetch("/api/auth/signup",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),

      });

      const res = await response.json();

      if (res.error) {

          setError(res.error)

      } else {

        setError("")

        setStatus(res.status)

        setTimeout(() => {
          router.push('/auth/signin');
        }, 3000);
      
      }
      
    }

    return(
        
          <>
           <form onSubmit={handleSignup}>

            <label>username
              <input 
              type="text"
              value={username}
              onChange={(event)=>setUserName(event.target.value)}
              />
              </label>

              <label>email
                <input 
                type="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />
              </label>

              <label>password
                <input 
                type="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
              </label>

              <button type="submit">signup</button>

            </form>
            <>
              {Error}
              {Status}
            </>
          </>
        
    )
}