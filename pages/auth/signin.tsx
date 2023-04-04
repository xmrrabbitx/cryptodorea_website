import { useState } from "react";
import { signIn,signOut} from "next-auth/react";
import { useSession, getSession } from 'next-auth/react';

export default function Home() {
  const { data: session,status } = useSession()
  const loading = status === 'loading'
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return <p>You are already signed in</p>;
  }

    const handleSubmit = async (event:any) => {
      event.preventDefault();
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

    }

  
  return (
    <>
          sign in page
          <form onSubmit={handleSubmit}>
            <label>username
              <input 
              type="text"
              value={username}
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
  );
}
