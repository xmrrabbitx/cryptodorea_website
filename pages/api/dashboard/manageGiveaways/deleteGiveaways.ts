// 
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../db"
import baseContract from "../../../../lib/basic/contract/baseContract"

export default async function deleteGiveaways(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const index:number = req.body.index;
    
    const db = await connect();
    const User:any = await db.query(
      "delete user from users where id = ?",
      [index]
  );

    return res.status(200).json({success:"contract is deleted successfully!"});

}
