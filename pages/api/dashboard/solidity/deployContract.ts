
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"
import Compiler from '@/lib/sloc/Compiler';
import Web3 from "web3";
import path from 'path';


function checkDir(dirPath:string){
  if(fs.existsSync(dirPath)){
    return true
  }
}

export default async function deployContract(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const userName:string = req.body.userName;
  const planType:string = req.body.planType;
  const contractName:string = req.body.contractName;

  const solPath = path.resolve("./lib/basic/contracts","Giveaway.sol")

  const sourceContractSol = fs.readFileSync(solPath,{ encoding: 'utf8'})

  let compiler = Compiler(sourceContractSol,"Giveaway");
  let abi = compiler['abi'];
  let bytecode:string = compiler['bytecode'];

  const web3 = new Web3(Web3.givenProvider || "ws://127.0.0.1:8545");

          
 try{

  var contract = new web3.eth.Contract(abi)

  
    contract.deploy({data:bytecode}).send({from:"0x71042c0618fDDb38AD3823b4Be73aa0e1393d7F3",gas: "4000000",
      gasPrice: '30000000000'}).then(function(result: { options: any }){
        
        // must check if directory doesnt exist, create one
        const dirPath = path.join( process.cwd(), `./lib/${planType}/contracts/users/${userName}`)

        fs.mkdirSync(dirPath, { recursive: true });
      
          const filepath = path.join( process.cwd(), `./lib/${planType}/contracts/users/${userName}`,`${contractName}.json`)
          fs.writeFile(filepath,JSON.stringify(result.options),function (err: any) {
            if (err) throw err
            else res.status(200).json({success:true});
          })

      });

  res.status(200).json({success:true});

  }catch(error){
    res.status(404).json({error:`deploy was not successful!:${error}`});
  }

}