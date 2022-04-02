import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { ReactComponent as InsideBox } from '../../assets/svg/Train/InsideBox.svg';
import Shibachu from '../../assets/images/Calfire.gif';
import LoaderImage from '../../assets/images/Card.png';
import { ReactComponent as PopUpBG } from '../../assets/svg/Mint/PopUpBG.svg';
import { ReactComponent as PopUpBGMobile } from '../../assets/svg/Mint/PopUpBGMobile.svg';
import { ReactComponent as Close } from '../../assets/svg/Mint/Close.svg';

import { useEffect, useState } from 'react';

const MintPopUp = ({ showPopUp, closeModal, mintedCyphers }) => {
  const [showPopUpReal, setPopUpReal] = useState(false);
  const [isAnimating, setAnimate] = useState(false);
  const [isRevealed, setReveal] = useState(false);
  const [closeAnimate, setCloseAnimate] = useState('');
  const closeHandler = () => {
    setCloseAnimate('close_animate ');
    setTimeout(() => {
      closeModal && closeModal();
      setCloseAnimate('');
    }, 200);
  };

  console.log(mintedCyphers);

  useEffect(() => {
    if (showPopUp) {
      setTimeout(() => {
        //animating income
        setPopUpReal(true);
        setAnimate(true);
        setTimeout(() => {
          // animate the reveal
          setReveal(true);
          setTimeout(() => {
            // show the Popup
            setAnimate(false);
          }, 400);
        }, 1200);
      }, 400);
    } else {
      setAnimate(false);
      setPopUpReal(false);
      setReveal(false);
    }
  }, [showPopUp]);

  function loadMintedCards() {
    let arr = [];
    for (let i = 0; i < mintedCyphers.length; i++) {
      arr.push(
        <MintedCard
          isAnimating={isAnimating}
          isRevealed={isRevealed}
          cypherInfo={mintedCyphers[i]}
        />
      );
    }
    return arr;
  }

  return (
    <Popup
      open={showPopUpReal}
      nested
      className={'mint_pop_wrap ' + closeAnimate + (isAnimating ? 'hold' : '')} // closeOnDocumentClick
      onClose={closeModal}
      data-aos='zoom-in'
      data-aos-offset='0'
      data-aos-duration='100'>
      {isRevealed && (
        <>
          <PopUpBG
            className='pop_bg mobile_hidden'
            data-aos='zoom-in'
            data-aos-offset='0'
            data-aos-delay='400'
            data-aos-duration='500'
          />
        </>
      )}
      <>
        <div
          className='shared_pop_close'
          onClick={() => {
            closeHandler();
          }}>
          <Close className='' />
        </div>
        <div className='mint_pop'>
          <Carousel
            statusFormatter={(current, total) => `${current} / ${total}`}
            showArrows={true}
            showIndicators={false}
            showThumbs={false}
            emulateTouch={false}
            swipeable={false}
            showStatus={true}>
            {loadMintedCards()}
          </Carousel>
        </div>
      </>
    </Popup>
  );
};

const MintedCard = ({ isAnimating, isRevealed, cypherInfo }) => {
  const [cypherImage, setCypherImage] = useState('');

  useEffect(() => {
    async function loadJson(url) {
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);
      setCypherImage(json['image']);
      //return json['image'];
    }
    if (cypherInfo['image']) loadJson(cypherInfo['image']);
    // setCypherImage(loadJson(cypherInfo['image']));
    // console.log(cypherImage);
  }, []);

  return (
    <div className='mint_card'>
      <div className='flex_box'>
        <div className='x2 image_wrap'>
          <div
            className={
              'image_boxed ' +
              (isAnimating ? 'image_anime' : 'stable_anime') +
              (isRevealed ? ' revealed' : '')
            }>
            <img src={LoaderImage} alt='LoaderImage' className='LoaderImage' />
            <img src={cypherImage} alt='Shibachu' />
          </div>
        </div>
        <div className='x2 details'>
          <div className='head'>#120: Calfire</div>
          <p>{cypherInfo['description']}</p>
          <div className='row_data svg_wrap'>
            <InsideBox />
            <div className='item'>
              ATK: <span>{cypherInfo['stats'][0]}</span>
            </div>
            <div className='item'>
              DEF: <span>{cypherInfo['stats'][1]}</span>
            </div>
            <div className='item'>
              SPD: <span>{cypherInfo['stats'][2]}</span>
            </div>
            <div className='item'>
              SP.ATK: <span>{cypherInfo['stats'][3]}</span>
            </div>
            <div className='item'>
              SP.DEF: <span>{cypherInfo['stats'][4]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintPopUp;
