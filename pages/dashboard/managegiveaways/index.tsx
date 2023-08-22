import { forEach } from "lodash";
import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'

interface ManageGiveawaysProps {
  cookies: any; 
  resp: any;
}

export default function manageGiveaways({cookies,resp}:ManageGiveawaysProps){

  const username = cookies.username

  const contractList = resp.success;

    return (

        <>
            manage
            <ul>
              {contractList.map((contract:any, index:number) => (
                <li key={index}>{contract.contract_Name}</li>
              ))}
        </ul>
            
        </>
    )

}

export async function getServerSideProps(context:any) {

  const cookies = JSON.parse(context.req.cookies['user']);
  const username = cookies['username'];

  const response = await fetch("http://localhost:3000/api/dashboard/managegiveaways",{

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username}),

});


  const resp = await response.json();

   return {
     props:{cookies,resp}
   }
   
 }
