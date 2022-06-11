import Shibachu from '../../../assets/images/Calfire.gif';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
// import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

import MainBGImage from '../../../assets/svg/Home/Main/MainBG.png';
import { ReactComponent as MainBG } from '../../../assets/svg/Home/Main/MainBG.svg';
import { ReactComponent as MainBigButton } from '../../../assets/svg/Home/Main/MainBigButton.svg';
import { ReactComponent as MainSmallButton } from '../../../assets/svg/Home/Main/MainSmallButton.svg';
import { useEffect, useRef } from 'react';

const Main = () => {
  const element = useRef(null);

  const parallaxEffect = () => {
    var parallax = element.current,
      speed = -2.5;

    var windowYOffset = window.pageYOffset,
      elBackgrounPos = 'calc(100% - ' + (windowYOffset * speed) / 155 + 'px)';

    parallax.style.backgroundPositionY = elBackgrounPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', parallaxEffect);

    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, []);

  return (
    <div className='main_section no_parallax_ios' ref={element}>
      <div className='content_wrap'>
        <div className='flex_box'>
          <div className='x1 image_wrap'>
            <img
              src={Shibachu}
              alt='shibachu.gif'
              className='shibachu'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
            />
          </div>
          <div className='x2'>
            <div
              className='box_svg main_box'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'>
              <img src={MainBGImage} className='box_svg mobile_hidden' />
              <div className='box_content'>
                An Animal Crossing inspired open world multiplayer Metaverse
                game home to Cyphers, Trainers, and new cultures.
              </div>
              <MainBG className='box_svg mobile_only' />
            </div>
            <div
              className='buttons_wrap'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'>
              <button className='transparent svg_wrap blue_button'>
                <a
                  href='https://discord.gg/QacH8SJGaw'
                  target={'_blank'}
                  rel='noreferrer'>
                  <MainSmallButton />
                </a>
              </button>
              <button className='transparent svg_wrap green_button'>
                <span></span>
                <MainBigButton />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
