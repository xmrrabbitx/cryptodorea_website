import { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface Data {
    [key: string]: string;
}

export default function dashboard(props:any){

    const router = useRouter();

    const token = Cookies.get("authToken")
   
    const [res, setRecentItem] = useState<Data>({});

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
            <p> Hello  , welcome to crypto dorea </p>
            <button className="bg-blue-500" onClick={(e) => createSol("hadi")}>create</button>


            <div className='container max-w-full' >
                <div className='grid grid-cols-2 gap-1 mt-10'> 

                </div>
            </div>


        </>
    )

    
}

export async function getServerSideProps() {
  
    const secretKey:any = process.env.JwtSecretKey
  
  return {
    props:{secretKey}
  }
  
  }
