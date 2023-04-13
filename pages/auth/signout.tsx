import { useState } from "react";
import { signOut} from "next-auth/react";
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter();

  const { data: session,status } = useSession()
  const loading = status === 'loading'
  
  if (session) {
    return <p>You are already signed in</p>;
  }
    
  signOut();



  
  
}
