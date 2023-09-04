
// let solc = require("solc");
import solc from "solc";


export default function Compiler(baseContract:string,contractName:string){

  const input = {
    language: 'Solidity',
    sources: {
      'Giveaway': {
        content: baseContract,
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

  const abi = compiledContract['contracts']['Giveaway'][contractName]['abi'];
  const bytecode = "0x" + compiledContract['contracts']['Giveaway'][contractName]['evm']['bytecode']['object'];
      
    // Log version
    console.log(bytecode);


}