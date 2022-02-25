import { useContext, useEffect, useState } from 'react';
import './styles.scss';
import BattlePopUp from './PopUp';
import { BattleDetailCard, CreatureCard } from './BattleCardItems';
import UserCard from './UserCard';
import VersusContext from '../../store/Context';

import VS from '../../assets/images/VS.png';
import User1 from '../../assets/images/characters/moon.gif';
import User2 from '../../assets/images/characters/Bull.gif';
import CardImage from '../../assets/images/cardImage.png';

import LoaderImage from '../../assets/images/battlebg.jpg';

const Battle = () => {
    const contextData = useContext(VersusContext);
    const [showPopup, setPopUp] = useState(false);

    const battleData = {
        wins: 0,
        win_rate: '100%',
        versus: '2.8k',
        fight_remain: 5,
    };

    useEffect(() => {
        // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
    }, []);

    return (
        <>
            {
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
                                <div className='wrap_left'>
                                    <CreatureCard
                                        code={165}
                                        creatureName={'CREATURE NAME'}
                                        image={User2}
                                        cardImage={CardImage}
                                    />
                                    <BattleDetailCard data={battleData} />
                                </div>
                                <img src={VS} alt='VS' className='vs_icon' />
                                <div className='wrap_right'>
                                    <CreatureCard
                                        code={165}
                                        creatureName={'CREATURE NAME'}
                                        image={User1}
                                        isOpponent={true}
                                        cardImage={CardImage}
                                    />
                                    <BattleDetailCard
                                        data={battleData}
                                        isOpponent={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default Battle;
