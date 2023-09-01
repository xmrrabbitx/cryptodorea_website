// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"


export default async function createSol(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const username:any = req.query.username;
  const contractName:any = req.query.contractName;
  const dateTime:any = req.query.currentTime;

  console.log(req.query);

  function creatSol(){

    return `// SPDX-License-Identifier: GPL-3.0
    pragma solidity >=0.4.0 <0.9.0;



    `;
  
  }
  
  fs.writeFile(`./pages/dashboard/web3/contracts/${dateTime}_${username}_${contractName}.sol`,creatSol(),function(err){
    if (err) throw err;
   });

  res.status(200).json({response:"file created!"})

}
