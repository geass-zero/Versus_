import { useContext, useEffect, useState } from 'react';
import './styles.scss';
import BattlePopUp from './PopUp';
import {
    BattleDetailCard,
    CreatureCard,
    VersusMobileCard,
} from './BattleCardItems';
import UserCard from './UserCard';
import VersusContext from '../../store/Context';


import VS from '../../assets/images/VS.png';
import User1 from '../../assets/images/characters/moon.gif';
import User2 from '../../assets/images/characters/Bull.gif';
import CardImage from '../../assets/images/cardImage.png';

import LoaderImage from '../../assets/images/battlebg.jpg';

import {connectWallet, getUserTokenIDs} from '../../utils/UserData';
import {getCypherData, getCypherBattleData, getCypherBattleHistory, getDailyVersusRemaining} from '../../utils/BattleFunctions';

const Battle = () => {
    const contextData = useContext(VersusContext);
    const [showPopup, setPopUp] = useState(false);
    const [NFTObjects, setNFTObjects] = useState([]);
    const [currentNFTIndex, setCurrentNFTIndex] = useState(0);
    const [selectedNFTData, setSelectedNFTData] = useState(null);
    const [selectedNFTBattleData, setSelectedNFTBattleData] = useState(null);
    const [selectedNFTHistory, setSelectedNFTHistory] = useState(null);
    const [dailyVersus, setDailyVersus] = useState(0);

    const battleData = {
        wins: 0,
        win_rate: '100%',
        versus: '2.8k',
        fight_remain: 5,
    };

    useEffect(() => {
        localStorage.setItem('page', 'Battle');
        // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
        async function loadData() {
            let data = await getUserTokenIDs();
            setNFTObjects(data)
            setDailyVersus(await getDailyVersusRemaining())
            if (data[0]) {
                let NFTData = await getCypherPoolInfo(data[0][6]);
                let tokenHistory = await getCypherBattleHistory(data[0][6]);
                let tokenBattleData = await getCypherBattleData(data[0][6]);
                setSelectedNFTData(NFTData);
                setSelectedNFTBattleData(tokenBattleData);
                setSelectedNFTHistory(tokenHistory);

            }
        }
        loadData()
    }, []);

    async function getCypherPoolInfo(tokenID) {
        return await getCypherData(tokenID)
    } 

    async function switchSelectedCypher(val) {
        if (!val) {val = currentNFTIndex;}
        setCurrentNFTIndex(val);
        let NFTData = await getCypherPoolInfo(NFTObjects[val][6]);
        let tokenHistory = await getCypherBattleHistory(NFTObjects[val][6]);
        let tokenBattleData = await getCypherBattleData(NFTObjects[val][6]);
        setSelectedNFTData(NFTData);
        setSelectedNFTBattleData(tokenBattleData);
        setSelectedNFTHistory(tokenHistory);
    }

    

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
                                Battle Pool
                            </div>
                            <div
                                className='sub_title'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='400'>
                                Daily Versus Remaining: {dailyVersus? Number(dailyVersus).toFixed(2):0}
                            </div>
                            <div
                                className='sub_title'
                                data-aos='fade-up'
                                data-aos-offset='0'
                                data-aos-duration='400'>
                                Day ends in: **:**:**
                            </div>
                            {NFTObjects[0] && selectedNFTData && selectedNFTData[0] ?
                                <div className='content_scroller scroll_bar'>
                                    <div className='wrap_left'>
                                        <CreatureCard
                                            code={NFTObjects[currentNFTIndex][6]}
                                            creatureName={NFTObjects[currentNFTIndex][1]}
                                            image={User2}
                                            cardImage={NFTObjects[currentNFTIndex][5]}
                                            NFTObjects={NFTObjects}
                                            switchSelectedCypher={switchSelectedCypher}
                                        />
                                        <VersusMobileCard
                                            cardImage1={NFTObjects[currentNFTIndex][5]}
                                            cardImage2={CardImage}
                                        />
                                        {selectedNFTData ?
                                            <BattleDetailCard 
                                                ID={NFTObjects[currentNFTIndex][6]} 
                                                league={selectedNFTData[1]} 
                                                data={selectedNFTHistory} 
                                                battleData={selectedNFTBattleData}
                                                updateData={switchSelectedCypher} />
                                            :
                                            null
                                        }
                                    </div>
                                    <img src={VS} alt='VS' className='vs_icon' />
                                    <div className='wrap_right'>
                                        <CreatureCard
                                            code={'***'}
                                            creatureName={'*******'}
                                            image={User1}
                                            isOpponent={true}
                                            cardImage={CardImage}
                                            NFTObjects={NFTObjects}

                                        />
                                        {/* <BattleDetailCard
                                            data={battleData}
                                            isOpponent={true}
                                        /> */}
                                    </div>
                                </div> 
                                :
                                <div>
                                    <div
                                        className='main_title'
                                        data-aos='fade-up'
                                        data-aos-offset='0'
                                        data-aos-duration='400'>
                                        Loading...
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default Battle;
