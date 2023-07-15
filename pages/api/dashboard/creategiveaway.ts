// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../db"
import baseContract from "../../../lib/basic/contract/baseContract"

export default async function creategiveaway(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const contractName = req.body.contractName;
  const userName = req.body.username;
  const dateTime = req.body.formatedDateTime;

  const db = await connect();

  if(contractName && userName && dateTime ){

    const directoryPath = `./pages/dashboard/web3/contracts/${userName}/${dateTime}`;
    const filePath = `./pages/dashboard/web3/contracts/${userName}/${dateTime}/${contractName}.sol`
    
  if (fs.existsSync(filePath)) {
      
    res.status(404).json({error:"file existed! try another contract name for it ..."})
    
  }else{
    
    
    const User:any = await db.query(
        "select id from users where username = ?",
        [userName]
    );
    const id = User[0][0]['id'];

    const userIdCheck:any = await db.query(
      "select * from contracts where user_id=(?)",
      [id]
    );
   
      for(let results of userIdCheck[0]){
        
        if(results.contract_Name === contractName){
          
        return res.status(404).json({error:"you already have a contract with this name!!! please choose another name!"})
        
        }

      }

      const Contracts:any = await db.query(
        "INSERT INTO contracts  (contract_name, user_id, created_at) VALUES(?, ?, NOW())",
        [contractName, id]
      );

    if (!fs.existsSync(directoryPath)) {
      // Create the directory if it doesn't exist
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    fs.writeFile(filePath, baseContract(contractName), function (err) {
      if (err) throw err;
    });

    
    
  }

    res.status(200).json({response:"file created!"})
  
  }else{

    res.status(404).json({error:"some fields are empty!"})

  }

  
  
}
