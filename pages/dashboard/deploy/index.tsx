import { useState, useEffect } from 'react'


export default function deploy(cookies:any){

    return (

        <>
        Deploy Contract
        </>

    );


}



export async function getServerSideProps(context:any) {

    const cookies = JSON.parse(context.req.cookies['user']);

     return {
       props:{cookies}
     }
     
   }
  