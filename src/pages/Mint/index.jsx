import { useEffect, useState, useContext } from 'react';
import MintPopUp from './PopUp';
import './styles.scss';
import LoaderImage from '../../assets/images/Card.png';

import VersusContext from '../../store/Context';
import {fetchMintData, mintCypher, getBridgedData} from '../../utils/MintingFunctions';

const Mint = () => {
    const contextData = useContext(VersusContext);
    const [value, setValue] = useState(2);
    const [showPopup, setPopUp] = useState(false);
    const [currentTokenID, setCurrentTokenID] = useState(0);
    const [currentMax, setCurrentMax] = useState(0);
    const [mintFee, setMintFee] = useState(0.099);
    const [mintedCyphers, setMintedCyphers] = useState([]);

    const updateValue = (isAdd) => {
        if (isAdd) setValue(value + 1);
        else if (value > 0) setValue(value - 1);
    };


    useEffect(() => {
        // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
    }, []);
                              
    async function getMintData() {
        let data = await fetchMintData();

    }

    async function mint() {
        await mintCypher(value);
        //call getBridgedData to get confirmation
        setPopUp(true);
    }

    return (
        <>
            {
               (
                <section className=' mint_wrap'>
                    <MintPopUp
                        showPopUp={showPopup}
                        closeModal={() => setPopUp(false)}
                        mintedCyphers
                    />
                    <div className='content_wrap'>
                        <img src={LoaderImage} className='load_loader_image' alt='' />
                        <div className='flex_box'>
                            <div className='x2'>
                                <div className='mint_professor'></div>
                            </div>
                            <div className='x2'>
                                <div
                                    className='box_wrap'
                                    data-aos='zoom-in'
                                    data-aos-offset='0'
                                    data-aos-duration='300'>
                                    <div className='minted'>
                                        <div className='circle'></div>
                                        <div>(Minting starts soon)</div>
                                    </div>
                                    <div
                                        className='title'
                                        data-aos='fade-up'
                                        data-aos-offset='0'
                                        data-aos-duration='400'>
                                        Each <span>Cypher</span> costs 0.099 ETH
                                        to create
                                    </div>
                                    <div
                                        className='value_box'
                                        data-aos='fade-up'
                                        data-aos-offset='0'
                                        data-aos-duration='500'>
                                        {(0.099*value).toFixed(3)}
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
                                            onClick={() => mint()}
                                            className={showPopup ? 'animate' : ''}>
                                            Mint
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
               ) 
            }
        </>
    )
};

export default Mint;
