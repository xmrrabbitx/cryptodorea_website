/*
// let solc = require("solc");
import solc from "solc";
import { BufferSource } from "stream/web";


export default function Compiler(ContractSol:string,contractName:string){


  const input = {
    'language': 'Solidity',
    'sources': {
      'Giveaway.sol': {
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
  
 //const inp = {"language":"Solidity","sources":{contractName:{"content":"// SPDX-License-Identifier: GPL-3.0\r\npragma solidity >= 0.4.0 < 0.9.0;\r\n\r\ncontract Giveaway {\r\n\r\n      uint votes;\r\n\r\n      constructor(){\r\n\r\n        votes = 1234;\r\n      }\r\n\r\n      function show() public view returns(uint){\r\n      \r\n        return votes;\r\n      }\r\n\r\n}"}},"settings":{"optimizer":{"enabled":false,"runs":200},"outputSelection":{"*":{"":["ast"],"*":["abi","metadata","devdoc","userdoc","storageLayout","evm.legacyAssembly","evm.bytecode","evm.deployedBytecode","evm.methodIdentifiers","evm.gasEstimates","evm.assembly"]}}}};
 
  const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
  
  console.log(compiledContract['contracts']['Giveaway.sol'][contractName]);

  const abi = compiledContract['contracts']['Giveaway.sol'][contractName]['abi'];
  const bytecode = "0x0" + compiledContract['contracts']['Giveaway.sol'][contractName]['evm']['bytecode']['object'];

  return {

    'abi':abi,
    'bytecode':bytecode
    
  };


}
*/