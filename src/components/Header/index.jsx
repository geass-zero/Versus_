import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import logo from "../../assets/images/versus.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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
                        Mint
                    </Link>
                    <Link
                        to='/train'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/train' ? 'active' : ''
                        }`}>
                        Train
                    </Link>
                    <Link
                        to='/battle'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/battle' ? 'active' : ''
                        }`}>
                        Battle
                    </Link>
                    <Link
                        to='/docs'
                        onClick={() => setIsOpen(false)}
                        className={`${
                            location.pathname === '/docs' ? 'active' : ''
                        }`}>
                        Docs
                    </Link>
                </div>
                <div className='connect_button'>
                    <button>Connect</button>
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
        </header>
    );
};

export default Header;
