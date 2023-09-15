// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.4.0 < 0.9.0;

contract Giveaway {

      struct UserData {
        string name;
        string email;
        address userAddress;
        uint256 giveawayCode;
    }

    address private owner;
    UserData[] internal usersData;

    constructor(){

        
    }

    function checkUser(string memory _name, string memory _email, address _userAddress, uint256  _giveawayCode) public view returns (bool){

      for(uint256 i =0; i < usersData.length; i++){

        UserData storage user = usersData[i];

        if (keccak256(bytes(user.name)) == keccak256(bytes(_name)) &&
            keccak256(bytes(user.email)) == keccak256(bytes(_email)) &&
            user.userAddress == _userAddress &&
            user.giveawayCode == _giveawayCode ){
          return true;
        }
      }

      return false;
    } 

    function addWinner(string memory _name, string memory _email,address _userAddress, uint256  _giveawayCode, string memory _uniqueId) public {

      UserData memory winnerUser = UserData({
        name: _name,
        email: _email,
        userAddress: _userAddress,
        giveawayCode: _giveawayCode,
        uniqueId: _uniqueId
      });

      usersData.push(winnerUser);
      
    }


    function showWinner(string memory _name) public view returns(bool){
      
      for(uint256 i =0; i < usersData.length; i++){

        UserData storage user = usersData[i];
        if(keccak256(bytes(_name)) == keccak256(bytes(user.name))){

        return true;

        }
      }

      return false;

    }


    function pay() public {




    }

}