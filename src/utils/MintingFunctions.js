import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import VersusNFT from "../ABIs/VersusNFT.json";
import Layer2Tracker from "../ABIs/Layer2Tracker.json";
import {connectWallet} from "./UserData";

let versusNFTContract = '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4';

async function getCurrentID() {
    var web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        VersusNFT.abi,
        '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
    );
    let data = await Instance.methods.fetchMintData().call();
    return data[0];
}

async function getIDOwner(ID) {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let l2Instance = new web3.eth.Contract(
        Layer2Tracker.abi,
        '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
    );
    let l2Data = await l2Instance.methods.getIDOwner(ID).call();
    return l2Data;
}

async function getNFTDetails(ID) {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let l2Instance = new web3.eth.Contract(
        Layer2Tracker.abi,
        '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
    );
    let l2Data = await l2Instance.methods.getNFTDetails(ID).call();
    return l2Data;
}

//get current tokenID and maxID
async function fetchMintData() {
    var web3Provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');
    var web3 = new Web3(web3Provider);
    let contractInstance = new web3.eth.Contract(
        VersusNFT.abi,
        '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
    );

    let contractData = await contractInstance.methods.fetchMintData().call();
    return({
        currentTokenID: contractData[0],
        tokenLimit: contractData[1],
        hasStarted: contractData[2]
    })
    //call NFT contract max amount
    //call NFT contract current token ID
}

//mint Cypher
async function mintCypher(amount) {
    let currentID = await getCurrentID();
    //call contract with amount and appropriate ETH value
    let walletData = await connectWallet();
    let contractInstance = new walletData[1].eth.Contract(
        VersusNFT.abi,
        '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
    );
    let contractData = await contractInstance.methods.createNFT(walletData[0][0], amount).send({
        from: walletData[0][0]
    });
    let mintedIDs = [];
    
    if (Array.isArray(contractData.events.Transfer)) {
        for (let i = 0; i < contractData.events.Transfer.length; i++) {
            let cypherObject =  {
                ID: contractData.events.Transfer[i].returnValues[2],
                description: "",
                stats: []
            }
            mintedIDs.push(cypherObject);
        }
    } else {

        let cypherObject =  {
            ID: contractData.events.Transfer.returnValues[2],
            description: "",
            image: "",
            stats: []
        }
        mintedIDs.push(cypherObject);
    }
    
    return mintedIDs;
}

//check layer2tracker for ID owner confirmation/stats data
async function getBridgedData(tokenID) {
    //call for owner of specific ID
}

export {
    fetchMintData,
    getIDOwner,
    getNFTDetails,
    mintCypher,
    getBridgedData
 };