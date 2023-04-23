import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"

interface Data {
    [key: string]: string;
}

export default function dashboard(){

    const { data: session,status } = useSession()
    const loading = status === 'loading'

    const { data } = useSession();
    console.log(data)

    const router = useRouter();
   
    const [res, setRecentItem] = useState<Data>({});

    if (!session && !loading) {
      
        router.push('/auth/signin')
     
     
    }else{

        

    const createSol = async ()=>{
  
              try {
                const response = await fetch('http://localhost:3000/api/createSol');
                const data:any = await response.json();
        
                setRecentItem(data);
        
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          
          console.log(res);
    }
    return(
        <>
                dashboard page

                <button className="bg-blue-500" onClick={createSol}>create</button>
        </>
    )

    }
}