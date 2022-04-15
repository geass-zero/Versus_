import './styles.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Wallet/Close.svg';

const WalletPop = ({ onClose }) => {
  return (
    <div className='wallet_pop_up_main'>
      <div className='overlay' onClick={onClose}></div>
      <div className='content_wrap'>
        <CloseIcon
          onClick={onClose}
          className='close_icon'
          data-aos='zoom-in'
          data-aos-offset='0'
          data-aos-delay='600'
          data-aos-duration='500'
        />
        <div className='flex_box'>
          <div
            className='x2'
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration='400'></div>
          <div
            className='x2'
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration='500'>
            <div className='second_box_wrap'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPop;
