
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
  const sourceContractSol  = fs.readFileSync(solPath,'utf8')

  const contractName:string = "Giveaway";
  let compiler = Compiler(sourceContractSol,contractName);
  let abi = compiler['abi'];
  let bytecode = compiler['bytecode'];

  const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:8545");


  
  var contract = new web3.eth.Contract(abi)
          
  contract.deploy({data:bytecode}).send({from:"0x01A4f2b486116d5B5042401B274E52Ed4c3124F6",gas: "4000000",
    gasPrice: '30000000000'}).then(function(result: { options: any }){
      
    console.log(result.options['ByteCode']);
      

    });

res.status(200).json({"response":"okkkk"});



}