import { useContext, useEffect, useState } from 'react';
import './styles.scss';
import BattlePopUp from './PopUp';
import UserCard from './UserCard';
import VersusContext from '../../store/Context';

import VS from '../../assets/images/VS.png';
import User1 from '../../assets/images/characters/moon.gif';
import User2 from '../../assets/images/characters/Bull.gif';
import LoaderImage from '../../assets/images/battlebg.jpg';

const Battle = () => {
    const contextData = useContext(VersusContext);
    const [showPopup, setPopUp] = useState(false);

    useEffect(() => {
        contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
    }, []);

    return (
        <>
            {!contextData.isLoading && contextData.initialloaderFinished && (
                <section className='battle_wrap'>
                    <BattlePopUp
                        showPopUp={showPopup}
                        closeModal={() => setPopUp(false)}
                    />
                    <div className='content_wrap'>
                        <div
                            className='box_wrap'
                            data-aos='zoom-in'
                            data-aos-offset='0'
                            data-aos-duration='200'>
                            <div
                                className='main_title'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='400'>
                                My Battling Monsters
                            </div>
                            <div className='content_scroller scroll_bar'>
                                <BattleItem />
                                <BattleItem />
                                <BattleItem />
                                <BattleItem />
                                <BattleItem />
                            </div>
                            <button
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='600'
                                onClick={() => setPopUp(true)}>
                                ADD MONSTER
                            </button>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

const BattleItem = () => {
    return (
        <div className='battle_item'>
            <div className='user'>
                <UserCard
                    image={User1}
                    title={'#165: Ohwail'}
                    wins={7}
                    winRate={'75%'}
                    ethWon={0.03}
                />
            </div>
            <img src={VS} alt='VS' />
            <div className='user'>
                <UserCard
                    image={User2}
                    title={'#165: Ohwail'}
                    wins={7}
                    winRate={'75%'}
                    ethWon={0.03}
                />
            </div>
            <div className='close'>-</div>
        </div>
    );
};

export default Battle;
