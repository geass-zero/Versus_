import Discord from '../../../assets/images/SocialIcons/Discord.png';
import Twitter from '../../../assets/images/SocialIcons/Twitter.png';
import Telegram from '../../../assets/images/SocialIcons/Telegram.png';

const Footer = () => {
    return (
        <footer>
            <div className='content_wrap'>
                <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    <div className='logo'>Stay in the loop!</div>
                </div>
                <div
                    className='links_wrap'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    <a
                        href='https://google.com/'
                        target={'_blank'}
                        rel='noreferrer'>
                        <img src={Telegram} alt='Telegram' />
                    </a>
                    <a
                        href='https://google.com/'
                        target={'_blank'}
                        rel='noreferrer'>
                        <img src={Twitter} alt='Twitter' />
                    </a>
                    <a
                        href='https://google.com/'
                        target={'_blank'}
                        rel='noreferrer'>
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
