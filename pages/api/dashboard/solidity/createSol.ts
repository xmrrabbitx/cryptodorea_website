
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import path from 'path';
import Compiler from '@/lib/sloc/Compiler';

export default async function createSol(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const username:any = req.body.username;
  const contractName:any = req.body.contractName;
  const dateTime:any = req.body.currentTime;

  //const solPath = path.resolve("./basic/contracts","Vote.sol")
  //const sourceContractSol  = fs.readFileSync(solPath)

  const path = "./web3/contracts";

  if(!fs.existsSync(path + "/" + username)){
    fs.mkdirSync(path + "/" + username);

    fs.writeFile(`${path}/${username}/${dateTime}_${username}_${contractName}.sol`,BaseContract(contractName),function(err){
      if (err) throw err;
     });
  
    res.status(200).json({response:"file created!"});

  }else{

    res.status(404).json({response:"something went wrong!"});

  }


}
