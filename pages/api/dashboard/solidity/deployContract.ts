
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import Compiler from '@/lib/sloc/Compiler';
import Web3 from "web3";
import path from 'path';


export default async function deployContract(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const solPath = path.resolve("./lib/basic/contracts","Giveaway.sol")
  console.log(solPath)
  const sourceContractSol = fs.readFileSync(solPath,{ encoding: 'utf8'})

  const contractName:string = "Giveaway";
  let compiler = Compiler(sourceContractSol,contractName);
  let abi = compiler['abi'];
  let bytecode:string = compiler['bytecode'];

  const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:8545");

          
 try{

  var contract = new web3.eth.Contract(abi)

    
    contract.deploy({data:bytecode}).send({from:"0x078220fE7d2BAbd3EDa02d9E01b34FF728ac8Fba",gas: "4000000",
      gasPrice: '30000000000'}).then(function(result: { options: any }){
        
      //console.log(result.options);
        
      });

  res.status(200).json({success:true});

  }catch(error){
    res.status(404).json({error:`deploy was not successful!:${error}`});
  }

}