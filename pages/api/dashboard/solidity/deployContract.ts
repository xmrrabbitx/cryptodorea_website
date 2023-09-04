
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import BaseContract from '@/lib/basic/contracts/BaseContract';
import Compiler from '@/lib/sloc/Compiler';

export default async function deployContract(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const contractName:string = req.body.contractName;
  const baseContract = BaseContract(contractName);
  Compiler(baseContract,contractName);

res.status(200).json({"response":"okkkk"});


}