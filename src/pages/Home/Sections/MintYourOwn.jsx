import { useState } from 'react';

import discordImage from '../../../assets/svg/Home/MintYourOwn/Discord.png';

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
            Reserve your whitelist spot.
          </div>
          <img
            src={discordImage}
            alt='discord'
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
