import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import VersusNFT from "../ABIs/VersusNFT.json";
import Layer2Tracker from "../ABIs/Layer2Tracker.json";

//get current tokenID and maxID
async function fetchMintData() {
    //call NFT contract max amount
    //call NFT contract current token ID
}

//mint Cypher
async function mintCypher(amount) {
    //call contract with amount and appropriate ETH value
}

//check layer2tracker for ID owner confirmation/stats data
async function getBridgedData(tokenID) {
    //call for owner of specific ID
}

export {
    fetchMintData,
    mintCypher,
    getBridgedData
 };