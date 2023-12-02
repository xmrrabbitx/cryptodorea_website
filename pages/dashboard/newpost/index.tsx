import { NextResponse, NextRequest } from 'next/server';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quilljs";


interface Data {
    [key: string]: string;
}

export default function newPost(props:any){

  const [content, setContent] = useState({});
  
  
  const theme = 'snow';
  //const theme = 'bubble';

  const modules = {
    toolbar: [

        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': ["red"] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['image'],
      
        ['clean'] 
    ],
    
  };

  const placeholder = 'Compose an epic...';

  const formats = ['bold', 'italic', 'underline', 'strike','code-block','blockquote','header','direction','size','color','align','font','image'];

  //const { quill, quillRef } = useQuill({ theme, modules, formats, placeholder });
  const { quill, quillRef } = useQuill({theme, formats, modules,  placeholder});

  useEffect(() => {

    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {

        setContent(quill.root.innerHTML); // Get delta contents
       
      });
    }

  }, [quill])

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
    }else{
        setRes(resp.success);
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
              <div
              ref={quillRef} />
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