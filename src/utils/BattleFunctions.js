import Web3 from "web3";
import Web3Modal from "web3modal";
import VersusNFT from "../ABIs/VersusNFT.json";
import BattlePool from "../ABIs/VersusBattlePool.json";
import BattleHistory from "../ABIs/VersusBattleHistory.json";
import {connectWallet, myWeb3} from "./UserData";

async function getCypherData(tokenID) {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattlePool.abi,
        '0xcD6B7Eb5517De1622b993471098A89085da8356E'
    );
    let data = await Instance.methods.cypherDetails(tokenID).call();
    return data;
}

async function getDailyVersusRemaining() {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattlePool.abi,
        '0xcD6B7Eb5517De1622b993471098A89085da8356E'
    );
    let data = await Instance.methods.dailyVersusRemaining().call();
    return Web3.utils.fromWei(data);
}

async function getCypherBattleData(tokenID) {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattlePool.abi,
        '0xcD6B7Eb5517De1622b993471098A89085da8356E'
    );
    let data = await Instance.methods.getCypherBattleData(tokenID).call();
    return data;
}

async function getCypherBattleHistory(tokenID) {
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattleHistory.abi,
        '0xA576e60E556a8B57b9cD51421bBA80C0A1A5eaA0'
    );
    let data = await Instance.methods.getTokenHistory(tokenID).call();
    return data;
}

async function enterCypherIntoPool(tokenID) {
    let walletData = await connectWallet();
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattlePool.abi,
        '0xcD6B7Eb5517De1622b993471098A89085da8356E'
    );
    web3.setProvider(window.ethereum);
    let data = await Instance.methods.enterCypher(tokenID).send({
        from: walletData[0][0]
    });
    return data;
}

async function removeCypherFromPool(tokenID) {
    let walletData = await connectWallet();
    var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
    var web3 = new Web3(web3Provider);
    let Instance = new web3.eth.Contract(
        BattlePool.abi,
        '0xcD6B7Eb5517De1622b993471098A89085da8356E'
    );
    web3.setProvider(window.ethereum);
    let data = await Instance.methods.removeCypher(tokenID).send({
        from: walletData[0][0]
    });
    return data;
}

async function triggerBattleForCypher(tokenID) {
    if(myWeb3) {
        let walletData = await connectWallet();
        var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
        var web3 = new Web3(web3Provider);
        let Instance = new web3.eth.Contract(
            BattlePool.abi,
            '0xcD6B7Eb5517De1622b993471098A89085da8356E'
        );
        web3.setProvider(window.ethereum);
        let data = await Instance.methods.fightNow(tokenID).send({
            from: walletData[0][0]
        });
        return data;
    }
}

export {
    getCypherData,
    getCypherBattleData,
    getCypherBattleHistory,
    getDailyVersusRemaining,
    enterCypherIntoPool,
    removeCypherFromPool,
    triggerBattleForCypher
 };