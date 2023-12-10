
import { useState, useEffect } from 'react';

export default function Sample(props:any){

    const response = fetch("/api/dashboard/sample/sample",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify("sample text"),

    });

    return(

        <>

        </>

    )

}