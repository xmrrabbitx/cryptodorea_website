import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from "next/router"

interface Data {
    [key: string]: string;
}

export default function dashboard(){

    const { data: session,status } = useSession()
    const loading = status === 'loading'

    const { data }:any = useSession();
    

    const router = useRouter();
   
    const [res, setRecentItem] = useState<Data>({});

    if (!session && !loading) {
      
        router.push('/auth/signin')
     
     
    }else{

        

    const createSol = async (data:any)=>{

            try {
               
                const response = await fetch(`http://localhost:3000/api/createSol?username=${data.session.user.name}`);
                const result:any = await response.json();
        
                setRecentItem(result);
        
            } catch (error) {
               console.log('Error fetching data:', error);
             }
          
          
    }
    return(
        <>
                <>dashboard page</>
                <p> Hello {data.session.user.name} , welcome to crypto dorea </p>
                <button className="bg-blue-500" onClick={(e) => createSol(data)}>create</button>
        </>
    )

    }
}