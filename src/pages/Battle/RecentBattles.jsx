import { useState, useEffect } from 'react';
import RecentWrap from '../../assets/svg/Battle/RecentWrap.png';
import RecentWrapMobile from '../../assets/svg/Battle/RecentWrapMobile.png';
import VSImage from '../../assets/images/VS.png';
import crown from '../../assets/images/crown.png';

import Bull from '../../assets/images/characters/Bull.gif';
import Snake from '../../assets/images/characters/snake.gif';
import Bat from '../../assets/images/characters/bat.gif';
import Moon from '../../assets/images/characters/moon.gif';
import { ReactComponent as HideArrow } from '../../assets/svg/HideArrow.svg';

const RecentBattles = () => {
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    if (isHidden)
      document.getElementsByTagName('html')[0].classList.add('overflow_hidden');
    else
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow_hidden');

    return () => {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow_hidden');
    };
  }, [isHidden]);

  return (
    <div
      className={`recent_battles_wrap svg_main_wrap  ${
        isHidden ? 'is_hidden' : ''
      }`}>
      <div data-aos='fade-up' data-aos-offset='0' data-aos-duration='400'>
        <div className={`hide_icon_battle`}>
          <HideArrow onClick={() => setHidden(!isHidden)} />
        </div>
        <div className='padder'>
          <h1>Recent Global Battles</h1>
          <div className='cards_wrapper'>
            {/* <VSCard image1={Bull} image2={Moon} isFirstUserWinner={true} />
            <VSCard image1={Bull} image2={Snake} isFirstUserWinner={false} />
            <VSCard image1={Bull} image2={Moon} isFirstUserWinner={true} />
            <VSCard image1={Bat} image2={Moon} isFirstUserWinner={false} /> */}
          </div>
        </div>
        <img
          src={RecentWrap}
          className='wrap_image box_svg mobile_hidden'
          alt=''
        />
        <img
          src={RecentWrapMobile}
          className='wrap_image box_svg mobile_only'
          alt=''
        />
        {/* <RecentWrap className='box_svg mobile_hidden' />
      <RecentWrapMobile className='box_svg mobile_only' /> */}
      </div>
    </div>
  );
};

const VSCard = ({ image1, image2, isFirstUserWinner }) => {
  return (
    <div className='vs_card'>
      <div className='profile'>
        {isFirstUserWinner && (
          <img src={crown} alt='crown' className='crown_image' />
        )}
        <img src={image1} alt='Battle User' />
      </div>
      <img src={VSImage} alt='VS' className='vs_image' />
      <div className='profile'>
        {!isFirstUserWinner && (
          <img src={crown} alt='crown' className='crown_image' />
        )}
        <img src={image2} alt='Battle User' />
      </div>
    </div>
  );
};

export default RecentBattles;
