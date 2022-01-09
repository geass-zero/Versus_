import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

const NFTs = () => {
    return (
        <div className='nfts_section'>
            <div className='content_wrap'>
                <div
                    className='text'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    <span>Versus</span> monsters are passive NFTs that earn
                    rewards automatically
                </div>
                <div className='characters_wrapper'>
                    <img
                        src={moon}
                        alt='char'
                        data-aos='zoom-in'
                        data-aos-offset='0'
                        data-aos-duration='500'
                    />
                    <img
                        src={Bull}
                        alt='char'
                        data-aos='zoom-in'
                        data-aos-offset='0'
                        data-aos-duration='400'
                    />
                    <img
                        src={bat}
                        alt='char'
                        data-aos='zoom-in'
                        data-aos-offset='0'
                        data-aos-duration='500'
                    />
                    <img
                        src={snake}
                        alt='char'
                        data-aos='zoom-in'
                        data-aos-offset='0'
                        data-aos-duration='400'
                    />
                </div>
            </div>
        </div>
    );
};

export default NFTs;
