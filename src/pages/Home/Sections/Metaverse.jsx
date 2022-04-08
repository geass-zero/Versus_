import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Wrap } from '../../../assets/svg/Home/Metaverse/Wrap.svg';
import { ReactComponent as Top } from '../../../assets/svg/Home/Metaverse/Top.svg';
import { ReactComponent as Bottom } from '../../../assets/svg/Home/Metaverse/Bottom.svg';

const Metaverse = () => {
  return (
    <div className='metaverse_section'>
      <div className='image_bg'>
        <div className='content_wrap'>
          <div className='header_title'>
            <Top className='' />
            <span>An Animal Crossing inspired Metaverse</span>
          </div>
          <div className='wrap_box box_wrapper'>
            <Wrap className='box_svg' />
          </div>
          <div className='header_title bottom'>
            <Bottom className='' />
            <span>Track our progress</span>
          </div>
          {/* <div className='about_board'></div>
                <div className='world_wrapper'>
                    <div className='world_img'></div>
                    <div className='div_text'>The world of Versus is being translated into a 3D game!</div>
                </div>
                <div
                    className='text'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    Trainers and their cyphers will be able to explore the region
                    of ***** in an  online world.
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
