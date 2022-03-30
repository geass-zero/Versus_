import { useState, useEffect, useRef } from 'react';
import Bull from '../../assets/images/characters/Bull.gif';
import VS from '../../assets/images/VS.png';
import Web3 from "web3";

import {enterCypherIntoPool, removeCypherFromPool, triggerBattleForCypher} from '../../utils/BattleFunctions';

const BattleDetailCard = ({ ID, league, data, battleData, isOpponent, updateData }) => {
    const [isHistoryOpen, setHistoryOpen] = useState(false);

    async function enterCypher(ID) {
        await enterCypherIntoPool(ID);
        updateData();
    }

    async function removeCypher(ID) {
        await removeCypherFromPool(ID);
        updateData();
    }

    async function fightNow(ID) {
        await triggerBattleForCypher(ID);
        updateData();
    }

    return (
        <div
            className={`battle_detail_card ${isOpponent ? 'is_opponent' : ''}`}>
            <div className='box_content'>
                <div className='main_details'>
                    <div>Wins: {data && data[1]}</div>
                    <div>Win Rate: {data && (data[1]/data[0])*100 || 0}%</div>
                    <div>{battleData && Number(Web3.utils.fromWei(battleData[1])).toFixed(2)} Versus held</div>
                </div>
                <div className='controls_wrap'>
                    <div className='left'>
                        <button onClick={() => setHistoryOpen(true)}>
                            Battle History
                        </button>
                        <div>
                            {isOpponent ? (
                                <div className='empty'>.</div>
                            ) : (
                                <>
                                    Fights Remaining:{' '}
                                    {battleData && 5 - battleData[0]}
                                </>
                            )}
                        </div>
                    </div>
                    <div className='right'>
                        {!isOpponent && (
                            <>
                                {league>0 ?
                                    <button onClick={()=>removeCypher(ID)} className='white small'>
                                        EXIT POOL
                                    </button>
                                    :
                                    <button onClick={()=>enterCypher(ID)} className='white small'>
                                        ENTER POOL
                                    </button>
                                }
                                {league>0 ?
                                    <button onClick={() => fightNow(ID)} className='white small'>
                                        FIGHT NOW
                                    </button>
                                    :
                                    <button></button>
                                }
                            </>
                        )}
                    </div>
                </div>
            </div>
            {isHistoryOpen && (
                <DetailBox onClose={() => setHistoryOpen(false)} />
            )}
        </div>
    );
};

const DetailBox = ({ onClose }) => {
    const detailBoxRef = useRef(null);

    useEffect(() => {
        window.addEventListener('click', closeOnClickOutside);

        return () => window.removeEventListener('keyup', closeOnClickOutside);
    }, []);

    const closeOnClickOutside = (e) => {
        if (detailBoxRef && detailBoxRef.current && !detailBoxRef.current.contains(e.target)) {
            onClose && onClose();
        }
    };

    return (
        <div className='detail_box' onBlur={() => onClose()} ref={detailBoxRef}>
            <span className='detail_head'>Battle History</span>
            <div className='scroll_wrap'>
                {/* <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem /> */}
            </div>
        </div>
    );
};

const DetailItem = () => {
    return (
        <div
            className='detail_item'
            data-aos='fade-up'
            data-aos-offset='0'
            data-aos-duration='400'>
            <div className='left_'>
                <div className='title'>VS.. #82 (CALFIRE)</div>
                <div className='icon'>
                    <img src={Bull} alt='Icon' />
                </div>
            </div>
            <div className='right_'>WIN</div>
        </div>
    );
};

const CreatureCard = ({ image, creatureName, code, isOpponent, cardImage, NFTObjects, switchSelectedCypher }) => {
    const [currentCypherIndex, setCurrentCypherIndex] = useState(0);
    const [cypherImage, setCypherImage] = useState('');
    if (!isOpponent) {getCardImage(cardImage)}
    function loadOptions() {
        let arr = [];
        for( let i = 0; i < NFTObjects.length; i++) {
            arr.push(
                <option value={i}>{NFTObjects[i][1]}</option>
                );
        }
        return arr;
    }

    useEffect(() => {
        // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
        async function loadData() {
            if (!isOpponent) {
                await getCardImage(cardImage);
            } else {
                setCypherImage(cardImage)
            }
        }
        loadData()
    }, [cypherImage]);

    async function getCardImage(url) {
        const data = await fetch(url)
        const json = await data.json()
        setCypherImage(json['image']);
    }



    function switchCypher(event) {
        switchSelectedCypher(event.target.value);
    }

    return (
        <div className={`creature_card  ${isOpponent ? 'is_opponent' : ''}`}>
            <div
                className='left_'
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-duration='400'>
                <img src={image && 'image'} alt={creatureName && creatureName} />
                {!isOpponent && (
                    <label htmlFor='creature_select' className='drop'>
                        <select onChange={(e)=>switchCypher(e)} name='creature_select' id='creature_select'>
                            {loadOptions()}
                            
                        </select>
                    </label>
                )}
            </div>
            <div className='right_'>
                <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    {creatureName && creatureName}
                </div>
                <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    #{code && code}
                </div>
                <div
                    className='card_image'
                    data-aos='fade-down'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    {cypherImage && <img src={cypherImage} alt='card' />}
                </div>
            </div>
        </div>
    );
};

const VersusMobileCard = ({ cardImage1, cardImage2 }) => {
    const [cypherImage1, setCypherImage] = useState('');
    getCardImage(cardImage1)

    useEffect(() => {
        // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
        async function loadData() {
            await getCardImage(cypherImage1);
        }
        loadData()
    }, [cypherImage1]);

    async function getCardImage(url) {
        const data = await fetch(url)
        const json = await data.json()
        setCypherImage(json['image']);
    }

    return (
        <div className='versus_mobile_card'>
            {cypherImage1 && <img src={cypherImage1} alt='VS' className='card' />}
            <img src={VS} alt='VS' className='vs_icon_card' />
            {cardImage2 && <img src={cardImage2} alt='VS' className='card' />}
        </div>
    );
};

export { BattleDetailCard, CreatureCard, VersusMobileCard };
