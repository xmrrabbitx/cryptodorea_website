
// let solc = require("solc");
import solc from "solc";

export default function Compiler(){

    
    const input = {
        // Sample input
      };
      
      const output = solc.compile(input);
      
      // Log version
      console.log(solc.version());


}