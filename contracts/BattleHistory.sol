pragma solidity ^0.8.0;

import "./ERC20.sol";
import "./CakeInterface.sol";

contract Proxiable {
    // Code position in storage is keccak256("PROXIABLE") = "0xc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7"

    function updateCodeAddress(address newAddress) internal {
        require(
            bytes32(0xc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7) == Proxiable(newAddress).proxiableUUID(),
            "Not compatible"
        );
        assembly { // solium-disable-line
            sstore(0xc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7, newAddress)
        }
    }
    function proxiableUUID() public pure returns (bytes32) {
        return 0xc5f16f0fcc639fa48a6947836d9850f504798523bf8c9a3a87d5876cf622bcf7;
    }
}

contract LibraryLockDataLayout {
  bool public initialized = false;
}

contract LibraryLock is LibraryLockDataLayout {
    // Ensures no one can manipulate the Logic Contract once it is deployed.
    // PARITY WALLET HACK PREVENTION

    modifier delegatedOnly() {
        require(initialized == true, "The library is locked. No direct 'call' is allowed");
        _;
    }
    function initialize() internal {
        initialized = true;
    }
}

contract DataLayout is LibraryLock {
    address public owner;
    address public  layer2Tracker;
    address public battlePool;
    
    struct HistoryDetail {
        uint256 totalBattles;
        uint256 wins;
        uint32[] opponents;
        bool[] isWin;
    }
    mapping(uint32 => HistoryDetail) public cypherHistory;
    mapping(address => bool) isWhitelisted;
}

contract CypherBattlePool is DataLayout, Proxiable{
    
    using SafeMath for uint256;

    modifier _onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        
    }

    receive() external payable {
        
    }

    function battleConstructor(
        address _battlePool, 
        address _layer2Tracker) public {
            require(!initialized, "Contract is already initialized");
            owner = msg.sender;
            battlePool = _battlePool;
            layer2Tracker = _layer2Tracker;
            initialize();
    }

    function updateCode(address newCode) public _onlyOwner delegatedOnly  {
        updateCodeAddress(newCode);
    }

    function updateTokenHistory(uint32 tokenID, uint32 opponentID, bool isWin) public {
        require(isWhitelisted[msg.sender], "Unauthorized caller");
        cypherHistory[tokenID].totalBattles = cypherHistory[tokenID].totalBattles + 1;
        if (isWin) {cypherHistory[tokenID].wins = cypherHistory[tokenID].wins + 1;}
        cypherHistory[tokenID].opponents.push(opponentID);
        cypherHistory[tokenID].isWin.push(isWin);
    }

    function getTokenHistory(uint32 tokenID) public returns(
        uint256,
        uint256,
        uint32[] memory,
        bool[] memory
    ) {
        return(
            cypherHistory[tokenID].totalBattles,
            cypherHistory[tokenID].wins,
            cypherHistory[tokenID].opponents,
            cypherHistory[tokenID].isWin
        );
    }

    function setWhitelistStatus(address _contract, bool _direction) public _onlyOwner {
        isWhitelisted[_contract] = _direction;
    }

}

// interface Layer2Tracker {
//     function battleReward(uint32 tokenID, uint256 amount) external;
//     function getNFTDetails(uint256 id) external view returns(
//             uint32, 
//             string memory, 
//             string memory,
//             uint32, 
//             uint32[] memory, 
//             string memory);

//     function getIDOwner(uint32 _ID) external view returns(address);
//     function viewVRFRandom() external view returns(uint256);
// }

