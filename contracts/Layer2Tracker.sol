pragma solidity ^0.8.0;

import "./ERC20.sol";
import "./CakeInterface.sol";
import "./chainlink/VRFConsumerBase.sol";

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
    address owner;
    address public cypherList;
    address public  versusToken;
    mapping(uint32 => address) public tokenOwner;
    mapping(address => uint32[]) public walletIDs;
    struct Details {
        uint32 cypherID;
        uint32 NFTLevel;
        uint32 totalXP;
        uint32[] stats;
        uint256 timeChecked;
        uint256 versusHeld;
        uint256 versusRewards;
    }
    mapping(uint256 => Details) public NFTDetails;
    mapping(uint256 => mapping(uint32 => uint32[])) public NFTStatsHistory;
    mapping(address => bool) public whitelistedContracts; 

    address public coordinator;
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public VRFRandom;
}

contract Layer2Tracker is VRFConsumerBase, DataLayout, Proxiable{
    
    using SafeMath for uint256;

    modifier _onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {}

    receive() external payable {
        
    }

    function trackerConstructor(
            address _versusToken, 
            address _link,
            address _coordinator) public {
        require(!initialized, "Contract is already initialized");
        owner = msg.sender;
        versusToken = _versusToken;
        coordinator = _coordinator;
        proxyVRFConstructor(coordinator, _link);
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18;
        initialize();
    }

    function updateCode(address newCode) public _onlyOwner delegatedOnly  {
        updateCodeAddress(newCode);
    }

    //Bridge In Functions
    function portMessage(
            address[] memory _addresses,
            uint256[] memory _uints,
            string[] memory _strings,
            bool[] memory _bools) public {
        require(whitelistedContracts[msg.sender], "Whitelisted contracts only");
        if (_strings.length > 0) {
            if (keccak256(abi.encodePacked((_strings[0]))) == keccak256(abi.encodePacked(("initialize")))) {
                initializeNFT(_addresses[0], uint32(_uints[0]), uint32(_uints[1]));
            }
            if (keccak256(abi.encodePacked((_strings[0]))) == keccak256(abi.encodePacked(("transfer")))) {
                transferNFT(_addresses[0], uint32(_uints[0]));
            }
            if (keccak256(abi.encodePacked((_strings[0]))) == keccak256(abi.encodePacked(("release")))) {
                transferNFT(_addresses[0], uint32(_uints[0]));
                //send former user claimed funds
                completeCypherRelease(uint32(_uints[0]));
            }
        }
    }

    function setWhitelistStatus(address _contractAddress) public _onlyOwner {
        whitelistedContracts[_contractAddress] = true;
    } 

    function getIDOwner(uint32 _ID) public view returns(address) {
        return tokenOwner[_ID];
    }

    function getAddressTokenIDs(address trainer) public view returns(uint32[] memory) {
        return walletIDs[trainer];
    } 

    function setCypherList(address _cypherList) public _onlyOwner delegatedOnly {
        cypherList = _cypherList;
    }

    function initializeNFT(address _owner, uint32 _NFTID, uint32 _cypherID) internal delegatedOnly returns(uint256) {
        tokenOwner[_NFTID] = _owner;
        NFTDetails[_NFTID].cypherID = _cypherID;
        NFTDetails[_NFTID].NFTLevel = 1;
        uint32[] memory ranges = CypherList(cypherList).getStatRanges(_cypherID);
        // NFTDetails[newItemId].stats = //get base stats from cypherList
        for (uint32 i; i<ranges.length; i++) {
            //random roll each stat(atk,def,spd,sp.atk,sp.def)
            NFTDetails[_NFTID].stats.push(statGen(ranges[i]));
        }
        walletIDs[_owner].push(_NFTID);
        return _NFTID;
    }

    function transferNFT(address to, uint32 tokenID) internal {
        tokenOwner[tokenID] = to;
    }

    function getRandomNumber() internal returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        VRFRandom = randomness;
    }

    function viewVRFRandom() public view returns(uint256) {
        return VRFRandom;
    }
    
    function statGen(uint32 upperNumber) view internal returns(uint32) {
        //add 2-3 more variables to drastically change the number
        uint256 addressBalance = address(0x4446Fc4eb47f2f6586f9fAAb68B3498F86C07521).balance; //need BNB address
        uint256 randomResult = uint256(keccak256(abi.encodePacked(
            VRFRandom + addressBalance + block.timestamp + block.difficulty +
            block.gaslimit
            ))) % upperNumber;
        return uint32(randomResult+1); 
    }
    
    function getNFTDetails(uint256 id) public view delegatedOnly returns(
            uint32, 
            string memory, 
            string memory,
            uint32, 
            uint32[] memory, 
            string memory) {
        return(NFTDetails[id].NFTLevel,
               CypherList(cypherList).getName(NFTDetails[id].cypherID),
               CypherList(cypherList).getCypherDescription(NFTDetails[id].cypherID),
               NFTDetails[id].totalXP,
               NFTDetails[id].stats,
               CypherList(cypherList).getImageLink(NFTDetails[id].cypherID));
    }

    function getNFTStats(uint256 id) public view delegatedOnly returns(
        uint32[] memory
    ) {
        return NFTDetails[id].stats;
    }

    function growCypher(uint256 id) public delegatedOnly {
        //only whitelisted contracts
        require(whitelistedContracts[msg.sender]);
        //increase monster level wins
        NFTDetails[id].totalXP = NFTDetails[id].totalXP + 100;
        //check if monster's wins meet or exceed requirements to level up
        uint[] memory levels = CypherList(cypherList).getLevelRequirements(NFTDetails[id].cypherID);
        if ((NFTDetails[id].NFTLevel+1)*100 <= NFTDetails[id].totalXP) {
            NFTDetails[id].NFTLevel = NFTDetails[id].NFTLevel + 1;
            //increase each monster stat with random number generator
            uint32[] memory ranges = CypherList(cypherList).getStatRanges(NFTDetails[id].cypherID);
            for (uint32 i; i<ranges.length; i++) {
                //random roll each stat(atk,def,spd,sp.atk,sp.def)
                NFTDetails[id].stats[i] = NFTDetails[id].stats[i] + statGen(ranges[i]);
            }
        }
        
        //add evolutions(future update)
    }

    function battleReward(uint32 tokenID, uint256 amount) public {
        require(whitelistedContracts[msg.sender]);
        NFTDetails[tokenID].versusHeld = NFTDetails[tokenID].versusHeld.add(amount);
    }

    function completeCypherRelease(uint32 cypherID) internal {
        msg.sender.call{value: NFTDetails[cypherID].versusHeld}("");
        NFTDetails[cypherID].versusHeld = 0;
    }
    
}

interface CypherList {
    function getLevelRequirements(uint32 index) external view returns(uint[] memory);
    function getName(uint32 index) external view returns(string memory);
    function getCypherDescription(uint32 index) external view returns(string memory);
    function getStatRanges(uint32 index) external view returns(uint32[] memory);
    function getImageLink(uint32 index) external view returns(string memory);
    function getYieldBoost(uint32 index) external view returns(uint32);
} 
