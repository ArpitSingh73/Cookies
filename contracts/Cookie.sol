//SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;


contract cookies{
   struct Memo{
     string name;
     string message;
     uint timestamp;
     address from;
    }

    Memo[] memos;
    address payable owner;

    constructor(){
        owner = payable( msg.sender);
    }

    function buyCookies(string memory name, string memory message) public payable {
            require(msg.value > 0, "Please pay me more than 0eth");
            owner.transfer(msg.value);
            memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function get() view public returns(Memo[] memory){
            return memos;
    }
}
