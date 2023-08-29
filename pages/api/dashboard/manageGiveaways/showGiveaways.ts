// 
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../db"
import baseContract from "../../../../lib/basic/contract/baseContract"

export default async function showGiveaways(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const userName:string = req.body.username;

    if(userName){

      const db = await connect();
      const User:any = await db.query(
          "select id from users where username = ?",
          [userName]
      );
      const id = User[0][0]['id'];

      const Contract:any = await db.query(
        "select * from contracts where user_id=(?)",
        [id]
      );

      
      return res.status(200).json({success:Contract[0]});
    }
    else{
      return res.status(404).json({error:'user not found!'});
    }
        
}