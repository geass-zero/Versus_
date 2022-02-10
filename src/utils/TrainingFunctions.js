import Web3 from "web3";
import VersusNFT from "../ABIs/VersusNFT.json";
import Layer2Tracker from "../ABIs/Layer2Tracker.json";
import VersusTrainer from "../ABIs/VersusTrainer.json";

//get current tokenID and maxID
async function fetchCypherData(tokenID) {
    //call tokenID
}

//get time left, user's position
async function fetchUserPosition() {

}

//make prediction
async function makePrediction(tokenID, direction) {

}

//update contract status
async function finalizePrediction(tokenID) {

}



export {
    fetchCypherData,
    fetchUserPosition,
    makePrediction,
    finalizePrediction
 };