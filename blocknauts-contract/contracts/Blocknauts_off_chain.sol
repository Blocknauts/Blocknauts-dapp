// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Blocknauts {
    mapping(address => string) public userPreferences;

    function setUserPreference(string memory cid) public {
        userPreferences[msg.sender] = cid;
    }

    function getUserPreference() public view returns (string memory) {
        return userPreferences[msg.sender];
    }
}
