import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import Wrap from '../../../assets/svg/Home/AboutBridge/Wrap.png';
import WrapMobile from '../../../assets/svg/Home/AboutBridge/WrapMobile.png';
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
            <img src={Wrap} alt='' className='box_svg mobile_hidden' />
            <img src={WrapMobile} alt='' className='box_svg mobile_only' />
            <div className='box_content'>
              <p>
                Versus scientists have developed a bridge allowing Cyphers to
                currently exist on both Ethereum and the Binance Smart Chain.
              </p>
            </div>
          </div>
          <div
            className='wrap_box box_wrapper'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            <img src={Wrap} alt='' className='box_svg mobile_hidden' />
            <img src={WrapMobile} alt='' className='box_svg mobile_only' />
            <div className='box_content'>
              <p>
                This technology allows Versus citizens the freedom to expand
                beyond the limits of any one chain.
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
