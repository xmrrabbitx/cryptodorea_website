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
    console.log(index);
    //const db = await connect();

    return res.status(200).json({success:"okkk"});

}
