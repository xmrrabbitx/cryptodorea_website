import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
const jws = require('jws');

import Navbar from './components/createGiveaway/Layout/Navbar';

interface Data {
    [key: string]: string;
}

export default function dashboard(props:any){

    const router = useRouter();

    /*
    const token:any = Cookies.get("authToken")
    const s:any = props.secretKey
    const ver = jws.verify(token, "HS256", s)
    console.log(ver)
*/

  //  console.log("token at page level:" + token)
    
/*
    useEffect(() => {
        const handleCheckToken = () => {
          if (!token) {
    
              return router.push("/auth/signin")
                
          }
         
        };
        handleCheckToken();
      }, [token, router]);
*/
   
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

            <div className='container max-w-full' >
                <div className='grid grid-cols-5 gap-0 mt-10'> 

                    <div className='w-12/12 pl-0 bg-red-500 text-center'>
                       <Navbar />
                    </div>
                    <div className='w-12/12 pl-0 col-span-4 bg-black'>
                        RIGHT SECTION
                    </div>

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