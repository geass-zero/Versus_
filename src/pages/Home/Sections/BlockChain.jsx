import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Wrap } from '../../../assets/svg/Home/AboutBridge/Wrap.svg';
import { ReactComponent as WrapMobile } from '../../../assets/svg/Home/AboutBridge/WrapMobile.svg';
import { ReactComponent as Top } from '../../../assets/svg/Home/AboutBridge/top.svg';
import { ReactComponent as TopMobile } from '../../../assets/svg/Home/AboutBridge/topmobile.svg';

const BlockChain = () => {
  return (
    <div className='bridge_section'>
      <div className='image_bg'>
        <div className='content_wrap'>
          <div
            className='header_title'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='350'>
            <Top className='mobile_hidden' />
            <TopMobile className='mobile_only' />
            <span>What blockchain does versus live on?</span>
          </div>
          <div
            className='wrap_box box_wrapper'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            <Wrap className='box_svg mobile_hidden' />
            <WrapMobile className='box_svg mobile_only' />
            <div className='box_content'>
              <p>
                The Versus ecosystem exists on both the Ethereum mainnet as well
                as the Binance Smart Chain (BSC) mainnet and is thus inherently
                Multichain.
              </p>
              <p>
                Importantly, battling and training your Cypher NFT occurs
                predominantly on BSC. However, this DOES NOT require your Cypher
                to exist on BSC itself.
              </p>
              <p>
                In this way Versus links BSC micro transaction affordability
                with the ERC-721 “gold standard” of NFTs.
              </p>
            </div>
          </div>
          {/* <div className='about_board'></div> */}
          {/* <div
                    className='text'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    Versus trainers mint their cyphers on the Ethereum Blockchain, 
                    and train them on the Binance Smart Chain. 
                </div>
                <div className='bridge_wrapper'>
                    
                </div>
                <div
                    className='text'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    This occurs through a process known as Bridging. 
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlockChain;
