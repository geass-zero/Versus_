import Graphic from '../../../assets/images/Graphics/graphic.png';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

import { ReactComponent as Pinks } from '../../../assets/svg/Home/MintYourOwn/Pinks.svg';
import { ReactComponent as PinksMobile } from '../../../assets/svg/Home/MintYourOwn/PinksMobile.svg';
import { ReactComponent as Wrapbig } from '../../../assets/svg/Home/MintYourOwn/Wrapbig.svg';
import { ReactComponent as Wrapsmall } from '../../../assets/svg/Home/MintYourOwn/Wrapsmall.svg';

const MintYourOwn = () => {
  return (
    <div className='mint_your_own'>
      {/* <img src={Graphic} alt='Graphic' className='graphic' />
            <img src={GraphicLine} alt='Graphic' className='graphic_line1' /> */}
      {/* <img src={GraphicLine} alt='Graphic' className='graphic_line2' /> */}
      {/* <img src={GraphicLine1} alt='Graphic' className='graphic_line3' />
            <img src={GraphicLine2} alt='Graphic' className='graphic_line4' />
            <img src={GraphicLine1} alt='Graphic' className='graphic_line5' /> */}
      <div className='image_bg'>
        <div className='content_wrap'>
          {/* <h1
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    What are you waiting for?
                </h1>
                <p
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    Mint your own crosschain NFT monster and join the Versus Metaverse.
                </p>
                <button
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    Jump In!
                </button> */}

          <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='350'>
            <Pinks className='pink_dots mobile_hidden' />
            <PinksMobile className='pink_dots mobile_only' />
          </div>
          <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='400'>
            <Wrapbig className='big_wrap' />
          </div>
          <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='500'>
            <Wrapsmall className='small_wrap' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintYourOwn;
