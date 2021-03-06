import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import Wrap from '../../../assets/svg/Home/AboutChyphers/Wrap.png';
import Character from '../../../assets/svg/Home/AboutChyphers/Character.png';
import { ReactComponent as AboutCyphersHead } from '../../../assets/svg/Home/AboutChyphers/AboutCyphers.svg';
import { ReactComponent as DiamondMobile } from '../../../assets/svg/Home/AboutChyphers/DiamondMobile.svg';
import WrapMobile from '../../../assets/svg/Home/AboutChyphers/WrapMobile.png';

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
              <img
                data-aos='fade-right'
                data-aos-offset='0'
                data-aos-delay='300'
                data-aos-duration='400'
                src={Character}
                alt='Character'
                className='character_image'
              />
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
                <img src={Wrap} className='box_svg mobile_hidden' />
                <div className='box_content'>
                  <span>
                    Cyphers are the names of the various types of creatures
                    spawned from the blockchain.
                  </span>
                  <img src={WrapMobile} className='box_svg mobile_only' />
                </div>
              </div>
              <div
                className='item_box'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='400'>
                <img src={Wrap} className='box_svg mobile_hidden' />
                <div className='box_content'>
                  <span>
                    Currently, 30 Cyphers are known to exist with evidence of
                    even more hiding within the Metaverse!
                  </span>
                  <img src={WrapMobile} className='box_svg mobile_only' />
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
