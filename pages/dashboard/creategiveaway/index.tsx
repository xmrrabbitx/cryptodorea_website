import { forEach } from "lodash";
import { useState, useEffect } from 'react'


export default function createGiveaway(cookies:any){

    const username = cookies.cookies.username

    const [contractName, setContractName] = useState("");
    const [pointsNumber, setPointsNumber] = useState<number>();
   

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
                body: JSON.stringify({ contractName, username, formatedDateTime,pointsNumber}),

            });

            const resp = await response.json();
            
            if(resp.error){
                setError(resp.error);
            }else{
                setRes(resp.success);
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
                <label>points number
                <input 
                type="number"
                value={pointsNumber}
                onChange={(event)=>setPointsNumber(parseInt(event.target.value))}
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