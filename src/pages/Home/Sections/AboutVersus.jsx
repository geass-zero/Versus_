import bat from '../../../assets/images/characters/bat.gif';
import Bull from '../../../assets/images/characters/Bull.gif';
import moon from '../../../assets/images/characters/moon.gif';
import snake from '../../../assets/images/characters/snake.gif';

import { ReactComponent as Head } from '../../../assets/svg/Home/AboutVersus/Head.svg';
import { ReactComponent as Wrap } from '../../../assets/svg/Home/AboutVersus/Wrap.svg';
import { ReactComponent as Wrap2 } from '../../../assets/svg/Home/AboutVersus/Wrap2.svg';

const AboutVersus = () => {
  return (
    <div className='about_versus'>
      <div className='image_bg'>
        <div className='content_wrap'>
          <div className='header_title'>
            <Head className='' />
          </div>
          {/* <div className='detail_box'>
                    <div className='insider'>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            Versus is a world that exists in a parallel dimension, apart from earth.
                        </p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='insider'>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            Like our reality, the forward thinking scientists of Versus developed blockchain technology.
                        </p>
                    </div>
                </div>
                <div className='detail_box'>
                    <div className='insider'>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            However, unlike our reality, the blockchain spawned something new...
                        </p>
                    </div>
                </div> */}
          <div className='box_wrappers'>
            <div className='wrap_box box_wrapper'>
              <Wrap className='box_svg' />
              <div className='box_content'>
                Versus is a world that exists in a parallel dimension, apart
                from Earth. Versus is vast and wonderful with unique biomes,
                cultures, and technologies.
              </div>
            </div>
            <div className='wrap_box_2 box_wrapper'>
              <Wrap2 className='box_svg' />
              <div className='box_content'>
                Like our reality, the forward-thinking scientists of Versus
                developed blockchain technology. However, unlike our reality,
                the blockchain spawned something…new.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutVersus;
