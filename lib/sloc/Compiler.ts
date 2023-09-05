
// let solc = require("solc");
import solc from "solc";
import { BufferSource } from "stream/web";


export default function Compiler(ContractSol:string,contractName:string){

  const input = {
    language: 'Solidity',
    sources: {
      'Giveaway': {
        content: ContractSol,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode'],
        },
      },
    },
  };
      
  const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(compiledContract);
  const abi = compiledContract['contracts']['Giveaway'][contractName]['abi'];
  const bytecode = "0x" + compiledContract['contracts']['Giveaway'][contractName]['evm']['bytecode']['object'];
      

  return {

    'abi':abi,
    'bytecode':bytecode
    
  };


}