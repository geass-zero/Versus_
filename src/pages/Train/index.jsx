import { useContext, useState, useEffect } from 'react';
import './styles.scss';
import VersusContext from '../../store/Context';

import Arrow from '../../assets/images/Icon awesome-arrow-left.png';

import TrainBox from '../../assets/svg/Train/Box.png';
import BoxMobile from '../../assets/svg/Train/BoxMobile.png';
import { ReactComponent as InsideBox } from '../../assets/svg/Train/InsideBox.svg';
import { ReactComponent as InsideBoxMobile } from '../../assets/svg/Train/InsideBoxMobile.svg';
import { ReactComponent as Down } from '../../assets/svg/Train/Down.svg';
import { ReactComponent as Up } from '../../assets/svg/Train/Up.svg';
import { ReactComponent as Checkbutton } from '../../assets/svg/Train/Checkbutton.svg';
import { ReactComponent as Bento } from '../../assets/svg/Train/Bento.svg';
import Shibachu from '../../assets/images/Calfire.gif';

import LoaderImage from '../../assets/images/trainbg.jpg';
import { connectWallet, getUserTokenIDs } from '../../utils/UserData';

import {
  fetchCurrentMarketPrice,
  fetchCypherData,
  finalizePrediction,
  makePrediction,
} from '../../utils/TrainingFunctions';
import LeftStickOn from '../../components/LeftStickOn';

