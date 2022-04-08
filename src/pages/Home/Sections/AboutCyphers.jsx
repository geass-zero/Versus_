import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Wrap } from '../../../assets/svg/Home/AboutChyphers/Wrap.svg';
import { ReactComponent as Diamond } from '../../../assets/svg/Home/AboutChyphers/Diamond.svg';
import { ReactComponent as AboutCyphersHead } from '../../../assets/svg/Home/AboutChyphers/AboutCyphers.svg';

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
            <div className='wrap_box box_wrapper x2'>
              <Diamond className='box_svg' />
            </div>
            <div className='wrap_box_2 box_wrapper x2'>
              <div className='header_title'>
                <AboutCyphersHead className='' />
              </div>
              <div className='item_box'>
                <Wrap className='box_svg' />
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
