import { useState } from 'react';
import MintPopUp from './PopUp';
import './styles.scss';
import LoaderImage from '../../assets/images/Card.png';

const Mint = () => {
    const [value, setValue] = useState(2);
    const [showPopup, setPopUp] = useState(false);

    const updateValue = (isAdd) => {
        if (isAdd) setValue(value + 1);
        else if (value > 0) setValue(value - 1);
    };
    return (
        <section className=' mint_wrap'>
            <MintPopUp
                showPopUp={showPopup}
                closeModal={() => setPopUp(false)}
            />
            <div className='content_wrap'>
                <img src={LoaderImage} className='load_loader_image' alt='' />
                <div className='flex_box'>
                    <div className='x2'></div>
                    <div className='x2'>
                        <div
                            className='box_wrap'
                            data-aos='zoom-in'
                            data-aos-offset='0'
                            data-aos-duration='300'>
                            <div className='minted'>
                                <div className='circle'></div>
                                <div>5,000 / 5,000 minted</div>
                            </div>
                            <div
                                className='title'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='400'>
                                Each <span>Versus</span> monster costs 0.05 ETH
                                to create
                            </div>
                            <div
                                className='value_box'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='500'>
                                0.10
                            </div>
                            <div
                                className='button_values'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='600'>
                                <div
                                    className='button'
                                    onClick={() => updateValue(true)}>
                                    &#43;
                                </div>
                                <div className='value'>{value}</div>
                                <div
                                    className='button'
                                    onClick={() => updateValue(false)}>
                                    &#8722;
                                </div>
                            </div>
                            <div
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='700'>
                                <button
                                    className={showPopup ? 'animate' : ''}
                                    onClick={() => setPopUp(true)}>
                                    Mint
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mint;
