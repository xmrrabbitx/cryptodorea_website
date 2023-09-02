export default function BaseContract (contraName:string){

return `
// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.4.0 < 0.9.0;

contract ${contraName} {

      uint votes;

      constructor(){

        votes = 1;
      }

      function show() public view returns(uint){
      
        return votes;
      }

}
              `;

}

