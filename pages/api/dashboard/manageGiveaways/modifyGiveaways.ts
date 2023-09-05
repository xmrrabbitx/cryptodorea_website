// 
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import {connect} from "../../db"
import baseContract from "../../../../lib/basic/contracts/giveawayContracts"

export default async function modifyGiveaways(
  req: NextApiRequest,
  res: NextApiResponse
) {


    const db = await connect();

}