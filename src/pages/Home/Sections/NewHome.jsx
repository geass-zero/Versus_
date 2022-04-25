import Logo from '../../../assets/svg/Home/NewHome/Logo.png';
import BG from '../../../assets/svg/Home/NewHome/BG.jpg';

const NewHome = () => {
  return (
    <div className='new_home'>
      <img src={BG} alt='background' className='bg' />
      <img
        src={Logo}
        alt='Logo'
        className='logo'
        data-aos='zoom-in'
        data-aos-offset='0'
        data-aos-duration='400'
      />
    </div>
  );
};

export default NewHome;
