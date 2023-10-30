import { NextResponse, NextRequest } from 'next/server';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
const jws = require('jws');


interface Data {
    [key: string]: string;
}

export default function Dashboard(props:any){

    //const router = useRouter();

    const [res, setRecentItem] = useState<Data>({});

  
    return(
        <>

            <div className='container max-w-full' >
                <div className='grid grid-cols-5 gap-0 mt-10'> 

                        <Link href={"/dashboard/creategiveaway"} >create Giveaway</Link>
                        <Link href={"/dashboard/managegiveaways"} >manage Giveaways</Link>
                        <Link href={"/dashboard/newpost"} >make new post</Link>
                            
                </div>
            </div>


        </>
    )
          
}

export async function getServerSideProps(context:any) {

 // console.log(context.req.cookies['user'])

  return {
    props:{}
  }
  
}