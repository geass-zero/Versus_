import './styles.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Wallet/Close.svg';
import MapImage from '../../assets/images/Map.jpg';

const MapPop = ({ onClose }) => {
  return (
    <div className='map_pop_wrap'>
      <div className='overlay' onClick={onClose}></div>
      {/* <div className='image_wrap'>
      </div> */}
      <div className='content_wrap'>
        <img
          src={MapImage}
          alt='Map'
          data-aos='fade-down'
          data-aos-offset='0'
          data-aos-duration='500'
        />
        <CloseIcon
          onClick={onClose}
          className='close_icon'
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-delay='600'
          data-aos-duration='500'
        />
      </div>
    </div>
  );
};

export default MapPop;
