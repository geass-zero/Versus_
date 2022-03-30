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
    address public versusToken;
    address public  layer2Tracker;
    uint32[] public leagues;
    uint32 public currentLeagueIndex;
    struct LeagueInfo {
        uint32[] cyphers;
        uint32 currentIndex;
    }
    mapping(uint32 => LeagueInfo) public leagueDetails;
    struct CypherInfo {
        uint32 battleCount;
        uint32 currentLeague;
        uint32 leagueIndex;
        uint256 currentDay;
    }
    mapping(uint32 => CypherInfo) public cypherDetails;
    uint32 public cypherBattleLimit;

    uint256 public dailyBattleLimit;

    uint256 public dailyBattlePoolVersus;
    uint256 public dailyVersusRemaining;
    uint256 public dailyBattlesRemaining;
    uint256 public currentDayStart;
    uint256 public dayCounter;
    
}

contract CypherBattlePool is DataLayout, Proxiable{
    
    using SafeMath for uint256;

    modifier _onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier _updateDay() {
        if (block.timestamp.sub(currentDayStart) > 24 hours) {
            dayCounter = dayCounter+1;
            currentDayStart = currentDayStart+24 hours;
        }
        _;
    }

    constructor() {
        
    }

    receive() external payable {
        
    }

    function battleConstructor(
        address _versusToken, 
        address _layer2Tracker,
        uint32[] memory _leagues,
        uint256 _dailyVersus,
        uint256 _dailyBattles) public {
            require(!initialized, "Contract is already initialized");
            leagues = _leagues;
            owner = msg.sender;
            versusToken = _versusToken;
            layer2Tracker = _layer2Tracker;
            dailyBattlePoolVersus = _dailyVersus;
            dailyBattleLimit = _dailyBattles;
            dailyVersusRemaining = _dailyVersus;
            dailyBattlesRemaining = _dailyBattles;
            currentDayStart = block.timestamp;
            dayCounter = 1;
            initialize();
    }

    function updateCode(address newCode) public _onlyOwner delegatedOnly  {
        updateCodeAddress(newCode);
    }

    //set daily Versus winnings
    function setDailyWinnings(uint256 _winnings) public _onlyOwner {
        dailyBattlePoolVersus = _winnings;
    }

    function setCypherBattleLimit(uint32 _limit) public _onlyOwner {
        cypherBattleLimit = _limit;
    }

    //enter cypher into pool
    function enterCypher(uint32 tokenID) public _updateDay {
        //check that caller is owner
        require(Layer2Tracker(layer2Tracker).getIDOwner(tokenID) == msg.sender, "Unathorized: You are not the token owner");
        require(cypherDetails[tokenID].currentLeague == 0, "Cypher is already in a league");
        uint32 cypherLevel;
        (cypherLevel,,,,,) = Layer2Tracker(layer2Tracker).getNFTDetails(tokenID);
        for (uint i; i < leagues.length; i++) {
            if (cypherLevel < leagues[i] * 10) {
                leagueDetails[leagues[i]].cyphers.push(tokenID);
                cypherDetails[tokenID].currentLeague = leagues[i];
                cypherDetails[tokenID].leagueIndex = uint32(leagueDetails[leagues[i]].cyphers.length - 1);
                return;
            }
            if ((cypherLevel > leagues[i] * 10) && i ==  leagues.length-1) {
                leagueDetails[leagues[i]].cyphers.push(tokenID);
                cypherDetails[tokenID].currentLeague = leagues[i];
                cypherDetails[tokenID].leagueIndex = uint32(leagueDetails[leagues[i]].cyphers.length - 1);
                return;
            }
        }
    }

    function clearData(uint32 tokenID) public {
        cypherDetails[tokenID].currentLeague = 0;
        cypherDetails[tokenID].leagueIndex = 0;
        delete leagueDetails[1].cyphers;
        delete leagueDetails[2].cyphers;
        delete leagueDetails[3].cyphers;
    }

    //remove cypher from pool
    function removeCypher(uint32 tokenID) public _updateDay {
        require(Layer2Tracker(layer2Tracker).getIDOwner(tokenID) == msg.sender, "Unathorized: You are not the token owner");
        require(cypherDetails[tokenID].currentLeague != 0, "Cypher is already in a league");
        //remove the cypher from league array
        trimLeagueArrays(
            cypherDetails[tokenID].leagueIndex,
            cypherDetails[tokenID].currentLeague);
        
        cypherDetails[tokenID].currentLeague = 0;
        
    }

    function trimLeagueArrays(uint256 index, uint32 leagueNumber) internal {
        require(index < leagueDetails[leagueNumber].cyphers.length, "Invalid cypher");
        cypherDetails[leagueDetails[leagueNumber].cyphers[index]].leagueIndex = 0;
        leagueDetails[leagueNumber].cyphers[index] = leagueDetails[leagueNumber].cyphers[leagueDetails[leagueNumber].cyphers.length - 1];
        cypherDetails[leagueDetails[leagueNumber].cyphers[index]].leagueIndex = uint32(index);
        leagueDetails[leagueNumber].cyphers.pop();
    }

    function fightNow(uint32 tokenID) public _updateDay {
        if (block.timestamp < currentDayStart.add(24 hours)) {
            require(dailyBattlesRemaining > 0, "Max daily battles reached");
        } else {
            currentDayStart = block.timestamp;
            dailyBattlesRemaining = dailyBattleLimit;
            dailyVersusRemaining = dailyBattlePoolVersus.add(dailyVersusRemaining);
        }
        if (cypherDetails[tokenID].battleCount == cypherBattleLimit) {

        }
        //choose who they battle
        uint32 opponent = cypherPick(uint32(leagueDetails[cypherDetails[tokenID].currentLeague].cyphers.length));
        //execute battle function
        executeBattle(tokenID, opponent);

    }

    //advance battles
    function advanceBattles() public _updateDay {
        uint32 currentCypher = leagueDetails[currentLeagueIndex].cyphers[
            leagueDetails[currentLeagueIndex].currentIndex
        ];
        if (block.timestamp < currentDayStart.add(24 hours)) {
            require(dailyBattlesRemaining > 0, "Max daily battles reached");
        } else {
            currentDayStart = block.timestamp;
            dailyBattlesRemaining = dailyBattleLimit;
            dailyVersusRemaining = dailyBattlePoolVersus.add(dailyVersusRemaining);
        }
        if (cypherDetails[currentCypher].battleCount == cypherBattleLimit) {

        }
        //choose who they battle
        uint32 opponent = cypherPick(uint32(leagueDetails[currentLeagueIndex].cyphers.length));
        //execute battle function
        executeBattle(currentCypher, opponent);
        leagueDetails[currentLeagueIndex].currentIndex = leagueDetails[currentLeagueIndex].currentIndex + 1;
        if (leagueDetails[currentLeagueIndex].currentIndex == leagueDetails[currentLeagueIndex].cyphers.length) {
            leagueDetails[currentLeagueIndex].currentIndex = 0;
        }

        currentLeagueIndex = currentLeagueIndex + 1;
        if (currentLeagueIndex == leagues.length + 1) {
            currentLeagueIndex = 0;
        }

    }



    function cypherPick(uint32 upperNumber) view internal returns(uint32) {
        uint256 VRFRandom = Layer2Tracker(layer2Tracker).viewVRFRandom();
        //use VRF in Layer2Tracker
        uint256 addressBalance = address(0x4446Fc4eb47f2f6586f9fAAb68B3498F86C07521).balance; //need BNB address
        uint256 randomResult = uint256(keccak256(abi.encodePacked(
            VRFRandom + addressBalance + block.timestamp + block.difficulty +
            block.gaslimit
            ))) % upperNumber;
        return uint32(randomResult); 
    }

    function executeBattle(uint32 cypher1, uint32 cypher2) internal {
        battleLimitCheck(cypher1);
        //get stats for both cyphers
        uint32[] memory cypher1Stats;
        uint32[] memory cypher2Stats;
        uint32 cypher1StatSum;
        uint32 cypher2StatSum;
        (,,,,cypher1Stats,)= Layer2Tracker(layer2Tracker).getNFTDetails(cypher1);
        (,,,,cypher2Stats,)= Layer2Tracker(layer2Tracker).getNFTDetails(cypher2);
        for (uint i; i < cypher1Stats.length; i++) {
            cypher1StatSum = cypher1StatSum + cypher1Stats[i];
        }
        for (uint i; i < cypher2Stats.length; i++) {
            cypher2StatSum = cypher2StatSum + cypher2Stats[i];
        }

        //do the battle
        uint32 winningCypher;
        if (battleCalculation(cypher1StatSum, cypher2StatSum) == 1) {
            winningCypher = cypher1;
        } else {
            winningCypher = cypher2;
        }
        
        cypherDetails[cypher1].battleCount = cypherDetails[cypher1].battleCount + 1;
        //save history for cypher1

        awardWinner(winningCypher);

    }

    function awardWinner(uint32 _tokenID) internal {
        uint256 winnings = dailyVersusRemaining.div(dailyBattlesRemaining);
        //take fee?
        Layer2Tracker(layer2Tracker).battleReward(_tokenID, winnings);

        dailyVersusRemaining = dailyVersusRemaining.sub(winnings);
        
    }

    function battleCalculation(uint32 cypher1Sum, uint32 cypher2Sum) internal returns(uint winner) {
        uint32 sumDifference;
        uint topCypher;
        if (cypher1Sum > cypher2Sum) {
            topCypher = 1;
            sumDifference = cypher1Sum - cypher2Sum;
        } else {
            topCypher = 2;
            sumDifference = cypher2Sum - cypher1Sum;
        }

        uint32 randomNumber = cypherPick(cypher1Sum  + cypher2Sum);
        if (topCypher == 1) {
            if (randomNumber > cypher2Sum) {
                return 1;
            } else {
                return 2;
            }
        }
        if (topCypher == 2) {
            if (randomNumber > cypher2Sum) {
                return 2;
            } else {
                return 1;
            }
        }

    }

    function battleLimitCheck(uint32 tokenID) internal {
        if (cypherDetails[tokenID].currentDay != dayCounter) {
            cypherDetails[tokenID].battleCount = 0;
            cypherDetails[tokenID].currentDay = dayCounter;
        }
        require(cypherDetails[tokenID].battleCount < cypherBattleLimit, "Battle limit reached");

    }

}

interface Layer2Tracker {
    function battleReward(uint32 tokenID, uint256 amount) external;
    function getNFTDetails(uint256 id) external view returns(
            uint32, 
            string memory, 
            string memory,
            uint32, 
            uint32[] memory, 
            string memory);

    function getIDOwner(uint32 _ID) external view returns(address);
    function viewVRFRandom() external view returns(uint256);
}

