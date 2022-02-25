import { useState } from 'react';
import Bull from '../../assets/images/characters/Bull.gif';

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
            {isHistoryOpen && <DetailBox />}
        </div>
    );
};

const DetailBox = () => {
    return (
        <div className='detail_box'>
            <span className='detail_head'>Battle History</span>
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
        <div className='detail_item'>
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
            <div className='left_'>
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
                <div>{creatureName && creatureName}</div>
                <div>#{code && code}</div>
                <div className='card_image'>
                    {cardImage && <img src={cardImage} alt='card' />}
                </div>
            </div>
        </div>
    );
};

export { BattleDetailCard, CreatureCard };
