import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Wallet from './wallet';
import './styles.scss';
import logo from "../../assets/images/versus.png";
import {connectWallet} from "../../utils/UserData.js"


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const location = useLocation();

    async function connectToWallet() {
        setIsOpen(false)
        let accounts = await connectWallet();
        if (accounts[0]) {
            setCurrentAccount(accounts[0][0]);
        }
    }

    return (
        <header
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration='200'>
            <div className={`content_wrap ${isOpen ? 'active' : ''}`}>
                <div className='logo_wrap'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className='link_wraps'>
                    <Link
                        onClick={() => setIsOpen(false)}
                        to='/mint'
                        className={`${
                            location.pathname === '/mint' ? 'active' : ''
                        }`}>
                        MINT
                    </Link>
                    <Link
                        to='/train'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/train' ? 'active' : ''
                        }`}>
                        TRAIN
                    </Link>
                    <Link
                        to='/battle'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/battle' ? 'active' : ''
                        }`}>
                        BATTLE
                    </Link>
                    <Link
                        to='/docs'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/docs' ? 'active' : ''
                        }`}>
                        DOCS
                    </Link>
                </div>
                {/* <div  onClick={() => connectToWallet()} className='connect_button'>
                    w
                </div> */}
                <div  onClick={() => connectToWallet()} className='connect_button'>
                    {currentAccount != '' ?
                        <button>...{currentAccount.substring(currentAccount.length - 5)}</button>
                        :
                        <button>Connect</button>
                    }
                </div>
                <div
                    id='nav-icon3'
                    className={`${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <Wallet/> */}
        </header>
    );
};

export default Header;
