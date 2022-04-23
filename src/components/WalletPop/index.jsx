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
import LevelBG from '../../assets/svg/Wallet/LevelBG.png';
// import ReleaseButton from '../../assets/svg/Wallet/ReleaseButton.png';
import { ReactComponent as ReleaseButton } from '../../assets/svg/Wallet/ReleaseButton.svg';
import { ReactComponent as ReleaseButtonMobile } from '../../assets/svg/Wallet/ReleaseButtonMobile.svg';
// import RollButton from '../../assets/svg/Wallet/RollButton.png';
import { ReactComponent as RollButton } from '../../assets/svg/Wallet/RollButton.svg';
import { ReactComponent as RollButtonMobile } from '../../assets/svg/Wallet/RollButtonMobile.svg';
import Bull from '../../assets/images/characters/Bull.gif';
import Shibachu from '../../assets/images/Calfire.gif';

const WalletPop = ({ onClose }) => {
  const [selectedCypher, setSelectedCypher] = useState(false);
  const controllerElement = useRef(null);
  const greyBoxElement = useRef(null);
  const rollButtonElement = useRef(null);

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const onWindowResize = (e) => {
    //controller resizer
    if (controllerElement.current) {
      const width = controllerElement.current.parentElement.clientWidth;
      controllerElement.current.style.height = width + 'px';
    }

    //box resizer
    if (greyBoxElement.current) {
      const height = greyBoxElement.current.clientHeight;
      controllerElement.current.parentElement.parentElement.style.height =
        height + 'px';
    }

    //buttons resizer
    if (rollButtonElement.current) {
      const buttonHeight = rollButtonElement.current.clientHeight;
      rollButtonElement.current.parentElement.previousSibling.style.maxHeight =
        buttonHeight + 'px';
    }
  };

  return (
    <div className='wallet_pop_up_main'>
      <div className='overlay' onClick={onClose}></div>
      <div className='content_wrap scroll_bar'>
        <div className='flex_box space_between'>
          <div
            className='x2'
            data-aos='fade-down'
            data-aos-offset='0'
            data-aos-duration='400'>
            <div className='special_box'>
              <CloseIcon
                onClick={onClose}
                className='close_icon mobile_only'
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-delay='600'
                data-aos-duration='500'
              />
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
                    <div className='card_wrap' key={index}>
                      <CypherCard
                        image={Bull}
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
            <div className='second_box_wrap'>
              <CloseIcon
                onClick={onClose}
                className='close_icon mobile_hidden'
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-delay='600'
                data-aos-duration='500'
              />
              <div className='top_section'>
                <img
                  src={Shibachu}
                  alt='Character'
                  className='character_image'
                />
                <div className='information_wrap'>
                  <div className='title'>#120: Calfire</div>
                  <p>Cypher description here...</p>
                </div>
                <div className='level_details'>
                  <img src={LevelBG} alt='BG' className='bg' />
                  <div className='level'>Level 23</div>
                  <div className='data'>
                    <div className='item'>ATK: 100</div>
                    <div className='item'>DEF: 100</div>
                    <div className='item'>SPD: 100</div>
                    <div className='item'>SP-ATK: 100</div>
                    <div className='item'>SP-DEF: 100</div>
                  </div>
                </div>
              </div>
              <div className='buttons_wrap'>
                <button className='transparent svg_wrap release_button'>
                  {/* <img src={ReleaseButton} alt='button' /> */}
                  <ReleaseButton className='mobile_hidden' />
                  <ReleaseButtonMobile className='mobile_only' />
                  {/* <span>Release Cypher</span>
                  <div className='small'>(You will lose the Cypher)</div> */}
                </button>
                <button className='transparent svg_wrap reroll_stat'>
                  <RollButton
                    ref={rollButtonElement}
                    className='mobile_hidden'
                  />
                  <RollButtonMobile className='mobile_only' />
                  {/* <img src={RollButton} alt='button' />
                  <span>Re-Roll Stats</span>
                  <div className='small'>(For current level)</div> */}
                </button>
              </div>
            </div>
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
