import { useState } from "react";
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"
import { useEffect } from 'react';
import Cookies from "js-cookie";

export default function Home() {

  const router = useRouter();

  const token = Cookies.get("authToken")
  
  useEffect(() => {
    const handleSignOut = async () => {
      if (token) {

            Cookies.remove("authToken")
            
      }
      router.push('/');
    };
    handleSignOut();
  }, [token, router]);
  
  return null;
}
