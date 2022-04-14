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
import LeftStickOn from '../../components/LeftStickOn';
import BattleHistory from './BattleHistory';
import RecentBattles from './RecentBattles';

import VS from '../../assets/images/VS.png';
import User1 from '../../assets/images/characters/moon.gif';
import User2 from '../../assets/images/characters/Bull.gif';
import CardImage from '../../assets/images/cardImage.png';

import LoaderImage from '../../assets/images/battlebg.jpg';
import Shibachu from '../../assets/images/Calfire.gif';

// import { ReactComponent as BattleBox } from '../../assets/svg/Battle/Box.svg';
// import { ReactComponent as BoxMobile } from '../../assets/svg/Battle/BoxMobile.svg';
import BattleBox from '../../assets/svg/Battle/Box.png';
import BoxMobile from '../../assets/svg/Battle/BoxMobile.png';
import { ReactComponent as EnterButton } from '../../assets/svg/Battle/EnterButton.svg';
import { ReactComponent as FightNowButton } from '../../assets/svg/Battle/FightNowButton.svg';
import { ReactComponent as HistoryButton } from '../../assets/svg/Battle/HistoryButton.svg';
import { ReactComponent as KButton } from '../../assets/svg/Battle/KButton.svg';
import { ReactComponent as RemainingBox } from '../../assets/svg/Battle/RemainingBox.svg';
import { ReactComponent as GreyButton } from '../../assets/svg/Battle/GreyButton.svg';

import { connectWallet, getUserTokenIDs } from '../../utils/UserData';
import {
  getCypherData,
  getCypherBattleData,
  getCypherBattleHistory,
  getDailyVersusRemaining,
} from '../../utils/BattleFunctions';

