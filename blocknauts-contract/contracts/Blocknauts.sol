// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Blocknauts {
    // basic struct for cookies
    struct userPreference {
        address useraddress;
        string cookiePreference;
        bool isDark;
        string highlightColor;
        string fontColor;
    }

    mapping(address => userPreference) public userPreferences;

    function setUserPreference(
        address useraddress,
        string memory cookiePreference,
        bool isDark,
        string memory highlightColor,
        string memory fontColor
    ) public {
        userPreferences[useraddress] = userPreference(
            useraddress,
            cookiePreference,
            isDark,
            highlightColor,
            fontColor
        );
    }

    function getUserPreference(address useraddress)
        public
        view
        returns (userPreference memory)
    {
        return userPreferences[useraddress];
    }
}
