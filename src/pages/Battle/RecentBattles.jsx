import { ReactComponent as RecentWrap } from '../../assets/svg/Battle/RecentWrap.svg';
import { ReactComponent as RecentWrapMobile } from '../../assets/svg/Battle/RecentWrapMobile.svg';
import VSImage from '../../assets/images/VS.png';
import crown from '../../assets/images/crown.png';

import Bull from '../../assets/images/characters/Bull.gif';
import Snake from '../../assets/images/characters/snake.gif';
import Bat from '../../assets/images/characters/bat.gif';
import Moon from '../../assets/images/characters/moon.gif';

const RecentBattles = () => {
  return (
    <div
      className='recent_battles_wrap svg_main_wrap'
      data-aos='fade-up'
      data-aos-offset='0'
      data-aos-duration='400'>
      <div className='padder'>
        <h1>Recent Global Battles</h1>
        <div className='cards_wrapper'>
          <VSCard image1={Bull} image2={Moon} isFirstUserWinner={true} />
          <VSCard image1={Bull} image2={Snake} isFirstUserWinner={false} />
          <VSCard image1={Bull} image2={Moon} isFirstUserWinner={true} />
          <VSCard image1={Bat} image2={Moon} isFirstUserWinner={false} />
        </div>
      </div>
      <RecentWrap className='box_svg mobile_hidden' />
      <RecentWrapMobile className='box_svg mobile_only' />
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