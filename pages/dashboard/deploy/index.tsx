import { useState, useEffect } from 'react'

interface deployGiveawaysProps {
  cookies: any; 
  resp: any;
}


export default function deploy({cookies,resp}:deployGiveawaysProps){

  const contractList = resp.success;
 
    const hndlDeploy = async () => {

      const response = await fetch("/api/dashboard/solidity/deployContract",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify(),
  
    });
  
    const resp = await response.json();
      
    }


    return (

        <>
        Deploy Contract
       
            <ul>
              {contractList.map((contract:any, index:number) => (
                <li key={index}>
                  {contract.contract_name}
                  {contract.points_number}
                  
                  <button onClick={() => hndlDeploy()}>click</button>

                </li>
              ))}
            </ul>
        </>

    );

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
