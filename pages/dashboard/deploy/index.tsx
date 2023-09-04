import { useState, useEffect } from 'react'
import BaseContract from '@/lib/basic/contracts/BaseContract'
import Compiler from '@/lib/sloc/Compiler'


interface deployGiveawaysProps {
  cookies: any; 
  resp: any;
}


export default function deploy({cookies,resp}:deployGiveawaysProps){

  const contractList = resp.success;
 
    const hndlDeploy = async (contractName:string) => {

      const response = await fetch("/api/dashboard/solidity/deployContract",{

        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify({contractName}),
  
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
                  
                  <button onClick={() => hndlDeploy(contract.contract_name)}>click</button>

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
console.log(resp);
  return {
     props:{cookies,resp}
   }
   
 }
