
import { useState, useEffect } from 'react';

export default function Sample(props:any){

    const handleSubmit =  async (event:any) => {

        event.preventDefault();
    const response = await fetch("/api/dashboard/sample/sample", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify("sample text"),
    });

    const resp = await response.json();
    
    if(resp.error){
     console.log(resp.error)
    }else{
        console.log(resp.succ)
    }

};
    return(

        <>
            <button onClick={handleSubmit} >create file</button>
        </>

    )

}