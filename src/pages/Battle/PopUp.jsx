import UserCard from './UserCard';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ReactComponent as Close } from '../../assets/images/Close.svg';
import User from '../../assets/images/characters/moon.gif';
import { useState } from 'react';

const data = [
    {
        id: 1,
        title: '#165: Ohwail',
        wins: 7,
        winRate: '75%',
        ethWon: 0.03,
        image: User,
    },
    {
        id: 2,
        title: '#165: Ohwail',
        wins: 7,
        winRate: '75%',
        ethWon: 0.03,
        image: User,
    },
    {
        id: 3,
        title: '#165: Ohwail',
        wins: 7,
        winRate: '75%',
        ethWon: 0.03,
        image: User,
    },
    {
        id: 4,
        title: '#165: Ohwail',
        wins: 7,
        winRate: '75%',
        ethWon: 0.03,
        image: User,
    },
];

const BattlePopUp = ({ showPopUp, closeModal }) => {
    const [closeAnimate, setCloseAnimate] = useState('');
    const [selecteditem, setSelectedItem] = useState(null);

    const closeHandler = () => {
        setCloseAnimate('close_animate ');
        setTimeout(() => {
            closeModal && closeModal();
            setCloseAnimate('');
        }, 200);
    };

    return (
        <Popup
            open={showPopUp}
            nested
            className={closeAnimate} // closeOnDocumentClick
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
                <div className='battle_pop'>
                    <div
                        className='main_title'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='400'>
                        Choose a monster to add
                    </div>
                    <div className='monster_details scroll_bar'>
                        {data.map((item, index) => (
                            <MonsterItem
                                key={index}
                                data={item}
                                isSelected={
                                    selecteditem && item.id === selecteditem.id
                                }
                                setSelected={(item) => setSelectedItem(item)}
                            />
                        ))}
                    </div>
                    <button>CONFIRM</button>
                </div>
            </>
        </Popup>
    );
};

const MonsterItem = ({ data, isSelected, setSelected }) => {
    return (
        <div
            className={`monster_item ${isSelected ? 'active' : ''}`}
            onClick={() => {
                setSelected && setSelected(data);
            }}>
            <UserCard
                image={data.image}
                title={data.title}
                wins={data.wins}
                winRate={data.winRate}
                ethWon={data.ethWon}
            />
            <div className='row_data'>
                <div className='title'>Level 10</div>
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
    );
};

export default BattlePopUp;
