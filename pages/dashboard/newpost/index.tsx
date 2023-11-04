import { NextResponse, NextRequest } from 'next/server';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

interface Data {
    [key: string]: string;
}

export default function newPost(props:any){

  const [content, setContent] = useState('');

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent:any) => {
    setContent(newContent);
  };

  const [articleTitle, setArticleTitle] = useState("");

  const [res, setRes] = useState("");
  const [Error, setError] = useState("");
  
  const handleSubmit = async (event:any) => {

    event.preventDefault();

    const response = await fetch("http://localhost:3000/api/dashboard/posts/newPost/createPost",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({articleTitle,content}),

    });

    const resp = await response.json();
    
    if(resp.error){
        setError(resp.error);
        console.log(resp.success)
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
          <button type='submit' className='bg-grey'>post</button>
        </form>
        
        <div className="h-full w-full flex items-center flex-col">
        <div className="h-full w-[40vw]">
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
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