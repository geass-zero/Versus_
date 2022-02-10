import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Layer2Tracker from "../ABIs/Layer2Tracker.json";

let myWeb3;


async function connectWallet() {
    console.log('connecting');
    const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
               56: 'https://bsc-dataseed1.defibit.io/'
            },
            network: 'binance',
          }
        }
    };
    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required,
        theme: {
          background: "rgb(253, 250, 250)",
          main: "rgb(33, 37, 41)",
          secondary: "rgb(136, 136, 136)",
          border: "rgba(195, 195, 195, 0.14)",
          hover: "rgb(252,163,220)"
        }
    });
    let provider = await web3Modal.connect();

    const modalWeb3 = new Web3(provider);
    
    if (modalWeb3) {
        myWeb3 = modalWeb3;
    } else {
        // myWeb3 = await loadWeb3();
    }

    if (!myWeb3 && window.ethereum && window.ethereum.isMetaMask) {
        window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    return await myWeb3.eth.getAccounts();
}

async function getUserTokenIDs() {
    //return array of tokenIDs
}

async function getIDData(tokenID) {
    //returns data object
}



export {
    connectWallet
}