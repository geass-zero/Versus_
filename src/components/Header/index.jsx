import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Wallet from './wallet';
import './styles.scss';
import logo from '../../assets/images/VersusLogo.png';
import { ReactComponent as WalletIcon } from '../../assets/svg/Wallet.svg';
import MapIcon from '../../assets/images/icon_map.png';
import WalletPop from './../WalletPop';
import MapPop from './../MapPop';
import { connectWallet } from '../../utils/UserData.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletOpen, setWalletOpen] = useState(false);
  const [isMapOpen, setMapOpen] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  const location = useLocation();

  async function connectToWallet() {
    setIsOpen(false);

    // let accounts = await connectWallet();
    // if (accounts[0]) {
    //   setCurrentAccount(accounts[0][0]);
    // }
  }

  useEffect(() => {
    if (isMapOpen || isWalletOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isWalletOpen, isMapOpen]);

  return (
    <>
      {isWalletOpen && <WalletPop onClose={() => setWalletOpen(false)} />}
      {isMapOpen && <MapPop onClose={() => setMapOpen(false)} />}
      <header data-aos='fade-down' data-aos-offset='0' data-aos-duration='200'>
        <div
          className={`new_header_style content_wrap ${isOpen ? 'active' : ''}`}>
          <div className='logo_wrap'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='link_wraps'>
            <Link
              onClick={() => setIsOpen(false)}
              to='/mint'
              className={`${location.pathname === '/mint' ? 'active' : ''}`}>
              Mint
            </Link>
            <Link
              to='/train'
              onClick={() => setIsOpen(false)}
              className={`${location.pathname === '/train' ? 'active' : ''}`}>
              Train
            </Link>
            <Link
              to='/battle'
              onClick={() => setIsOpen(false)}
              className={`${location.pathname === '/battle' ? 'active' : ''}`}>
              Battle
            </Link>
            <Link
              to='/shop'
              onClick={() => setIsOpen(false)}
              className={`${location.pathname === '/shop' ? 'active' : ''}`}>
              Item Shop
            </Link>
            <a
              href='https://versus-metaverse.gitbook.io/versus-metaverse-documentation'
              target='_blank'
              onClick={() => setIsOpen(false)}
              rel='noreferrer'>
              Docs
            </a>
          </div>
          <div className='connect_button'>
            <button
              className='map_icon'
              onClick={() => {
                setMapOpen(!isMapOpen);
                setWalletOpen(false);
              }}>
              <img id='icon_id' src={MapIcon} alt='map' />
            </button>
            {/* {currentAccount != '' ? (
              <button
                onClick={() => {
                  setMapOpen(false);
                  setWalletOpen(!isWalletOpen);
                  connectToWallet();
                }}>
                ...{currentAccount.substring(currentAccount.length - 5)}
              </button>
            ) : (
              <button
                onClick={() => {
                  setMapOpen(false);
                  setWalletOpen(!isWalletOpen);
                  connectToWallet();
                }}>
                <WalletIcon />
                <div className='circle'></div>
                <span>W.A.L.L.E.T.</span>
              </button>
            )} */}
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
    </>
  );
};

export default Header;