const Battle = () => {
  const contextData = useContext(VersusContext);
  const [showPopup, setPopUp] = useState(false);
  const [NFTObjects, setNFTObjects] = useState([]);
  const [currentNFTIndex, setCurrentNFTIndex] = useState(0);
  const [selectedNFTData, setSelectedNFTData] = useState(null);
  const [selectedNFTBattleData, setSelectedNFTBattleData] = useState(null);
  const [selectedNFTHistory, setSelectedNFTHistory] = useState(null);
  const [isEnteredBattlePool, setBattlePool] = useState(false);
  const [isRefilledEnergy, setRefillEnergy] = useState(false);
  const [isBattleHistoryVisible, setBattleHistory] = useState(false);
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
      setNFTObjects(data);
      setDailyVersus(await getDailyVersusRemaining());
      if (data[0]) {
        let NFTData = await getCypherPoolInfo(data[0][6]);
        let tokenHistory = await getCypherBattleHistory(data[0][6]);
        let tokenBattleData = await getCypherBattleData(data[0][6]);
        setSelectedNFTData(NFTData);
        setSelectedNFTBattleData(tokenBattleData);
        setSelectedNFTHistory(tokenHistory);
      }
    }
    loadData();
  }, []);

  async function getCypherPoolInfo(tokenID) {
    return await getCypherData(tokenID);
  }

  async function switchSelectedCypher(val) {
    if (!val) {
      val = currentNFTIndex;
    }
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
      <LeftStickOn />
      {isBattleHistoryVisible && (
        <BattleHistory onClose={() => setBattleHistory(false)} />
      )}
      {
        <section className='battle_wrap left_panel_auto_adjuster'>
          <BattlePopUp
            showPopUp={showPopup}
            closeModal={() => setPopUp(false)}
          />
          <div className='content_wrap'>
            {/* <div
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
                Daily Versus Remaining:{' '}
                {dailyVersus ? Number(dailyVersus).toFixed(2) : 0}
              </div>
              <div
                className='sub_title'
                data-aos='fade-up'
                data-aos-offset='0'
                data-aos-duration='400'>
                Day ends in: **:**:**
              </div>
              {NFTObjects[0] && selectedNFTData && selectedNFTData[0] ? (
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
                    {selectedNFTData ? (
                      <BattleDetailCard
                        ID={NFTObjects[currentNFTIndex][6]}
                        league={selectedNFTData[1]}
                        data={selectedNFTHistory}
                        battleData={selectedNFTBattleData}
                        updateData={switchSelectedCypher}
                      />
                    ) : null}
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
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className='main_title'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    Loading...
                  </div>
                </div>
              )}
            </div> */}
            <div className='flex_box full_width top_contents'>
              <div className='x2 mobile_hidden'>
                <img
                  src={Shibachu}
                  alt='Shibachu'
                  className='card_main'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='200'
                />
              </div>
              <div className='x2'>
                <div
                  className='box_wrap no_padding svg_main_wrap'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='300'>
                  <div className='boxer daily_wrapper svg_main_wrap'>
                    <RemainingBox className='box_svg' />
                    <div className='padder'>
                      <div className='item'>
                        <div className='circle'></div>
                        Daily Versus Remaining :{' '}
                        {dailyVersus ? Number(dailyVersus).toFixed(2) : 0}
                      </div>
                      <div className='item'>
                        <div className='circle'></div>Day Ends in: **:**:**
                      </div>
                    </div>
                  </div>
                  <div className='boxer main_content_wrapper svg_main_wrap'>
                    <img
                      src={BattleBox}
                      alt=''
                      className='box_svg mobile_hidden'
                    />
                    <img
                      src={BoxMobile}
                      alt=''
                      className='mobile_only box_svg_mobile'
                    />
                    {/* <BattleBox className='box_svg mobile_hidden' />
                    <BoxMobile className='mobile_only box_svg_mobile' /> */}
                    <div className='padder'>
                      <div className='topper'>
                        <div
                          className='main_title'
                          data-aos='fade-up'
                          data-aos-offset='0'
                          data-aos-duration='400'>
                          #120: Calfire
                        </div>
                        <div className='flex_box mobile_visible_wraper'>
                          <div className='card_main_wrap mobile_only'>
                            <img
                              src={Shibachu}
                              alt='Shibachu'
                              data-aos='zoom-in'
                              data-aos-offset='0'
                              data-aos-duration='400'
                            />
                          </div>
                          <div
                            className='data'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='450'>
                            <div className='item'>ATK:100</div>
                            <div className='item'>DEF:100</div>
                            <div className='item'>SPD:100</div>
                            <div className='item'>SP-ATK:100</div>
                            <div className='item'>SP-DEF:100</div>
                          </div>
                        </div>
                      </div>
                      <div className='buttons_box'>
                        <div className='top'>
                          {!isEnteredBattlePool ? (
                            <button
                              data-aos='fade-up'
                              data-aos-offset='0'
                              data-aos-duration='500'
                              className='enter_button transparent svg_wrap'
                              onClick={() => setBattlePool(true)}>
                              <EnterButton />
                              <span>ENTER BATTLE POOL</span>
                            </button>
                          ) : (
                            <>
                              <button className='grey_button transparent svg_wrap'>
                                <GreyButton />
                              </button>
                              <button
                                className='fight_button transparent svg_wrap'
                                onClick={() =>
                                  setRefillEnergy(!isRefilledEnergy)
                                }>
                                <FightNowButton />
                                {isRefilledEnergy ? (
                                  <>
                                    <div className='circle'></div>
                                    <span>
                                      Refill Energy{' '}
                                      <div className='sub'>
                                        (Cypher is out of energy)
                                      </div>
                                    </span>
                                  </>
                                ) : (
                                  <span>FIGHT NOW</span>
                                )}
                              </button>
                            </>
                          )}
                        </div>
                        <div
                          className='bottom'
                          data-aos='fade-up'
                          data-aos-offset='0'
                          data-aos-duration='600'>
                          <button className='k_button transparent svg_wrap'>
                            <KButton />
                            <span>271K</span>
                          </button>
                          <button
                            className='history_button transparent svg_wrap'
                            onClick={() => setBattleHistory(true)}>
                            <HistoryButton />
                            <span>BATTLE HISTORY</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RecentBattles />
          </div>
        </section>
      }
    </>
  );
};

export default Battle;
