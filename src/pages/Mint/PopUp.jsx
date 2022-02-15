import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Shibachu from '../../assets/images/Calfire.gif';
import LoaderImage from '../../assets/images/Card.png';

import { ReactComponent as Close } from '../../assets/images/Close.svg';
import { useEffect, useState } from 'react';

const MintPopUp = ({ showPopUp, closeModal }) => {
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

    return (
        <Popup
            open={showPopUpReal}
            nested
            className={closeAnimate + (isAnimating ? 'hold' : '')} // closeOnDocumentClick
            onClose={closeModal}
            data-aos='zoom-in'
            data-aos-offset='0'
            data-aos-duration='100'>
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
                        statusFormatter={(current, total) =>
                            `${current} / ${total}`
                        }
                        showArrows={true}
                        showIndicators={false}
                        showThumbs={false}
                        emulateTouch={false}
                        swipeable={false}
                        showStatus={true}>
                        <MintedCard
                            isAnimating={isAnimating}
                            isRevealed={isRevealed}
                        />
                        <MintedCard
                            isAnimating={isAnimating}
                            isRevealed={isRevealed}
                        />
                        <MintedCard
                            isAnimating={isAnimating}
                            isRevealed={isRevealed}
                        />
                    </Carousel>
                </div>
            </>
        </Popup>
    );
};

const MintedCard = ({ isAnimating, isRevealed }) => {
    return (
        <div className='mint_card'>
            <div className='flex_box'>
                <div className='x2 '>
                    <div
                        className={
                            'image_boxed ' +
                            (isAnimating ? 'image_anime' : 'stable_anime') +
                            (isRevealed ? ' revealed' : '')
                        }>
                        <img
                            src={LoaderImage}
                            alt='LoaderImage'
                            className='LoaderImage'
                        />
                        <img src={Shibachu} alt='Shibachu' />
                    </div>
                </div>
                <div className='x2 details'>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore
                    </p>
                    <div className='row_data'>
                        <div className='item'>
                            ATK: <span>1</span>
                        </div>
                        <div className='item'>
                            DEF: <span>1</span>
                        </div>
                        <div className='item'>
                            SPD: <span>1</span>
                        </div>
                        <div className='item'>
                            SP.ATK: <span>1</span>
                        </div>
                        <div className='item'>
                            SP.DEF: <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MintPopUp;
