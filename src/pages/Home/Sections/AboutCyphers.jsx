import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Wrap } from '../../../assets/svg/Home/AboutChyphers/Wrap.svg';
import { ReactComponent as Diamond } from '../../../assets/svg/Home/AboutChyphers/Diamond.svg';
import { ReactComponent as AboutCyphersHead } from '../../../assets/svg/Home/AboutChyphers/AboutCyphers.svg';
import { ReactComponent as DiamondMobile } from '../../../assets/svg/Home/AboutChyphers/DiamondMobile.svg';
import { ReactComponent as WrapMobile } from '../../../assets/svg/Home/AboutChyphers/WrapMobile.svg';

const AboutCyphers = () => {
  return (
    <div className='cyphers_section'>
      <div className='image_bg'>
        <div className='content_wrap'>
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

          <div className='box_wrappers flex_box'>
            <div
              className='wrap_box box_wrapper x2'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'>
              <Diamond className='box_svg mobile_hidden diamond_svg' />
              <DiamondMobile className='box_svg mobile_only diamond_svg' />
            </div>
            <div className='wrap_box_2 box_wrapper x2'>
              <div
                className='header_title'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='350'>
                <AboutCyphersHead className='' />
              </div>
              <div
                className='item_box'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='400'>
                <Wrap className='box_svg mobile_hidden' />
                <WrapMobile className='box_svg mobile_only' />
                <div className='box_content'>
                  Cyphers are the names of the various types of creatures
                  spawned from the blockchain.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCyphers;