const Train = () => {
  const contextData = useContext(VersusContext);
  const [NFTObjects, setNFTObjects] = useState([]);
  const [currentNFTStats, setCurrentNFTStats] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPredicted, setIsPredicted] = useState(false);
  const [resultButtonVisible, resultsButtonVisible] = useState(false);

  const [currentMarketPrice, setCurrentMarketPrice] = useState(0);
  let testData = [];

  useEffect(() => {
    localStorage.setItem('page', 'Train');
    (async () => {
      await getMintData();
      await getMarketPrice();

      let interval = setInterval(async function () {
        if (localStorage.getItem('page') == 'Train') {
          clearInterval(interval);
        }
        getNFTData();
      }, 5000);
    })();

    // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
  }, [currentIndex]);

  async function getMintData() {
    let data = await getUserTokenIDs();

    setNFTObjects(data);

    testData = data;

    if (data[currentIndex]) {
      let NFTData = await getCypherData(data[currentIndex][6]);

      await setCurrentNFTStats(NFTData);
    }
  }

  async function getNFTData() {
    let data = await getUserTokenIDs();

    setNFTObjects(data);
    if (NFTObjects[currentIndex]) {
      let NFTData = await getCypherData(NFTObjects[currentIndex][6]);
      await setCurrentNFTStats(NFTData);
    }
  }

  async function getMarketPrice() {
    let data = await fetchCurrentMarketPrice();
    setCurrentMarketPrice(data);
  }

  async function getCypherData(id) {
    let data = await fetchCypherData(id);
    return data;
  }

  async function predict(id, direction) {
    await makePrediction(id, direction);
    let NFTData = await getCypherData(NFTObjects[currentIndex][6]);
    setCurrentNFTStats(NFTData);
  }

  async function finalize(id) {
    await finalizePrediction(id);
    let NFTData = await getCypherData(NFTObjects[currentIndex][6]);
    setCurrentNFTStats(NFTData);
  }

  async function updateCurrentIndex(_index) {
    setCurrentIndex(Number(_index));
    let NFTData = await getCypherData(NFTObjects[currentIndex][6]);
    await setCurrentNFTStats(NFTData);
  }

  function getIDOptions() {
    let arr = [];
    for (let i = 0; i < NFTObjects.length; i++) {
      arr.push(
        <option value={i}>
          #{NFTObjects[i][6]} {NFTObjects[i][1]}
        </option>
      );
    }
    return arr;
  }

  function calculateTimeRemaining() {
    if (currentNFTStats[2]) {
      let timestamp = Number(currentNFTStats[2][0]) + 10 * 60;
      let ts = Math.round(new Date().getTime() / 1000);
      if (ts > timestamp) {
        return 0;
      } else {
        return timestamp - ts;
      }
    }
  }

  function getStartPrice() {
    if (currentNFTStats['2']) {
      return currentNFTStats['2'][1].substring(0, 5);
    }
  }

  function getNextLevelXP() {
    if (NFTObjects[currentIndex]) {
      let difference =
        (Number(NFTObjects[currentIndex][0]) + 1) * 100 -
        Number(NFTObjects[currentIndex][3]);
      return difference;
    }
  }

  function getXPPercentage() {
    if (NFTObjects[currentIndex]) {
      let percentage =
        Number(NFTObjects[currentIndex][3]) /
        ((Number(NFTObjects[currentIndex][0]) + 1) * 100);
      return percentage * 100 + '%';
    }
  }

  return (
    <>
      <LeftStickOn />
      {
        <section className='train_wrap left_panel_auto_adjuster'>
          <div className='content_wrap'>
            <div className='flex_box'>
              <div className='x2 mobile_hidden'>
                <img
                  src={Shibachu}
                  alt='Shibachu'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='200'
                />
                {/* <div
                  className='box_wrap'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='200'>
                  <div
                    className='selection_wrap'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='450'>
                    <img src={Arrow} alt='arrow' />
                    <select
                      onChange={(e) => updateCurrentIndex(e.target.value)}>
                      {NFTObjects[0] ? (
                        getIDOptions()
                      ) : (
                        <option>No Cyphers Detected</option>
                      )}
                    </select>
                  </div>
                  <div
                    className='white_box'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    {NFTObjects[currentIndex] ? (
                      <div>
                        <div className='level'>
                          Level {NFTObjects[currentIndex][0]}
                        </div>
                        <div className='details border_bottom'>
                          <div className='item'>
                            ATK: <span>{NFTObjects[currentIndex][4][0]}</span>
                          </div>
                          <div className='item'>
                            DEF: <span>{NFTObjects[currentIndex][4][1]}</span>
                          </div>
                          <div className='item'>
                            SPD: <span>{NFTObjects[currentIndex][4][2]}</span>
                          </div>
                        </div>
                        <div className='details'>
                          <div className='item'>
                            SP.ATK:{' '}
                            <span>{NFTObjects[currentIndex][4][3]}</span>
                          </div>
                          <div className='item'>
                            SP.DEF:{' '}
                            <span>{NFTObjects[currentIndex][4][4]}</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className='contents'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    <div className='title'>Bitcoin Price</div>
                    {currentMarketPrice > 0 ? (
                      <div className='value'>
                        ${String(currentMarketPrice).substring(0, 5)}
                      </div>
                    ) : (
                      <div className='value'>$-----</div>
                    )}
                    {currentNFTStats[2] &&
                    currentNFTStats[0][0] == currentNFTStats[0][1] ? (
                      <p>Will it go up or down in 10 minutes?</p>
                    ) : (
                      <div>
                        <p>
                          You predicted {currentNFTStats[3] ? 'Up' : 'Down'}{' '}
                          from ${getStartPrice()}
                        </p>
                        <p>
                          Wait {calculateTimeRemaining()} seconds to finalize
                        </p>
                      </div>
                    )}
                  </div>
                  {currentNFTStats[0] &&
                  currentNFTStats[0][0] == currentNFTStats[0][1] ? (
                    <div
                      className='buttons_wrap'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='700'>
                      <div
                        onClick={() =>
                          predict(NFTObjects[currentIndex][6], true)
                        }
                        className='button contrast'>
                        Up
                      </div>
                      <div
                        onClick={() =>
                          predict(NFTObjects[currentIndex][6], false)
                        }
                        className='button'>
                        Down
                      </div>
                    </div>
                  ) : (
                    <div
                      className='buttons_wrap'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='700'>
                      <div
                        onClick={() => finalize(NFTObjects[currentIndex][6])}
                        className='button contrast'>
                        Finalize
                      </div>
                    </div>
                  )}
                </div> */}
              </div>
              <div className='x2'>
                <div
                  className='box_wrap no_padding svg_main_wrap'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='300'>
                  <img src={BoxMobile} className='mobile_only box_svg_mobile' />
                  <img src={TrainBox} className='box_svg mobile_hidden' />
                  {/* <TrainBox className='box_svg mobile_hidden' />
                  <BoxMobile className='mobile_only box_svg_mobile' /> */}
                  <div className='top_details box_content'>
                    <div
                      className='main_title'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='400'>
                      <div>#0: -------</div>
                      <div className='svg_wrap bento_box'>
                        <Bento />
                        <span>Energy remaining</span>
                        <span className='number'>0</span>
                      </div>
                    </div>
                    <div
                      className='range_wrap'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='500'>
                      XP until next level: {getNextLevelXP()}
                      <div className='rangebox'>
                        <div
                          className='current_range'
                          style={{ width: getXPPercentage() }}></div>
                      </div>
                    </div>
                  </div>
                  <div className='middle_wrap box_content'>
                    <img
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='600'
                      src={Shibachu}
                      alt='Shibachu'
                      className='mobile_only card_image'
                    />
                    <div
                      className='level_details'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='650'>
                      <InsideBox className='mobile_hidden' />
                      <InsideBoxMobile className='mobile_only' />
                      <div className='title'>Level 0</div>
                      <div className='data'>
                        <div className='item'>ATK:0</div>
                        <div className='item'>DEF:0</div>
                        <div className='item'>SPD:0</div>
                        <div className='item'>SP-ATK:0</div>
                        <div className='item'>SP-DEF:0</div>
                      </div>
                    </div>
                  </div>
                  <div className='bottom box_content'>
                    {resultButtonVisible && (
                      <button
                        className='check_button transparent svg_wrap'
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='400'>
                        <Checkbutton />
                      </button>
                    )}
                    {!resultButtonVisible && isPredicted && (
                      <p
                        onClick={() => resultsButtonVisible(true)}
                        data-aos='zoom-in'
                        data-aos-offset='0'
                        data-aos-duration='200'>
                        Wait 4:29 to see if you were right...
                      </p>
                    )}
                    {!resultButtonVisible && !isPredicted && (
                      <p
                        data-aos='fade-up'
                        data-aos-offset='0'
                        data-aos-duration='700'>
                        Will the price of Bitcoin go up or down in the next 5
                        minutes?
                      </p>
                    )}

                    <div className='button_wrap'>
                      {!isPredicted ? (
                        <>
                          <button
                            className='transparent svg_wrap'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='800'>
                            <Up onClick={() => setIsPredicted(true)} />
                          </button>
                          <div
                            className='value'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='800'>
                            $--,---
                          </div>
                          <button
                            className='transparent svg_wrap'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='800'>
                            <Down onClick={() => setIsPredicted(true)} />
                          </button>
                        </>
                      ) : (
                        <>
                          <div className='prediction'>
                            <div
                              className='label'
                              data-aos='zoom-in'
                              data-aos-offset='0'
                              data-aos-duration='200'>
                              Current Price
                            </div>
                            <div
                              className='value'
                              data-aos='zoom-in'
                              data-aos-offset='0'
                              data-aos-duration='200'>
                              $--,---
                            </div>
                          </div>
                          <div className='prediction'>
                            <div
                              className='label'
                              data-aos='zoom-in'
                              data-aos-offset='0'
                              data-aos-duration='200'>
                              You Predicted up from
                            </div>
                            <div
                              className='value'
                              data-aos='zoom-in'
                              data-aos-offset='0'
                              data-aos-duration='200'>
                              $--,---
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
    // <>
    // {!contextData.isLoading && contextData.initialloaderFinished && (
    //     <section className='train_wrap'>
    //         <div className='content_wrap'>

    //         </div>
    //     </section>

    // )}
    // </>
  );
};

export default Train;
