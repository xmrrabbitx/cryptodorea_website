// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.4.0 < 0.9.0;

contract Giveaway {

      uint votes;

      constructor(){

        votes = 1234;
      }

      function show() public view returns(uint){
      
        return votes;
      }

}