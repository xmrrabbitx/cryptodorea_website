// save giveaway info into mysql DB
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../db"

export default async function createGiveaways(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const contractName:string = req.body.contractName;
  const userName:string = req.body.username;
  const pointsNumber:number = req.body.pointsNumber;
  const limitUsers:number = req.body.limitUsers;
  const trigerDate:number = req.body.trigerDate;
  const congratsText:string = req.body.congratsText;
  const planType:string = req.body.planType;

  const db = await connect();

  if(contractName && userName && pointsNumber && limitUsers && trigerDate && congratsText){

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
        
        if(results.contract_name === contractName){
          
        return res.status(404).json({error:"you already have a contract with this name!!! please choose another name!"})
        
        }

      }

      const oneWeekInMilliseconds:number = 7 * 24 * 60 * 60 * 1000;
      var deleteDate:number = ((trigerDate * 1000) + oneWeekInMilliseconds) / 1000;

      const Contracts:any = await db.query(
        "INSERT INTO contracts  (contract_Name, points, user_id, limit_users, congrats_text, giveaway_type, giveaway_amount, triger_date, created_at, deleted_at) VALUES(?, ?, ?, ?, ?, ?, ?, FROM_UNIXTIME(?), NOW(), FROM_UNIXTIME(?))",
                                [contractName, pointsNumber, id, limitUsers, congratsText, null, null, trigerDate, deleteDate]
      );

      if(Contracts){

          const deployRequest = await fetch("http://localhost:3000/api/dashboard/solidity/deployContract",{
      
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({userName,planType, contractName}),
      
          });

          const deployResponse = await deployRequest.json();

          if(deployResponse['success']){

            return res.status(200).json({success:"your contract is created and deployed successful!"})
       

          }else if(deployResponse['error']){

            return res.status(403).json({error:deployResponse['error']});

          }

      } 

    }
  
  }else{

    return res.status(404).json({error:"some fields are empty!"})

  }

  
  
}
