import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"
import { useEffect } from 'react';

export default function Home() {

  const router = useRouter();

  const { data: session,status } = useSession()
  const loading = status === 'loading'
  
  useEffect(() => {
    const handleSignOut = async () => {
      if (session) {
        await signOut();
      }
      router.push('/');
    };
    handleSignOut();
  }, [session, router]);


  
  return null;
}
