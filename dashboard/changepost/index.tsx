import { NextResponse, NextRequest } from 'next/server';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { useRouter } from "next/router"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import Link from 'next/link';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from "react-quilljs";



export default function NewPost(props:any){

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

    quill?.setText("hello");
    

    return(

        <>
          <div className="h-full w-full flex items-center flex-col">
            <div className="h-full w-[40vw]">
              <div
              ref={quillRef} />
            </div>
          </div>
        </>
    )


}