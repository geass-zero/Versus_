import { useState } from 'react';

import { ReactComponent as Spot } from '../../../assets/svg/Home/MintYourOwn/Spot.svg';

const MintYourOwn = () => {
  return (
    <div className='mint_your_own'>
      <div className='image_bg'>
        <div className='content_wrap'>
          <div
            className='main_text'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='350'>
            YOU CAN HELP CHANGE THE WORLD OF VERSUS!
          </div>
          <div
            className='spot'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            Get a whitelist spot.
          </div>
          <Spot
            className='spot_svg'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='450'
          />
        </div>
        <footer>© 2022 Versus Metaverse. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default MintYourOwn;
