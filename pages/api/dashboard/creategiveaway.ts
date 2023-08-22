// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../db"
import baseContract from "../../../lib/basic/contract/baseContract"

export default async function creategiveaway(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const contractName:string = req.body.contractName;
  const userName:string = req.body.username;
  const dateTime = req.body.formatedDateTime;
  const pointsNumber:number = req.body.pointsNumber;


  const db = await connect();

  if(contractName && userName && dateTime && pointsNumber){

    const hasSpecialChars = (str:string) => {
      const regex = /[`!#%^*_+\-\[\]{};':"\\|<>\/?~]/;
     
      return regex.test(str);
    }

    if(hasSpecialChars(contractName)){

      return res.status(404).json({error:"special characters are not allowed!"})
      
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
        "INSERT INTO contracts  (contract_name, points_number, user_id,  created_at) VALUES(?, ?, ?, NOW())",
        [contractName, pointsNumber, id]
      );

      return res.status(404).json({success:"your contract is created successful!"})
        

    }
  
  }else{

    return res.status(404).json({error:"some fields are empty!"})

  }

  
  
}
