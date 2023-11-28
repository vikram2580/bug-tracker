name -Vikram Singh
studen Id - 101501507

//Install node module by using command  - npm install
//Run Ganache on your system 
//Deploy given contract in remix (Change environment to Dev - ganache provider)
//Update the contact address and ABI in contractConfig.js
//Follow this path for configuration (./src/config/contractConfig.js)

-----------------------------------------------------------------------
//Solidity contract 
<!-- // SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract BugTracker {
 
    struct Bug{
        uint256 bugId;
        string description;
        string status;
    }
 
    mapping(address=>Bug[]) private Users;
 
    function addBug(uint256 _bugId, string calldata _description,string calldata _status ) external {
        Users[msg.sender].push(Bug({bugId:_bugId, description: _description, status:_status}));
    }
 
    function getBug(uint256 _bugIndex) external view returns( Bug memory) {
        Bug storage bug = Users[msg.sender][_bugIndex];
        return bug;
    }
   
function updateBugStatus(uint256 _bugIndex, string calldata _status) external {
    Users[msg.sender][_bugIndex].status = _status;
}
  function getBugCount() external view returns (uint256) {
    return Users[msg.sender]. length;
 
}
} -->