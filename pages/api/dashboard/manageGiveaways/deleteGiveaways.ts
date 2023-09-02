// 
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../db"
import baseContract from "../../../../lib/basic/contracts/BaseContract"

interface Contracts {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
}

export default async function deleteGiveaways(
  req: NextApiRequest,
  res: NextApiResponse
) {

  

    let id:number = req.body.id;

    const db = await connect();
    const Contracts:any= await db.query(
      "delete from contracts where id = ?",
      [id]
  );

    return res.status(200).json({success:"contract is deleted successfully!"});

}
