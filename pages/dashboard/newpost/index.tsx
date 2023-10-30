import { NextResponse, NextRequest } from 'next/server';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';



interface Data {
    [key: string]: string;
}

export default function newPost(props:any){

  
  const [articleTitle, setArticleTitle] = useState("");

  const [res, setRes] = useState("");
  const [Error, setError] = useState("");
  
  const handleSubmit = async (event:any) => {

    event.preventDefault();

    const response = await fetch("http://localhost:3000/api/dashboard/posts/newPost/createPost",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({articleTitle}),

    });

    const resp = await response.json();
    
    if(resp.error){
        setError(resp.error);
    }else{
        setRes(resp.success);
        console.log(resp.success)
    }

}

    return(
        <>

        <form onSubmit={handleSubmit}> 
          <label>
              title
          </label>
          <input
           type="text"
           onChange={(event)=>setArticleTitle(event.target.value)}
          />
          <label>
              text
          </label>
          <textarea
           onChange={(event)=>setArticleTitle(event.target.value)}
          />
          <button type='submit' className='bg-grey'>post</button>
        </form>
        
        </>
    )
          
}

export async function getServerSideProps(context:any) {

 // console.log(context.req.cookies['user'])

  return {
    props:{}
  }
  
}