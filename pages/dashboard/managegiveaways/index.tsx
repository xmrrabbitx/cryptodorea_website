import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'

interface ManageGiveawaysProps {
  cookies: any; 
  resp: any;
}

export default function manageGiveaways({cookies,resp}:ManageGiveawaysProps){

  const username = cookies.username

  const contractList = resp.success;

  const deleteHndle = async (id:any) => {
   
    const response = await fetch("/api/dashboard/manageGiveaways/deleteGiveaways",{

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id}),

  });

  const resp = await response.json();
  

  }

    return (

        <>
            manage
            
            <ul>
              {contractList.map((contract:any, index:number) => (
                <li key={index}>
                  {contract.contract_name}
                  {contract.points_number}
                  <button onClick={() => deleteHndle(contract.id)}>delete</button>
                  
                </li>
              ))}
            </ul>
            
        </>
    )

}

export async function getServerSideProps(context:any) {

  const cookies = JSON.parse(context.req.cookies['user']);
  const username = cookies['username'];

  const response = await fetch("http://localhost:3000/api/dashboard/manageGiveaways/showGiveaways",{

    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username}),

});


  const resp = await response.json();
  if(resp.error){
    console.log(resp.error);
  }

  return {
     props:{cookies,resp}
   }
   
 }
