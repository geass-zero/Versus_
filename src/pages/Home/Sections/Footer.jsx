import { Link } from 'react-router-dom';
import Discord from '../../../assets/images/SocialIcons/Discord.png';
import Twitter from '../../../assets/images/SocialIcons/Twitter.png';
import Telegram from '../../../assets/images/SocialIcons/Telegram.png';

const Footer = () => {
    function openLink(url) {
        window.open(url, '_blank');
    }

    return (
        <footer>
            <div className='content_wrap'>
                <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    <div className='logo'>Join the party!</div>
                </div>
                <div
                    className='links_wrap'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    <a href='#' onClick={() => openLink('https://t.me/versusmetaverse')}>
                        <img src={Telegram} alt='Telegram' />
                    </a>
                    <a to='#' onClick={() => openLink('https://twitter.com/VersusMetaverse')}>
                        <img src={Twitter} alt='Twitter' />
                    </a>
                    <a to='#' onClick={() => openLink('https://discord.gg/YYsqDX8Rpf')}>
                        <img src={Discord} alt='Discord' />
                    </a>
                </div>
                <div
                    className='copyright'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    <div className='reserved'>All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
