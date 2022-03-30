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
               97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
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
    return [await myWeb3.eth.getAccounts(), myWeb3];
}

async function getUserTokenIDs() {
    if (myWeb3) {
        let walletData = await connectWallet();
        //return array of tokenIDs
        var web3Provider = new Web3.providers.HttpProvider('https://data-seed-prebsc-2-s2.binance.org:8545/');
        var web3 = new Web3(web3Provider);
        let l2Instance = new web3.eth.Contract(
            Layer2Tracker.abi,
            '0xC0B5ffF46f32a3B8E692f4e670cfFBaF1B19C8E4'
        );
        let IDs = await l2Instance.methods.getAddressTokenIDs(walletData[0][0]).call();
        let NFTObjects = [];
        for (let i = 0; i < IDs.length; i++) {
            let data = await l2Instance.methods.getNFTDetails(IDs[i]).call();
            NFTObjects.push({
                0: data[0],
                1: data[1],
                2: data[2],
                3: data[3],
                4: data[4],
                5: data[5],
                6: IDs[i]
            });
        }
        return NFTObjects;
    } else {
        return [];
    }
}

async function getIDData(tokenID) {
    //returns data object
}



export {
    connectWallet,
    getUserTokenIDs,
    myWeb3
}