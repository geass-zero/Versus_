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
      <div
        ref={logoElement}
        className='logo_wrap'
        data-aos='zoom-in'
        data-aos-delay='200'
        data-aos-offset='0'
        data-aos-duration='400'>
        <img src={Logo} alt='Logo' className='logo to_be_hidden' />
        <img src={Logo} alt='Logo' className='logo always_up' />
      </div>
    </div>
  );
};

export default NewHome;
