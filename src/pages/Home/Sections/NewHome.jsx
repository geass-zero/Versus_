import { useRef } from 'react';
import Logo from '../../../assets/svg/Home/NewHome/Logo.png';
import BG from '../../../assets/svg/Home/NewHome/BG.jpg';

const NewHome = () => {
  const logoElement = useRef(null);
  const onBGLoaded = () => {
    setTimeout(() => {
      logoElement.current && logoElement.current.classList.add('loaded');
    }, 3000);
  };

  return (
    <div className='new_home'>
      <img src={BG} alt='background' className='bg' onLoad={onBGLoaded} />
      <img
        ref={logoElement}
        src={Logo}
        alt='Logo'
        className='logo'
        data-aos='zoom-in'
        data-aos-delay='200'
        data-aos-offset='0'
        data-aos-duration='400'
      />
    </div>
  );
};

export default NewHome;
