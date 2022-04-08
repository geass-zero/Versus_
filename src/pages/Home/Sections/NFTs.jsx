import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Box } from '../../../assets/svg/Home/NFT/Box.svg';
import { ReactComponent as Top } from '../../../assets/svg/Home/NFT/nftTop.svg';

const NFTs = () => {
  return (
    <div className='nfts_section'>
      <div className='content_wrap'>
        {/* <div
                    className='text'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    <span>Versus</span> Cyphers are Chainlink integrated, crosschain NFTs that earn
                    rewards automatically.
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
                </div> */}
        <div className='box_wrap'>
          <Top className='top_svg' />
          <div className='box_svg main_box'>
            <Box className='box_svg' />
            <div className='text'>
              Versus Cyphers are Chainlink integrated, crosshchain NFTs that
              earn rewards automatically.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTs;
