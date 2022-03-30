import Web3 from "web3";
import VersusNFT from "../ABIs/VersusNFT.json";
import Layer2Tracker from "../ABIs/Layer2Tracker.json";
import VersusTrainer from "../ABIs/VersusTrainer.json";
import {connectWallet} from "./UserData";

async function fetchCurrentMarketPrice() {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let trainer = new web3.eth.Contract(
        VersusTrainer.abi,
        '0x58Bcf4016b12d1157Ec12059527926f34Ec7FB48'
    );
    let price = await trainer.methods.getLatestPrice('0x5741306c21795FdCBb9b265Ea0255F499DFe515C').call();
    return price;
}

//get current tokenID and maxID
async function fetchCypherData(tokenID) {
    //call tokenID
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let trainer = new web3.eth.Contract(
        VersusTrainer.abi,
        '0x58Bcf4016b12d1157Ec12059527926f34Ec7FB48'
    );
    let data = await trainer.methods.getNFTData(tokenID).call();
    return data;
}

//get time left, user's position
async function fetchUserPosition() {

}

//make prediction
async function makePrediction(tokenID, direction) {
    let walletData = await connectWallet();
     //call tokenID
     var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
     var web3 = new Web3(web3Provider);
     web3.setProvider(window.ethereum);
     let trainer = new web3.eth.Contract(
         VersusTrainer.abi,
         '0x58Bcf4016b12d1157Ec12059527926f34Ec7FB48'
     );
     let data = await trainer.methods.makePrediction(tokenID, direction).send({
         from: walletData[0][0],
     });
}

//update contract status
async function finalizePrediction(tokenID) {
    let walletData = await connectWallet();
     //call tokenID
     var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
     var web3 = new Web3(web3Provider);
     web3.setProvider(window.ethereum);
     let trainer = new web3.eth.Contract(
         VersusTrainer.abi,
         '0x58Bcf4016b12d1157Ec12059527926f34Ec7FB48'
     );
    
     let data = await trainer.methods.finalizePrediction(tokenID).send({
         from: walletData[0][0],
     });
}



export {
    fetchCurrentMarketPrice,
    fetchCypherData,
    fetchUserPosition,
    makePrediction,
    finalizePrediction
 };