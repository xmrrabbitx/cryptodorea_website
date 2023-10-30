import { useState, useEffect } from 'react'


export default function CreateGiveaway(cookies:any){

    const username = cookies.cookies.username
    const planType = cookies.cookies.planType

    const [contractName, setContractName] = useState("");
    const [pointsNumber, setPointsNumber] = useState<number>();
    const [limitUsers, setLimitUsers] = useState<number>();
    const [trigerDate, setTrigerDate] = useState<number>();
    const [congratsText, setCongratsText] = useState("");

   

    const [res, setRes] = useState("");
    const [Error, setError] = useState("");

    const handleSubmit = async (event:any) => {

            event.preventDefault();

            let date = new Date();
            let currentTime = date.getTime();

            const response = await fetch("http://localhost:3000/api/dashboard/manageGiveaways/createGiveaways",{

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contractName, username, pointsNumber, limitUsers, trigerDate, congratsText, planType}),

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
                <label>users limitation
                <input 
                type="number"
                value={limitUsers}
                onChange={(event)=>setLimitUsers(parseInt(event.target.value))}
                />
                </label>
                <label>triger Date
                <input 
                type="number"
                value={trigerDate}
                onChange={(event)=>setTrigerDate(parseInt(event.target.value))}
                />
                </label>
                <label>congragulation text
                <input 
                type="text"
                value={congratsText}
                onChange={(event)=>setCongratsText(event.target.value)}
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