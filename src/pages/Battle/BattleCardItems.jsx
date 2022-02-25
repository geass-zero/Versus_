import { useState } from 'react';
import Bull from '../../assets/images/characters/Bull.gif';
import VS from '../../assets/images/VS.png';

const BattleDetailCard = ({ data, isOpponent }) => {
    const [isHistoryOpen, setHistoryOpen] = useState(false);

    return (
        <div
            className={`battle_detail_card ${isOpponent ? 'is_opponent' : ''}`}>
            <div className='box_content'>
                <div className='main_details'>
                    <div>Wins: {data && data.wins}</div>
                    <div>Win Rate: {data && data.win_rate}</div>
                    <div>{data && data.win_rate} Versus held</div>
                </div>
                <div className='controls_wrap'>
                    <div className='left'>
                        <button onClick={() => setHistoryOpen(!isHistoryOpen)}>
                            Battle History
                        </button>
                        <div>
                            {isOpponent ? (
                                <div className='empty'>.</div>
                            ) : (
                                <>
                                    Flights Remaining:{' '}
                                    {data && data.fight_remain}
                                </>
                            )}
                        </div>
                    </div>
                    <div className='right'>
                        {!isOpponent && (
                            <>
                                <button className='white small'>
                                    ENTER POOL
                                </button>
                                <button className='white small'>
                                    FIGHT NOW
                                </button>
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
    return (
        <div className='detail_box'>
            <span className='detail_head' onClick={() => onClose()}>
                Battle History
            </span>
            <div className='scroll_wrap'>
                <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem />
                <DetailItem />
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

const CreatureCard = ({ image, creatureName, code, isOpponent, cardImage }) => {
    return (
        <div className={`creature_card  ${isOpponent ? 'is_opponent' : ''}`}>
            <div
                className='left_'
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-duration='400'>
                <img src={image && image} alt={creatureName && creatureName} />
                {!isOpponent && (
                    <label htmlFor='creature_select' className='drop'>
                        <select name='creature_select' id='creature_select'>
                            <option value='Test'>Test</option>
                            <option value='Test'>Test</option>
                            <option value='Test'>Test</option>
                            <option value='Test'>Test</option>
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
                    {cardImage && <img src={cardImage} alt='card' />}
                </div>
            </div>
        </div>
    );
};

const VersusMobileCard = ({ cardImage1, cardImage2 }) => {
    return (
        <div className='versus_mobile_card'>
            {cardImage1 && <img src={cardImage1} alt='VS' className='card' />}
            <img src={VS} alt='VS' className='vs_icon_card' />
            {cardImage2 && <img src={cardImage2} alt='VS' className='card' />}
        </div>
    );
};

export { BattleDetailCard, CreatureCard, VersusMobileCard };
