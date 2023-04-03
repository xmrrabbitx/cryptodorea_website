import { useState, useEffect } from 'react';

interface Data {
    [key: string]: string;
}


export default function dashboard(){

    const [res, setRecentItem] = useState<Data>({});

    const createSol = async ()=>{
  
              try {
                const response = await fetch('http://localhost:3000/api/createSol');
                const data:any = await response.json();
        
                setRecentItem(data);
        
              } catch (error) {
                console.log('Error fetching data:', error);
              }
          
          console.log(res);
    }
    return(
        <>
                dashboard page

                <button className="bg-blue-500" onClick={createSol}>create</button>
        </>
    )
}