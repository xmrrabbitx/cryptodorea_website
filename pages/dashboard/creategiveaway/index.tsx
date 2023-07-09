import { forEach } from "lodash";
import ChooseName from "./stages/ChooseName"
import { useState, useEffect } from 'react'


export default function createGiveaway(cookies:any){

    /*
    const createSol = async (data:any)=>{

        try {
           
            const response = await fetch(`http://localhost:3000/api/createSol?username=${data.session.user.name}`);
            const result:any = await response.json();
    
            setRecentItem(result);
    
        } catch (error) {

            console.log('Error fetching data:', error);

         }
      
}
*/

    const username = cookies.cookies.username

    const [contractName, setContractName] = useState("");
   

    const [res, setRes] = useState("");
    const [Error, setError] = useState("");

    const handleSubmit = async (event:any) => {

        event.preventDefault();
 
            const date = new Date();
            const dateTime = date.toLocaleDateString();
            const formatedDateTime = dateTime.split('/').join('');

            const response = await fetch("/api/dashboard/creategiveaway",{

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contractName, username, formatedDateTime}),

            });

            const resp = await response.json();
            
            if(resp.error){
                setError(resp.error);
            }else{
                setRes(resp.response);
            }

    }

    return (

        <>
            
            create giveaways page


            <form onSubmit={handleSubmit}>
                <label>contract Name
                <input 
                type="text"
                value={contractName}
                onChange={(event)=>setContractName(event.target.value)}
                />
                </label>
                
                <button type="submit">create</button>
            </form>

            {res}

            {Error}
        </>
    )

}

export async function getServerSideProps(context:any) {

    const cookies = JSON.parse(context.req.cookies['user']);

     return {
       props:{cookies}
     }
     
   }