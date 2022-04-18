import { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { ReactComponent as CloseIcon } from '../../assets/svg/Wallet/Close.svg';
import { ReactComponent as Screen } from '../../assets/svg/Wallet/screen.svg';
import { ReactComponent as ControllerBG } from '../../assets/svg/Wallet/ControllerBG.svg';
import { ReactComponent as Top } from '../../assets/svg/Wallet/Top.svg';
import { ReactComponent as Down } from '../../assets/svg/Wallet/Down.svg';
import { ReactComponent as Left } from '../../assets/svg/Wallet/Left.svg';
import { ReactComponent as Right } from '../../assets/svg/Wallet/Right.svg';
import GreyBG from '../../assets/svg/Wallet/BG.png';
import Bull from '../../assets/images/characters/Bull.gif';

const WalletPop = ({ onClose }) => {
  const [selectedCypher, setSelectedCypher] = useState(false);
  const controllerElement = useRef(null);
  const greyBoxElement = useRef(null);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  }, []);

  const onWindowResize = (e) => {
    //controller resizer
    const width = controllerElement.current.parentElement.clientWidth;
    console.log(width);
    controllerElement.current.style.height = width + 'px';

    //box resizer
    const height = greyBoxElement.current.clientHeight;
    controllerElement.current.parentElement.parentElement.style.height =
      height + 'px';
    // controllerElement.current.parentElement.nextSibling.style.height =
    //   height + 'px';
  };

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
        <div className='flex_box space_between'>
          <div
            className='x2'
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration='400'>
            <div className='special_box'>
              <img
                src={GreyBG}
                alt=''
                className='background'
                ref={greyBoxElement}
              />
              <div className='left_boxer'>
                <div className='controller_wrap' ref={controllerElement}>
                  <ControllerBG className='base' />
                  <div className='row'>
                    <Left />
                    <Right />
                  </div>
                  <div className='column'>
                    <Top />
                    <Down />
                  </div>
                </div>
                <Screen className='screen_svg' />
              </div>
              <div className='right_boxer'>
                <select name='cyphers' id='cyphers'>
                  <option value='My Cyphers'>My Cyphers</option>
                  <option value='My Cyphers'>My Cyphers</option>
                  <option value='My Cyphers'>My Cyphers</option>
                </select>
                <div className='list_wrapper'>
                  {[...Array(9).keys()].map((item, index) => (
                    <div className='card_wrap'>
                      <CypherCard
                        image={Bull}
                        key={index}
                        id={item}
                        isSelected={selectedCypher === item}
                        onSelect={(item) => setSelectedCypher(item)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

const CypherCard = ({ image, onSelect, id, isSelected }) => {
  return (
    <div
      className={`cypher_card ${isSelected ? 'active' : ''}`}
      onClick={() => {
        onSelect && onSelect(id);
      }}>
      <img src={image} alt='character' />
    </div>
  );
};

export default WalletPop;