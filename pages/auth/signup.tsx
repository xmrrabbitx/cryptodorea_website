import { useState } from "react"
import { useRouter } from "next/router"


export default function index(){

    const router = useRouter();

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handlSignup = async (event:any) => {
 
      event.preventDefault();
      const response = await fetch("/api/auth/signup",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),

      });

      const res = await response.json();

      if (res.error) {
        alert(res.error);
      } else {
        console.log(res);
        // router.push("/");
      }
      
    }

    return(
        
          <>
           <form onSubmit={handlSignup}>
            <label>username
              <input 
              type="text"
              value={username}
              onChange={(event)=>setUserName(event.target.value)}
              />
              </label>
               <label>pass
              <input 
              type="text"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              />
              </label>
              <button type="submit">signup</button>
            </form>
          </>
        
    )
}