import { useEffect, useState, useContext } from 'react';
import MintPopUp from './PopUp';
import './styles.scss';
import LoaderImage from '../../assets/images/Card.png';
import MintBox from '../../assets/svg/Mint/MintBox.png';
import MintBoxMobile from '../../assets/svg/Mint/MintBoxMobile.png';
import bat from '../../assets/images/characters/bat.gif';
import { ReactComponent as MintValue } from '../../assets/svg/Mint/MintValue.svg';
import { ReactComponent as Button } from '../../assets/svg/Mint/Button.svg';
import { ReactComponent as Minting } from '../../assets/svg/Mint/Minting.svg';
import { ReactComponent as Minus } from '../../assets/svg/Mint/minus.svg';
import { ReactComponent as Plus } from '../../assets/svg/Mint/plus.svg';

import VersusContext from '../../store/Context';
import {
  fetchMintData,
  mintCypher,
  getNFTDetails,
  getIDOwner,
  getBridgedData,
} from '../../utils/MintingFunctions';
import { connectWallet } from '../../utils/UserData';
import LeftStickOn from '../../components/LeftStickOn';

const Mint = () => {
  const contextData = useContext(VersusContext);
  const [value, setValue] = useState(1);
  const [showPopup, setPopUp] = useState(false);
  const [currentTokenID, setCurrentTokenID] = useState(0);
  const [currentMax, setCurrentMax] = useState(0);
  const [mintFee, setMintFee] = useState(0.099);
  const [mintedCyphers, setMintedCyphers] = useState([]);
  const [isMinting, setIsMinting] = useState(false);

  const isMintSoon = true;

  const updateValue = (isAdd) => {
    if (isAdd) {
      if (value == 6) return;
      setValue(value + 1);
    } else if (value > 0) setValue(value - 1);
    // setValue(1);
  };

  useEffect(() => {
    localStorage.setItem('page', 'Mint');
    // contextData.imageLoader([{ type: 'image', src: LoaderImage }]);
    getMintData();
  }, []);

  async function getMintData() {
    let data = await fetchMintData();
    console.log(data);
  }

  async function mint() {
    let cyphers = await mintCypher(value);
    console.log(cyphers);
    let checkOwner = setInterval(async function () {
      let userWallet = await connectWallet();

      let owner = await getIDOwner(cyphers[0].ID);
      console.log(owner);
      if (userWallet[0][0] == owner) {
        clearInterval(checkOwner);
        for (let i = 0; i < cyphers.length; i++) {
          let cypherDetails = await getNFTDetails(cyphers[i].ID);
          console.log(cypherDetails);
          cyphers[i].image = cypherDetails[5];
          cyphers[i].description = cypherDetails[2];
          cyphers[i].stats = cypherDetails[4];
        }
        setMintedCyphers(cyphers);
        setPopUp(true);
      }
    }, 2000);
    // for (let i = 0; i < cyphers.length; i++) {

    // }
    //call getBridgedData to get confirmation
  }

  return (
    <>
      <LeftStickOn />
      {
        <section className=' mint_wrap left_panel_auto_adjuster'>
          <MintPopUp
            showPopUp={showPopup}
            closeModal={() => setPopUp(false)}
            mintedCyphers={mintedCyphers}
          />
          <div className='content_wrap'>
            <img src={LoaderImage} className='load_loader_image' alt='' />
            <div className='flex_box'>
              <div className='x2'>
                <div
                  className='mint_professor mobile_hidden'
                  data-aos='fade-right'
                  data-aos-offset='0'
                  data-aos-duration='600'></div>
              </div>
              <div className='x2'>
                {isMintSoon ? (
                  <div
                    className='box_wrap no_padding minting_soon_main_wrap'
                    data-aos='zoom-in'
                    data-aos-offset='0'
                    data-aos-duration='300'>
                    <div className='minted'>
                      <div className='circle'></div>
                      <div className='text'>
                        <div className='minting_soon_text'>Minting Soon</div>
                      </div>
                    </div>
                    <div className='minting_soon_wrap'>
                      <img src={MintBox} alt='bg' className='box_svg' />
                      <p>
                        Join the Discord and follow us on Twitter to stay
                        updated on mint info, as well as how to join the
                        whitelist!
                      </p>
                      <div className='icons_wrap'>
                        <div className='icon_wrap'>
                          <img src={bat} alt='bat' />
                        </div>
                        <div className='icon_wrap'>
                          <img src={bat} alt='bat' />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className='box_wrap no_padding'
                    data-aos='zoom-in'
                    data-aos-offset='0'
                    data-aos-duration='300'>
                    <img
                      src={MintBox}
                      alt='bg'
                      className='box_svg mobile_hidden'
                    />
                    <img
                      src={MintBoxMobile}
                      alt='bg'
                      className='box_svg_mobile mobile_only'
                    />
                    {/* <MintBox  />
                  <MintBoxMobile className='mobile_only box_svg_mobile' /> */}
                    <div className='minted'>
                      <div className='circle'></div>
                      <div className='text'>
                        0/5000<span>(Minting Soon)</span>
                      </div>
                    </div>
                    <div
                      className='title'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='400'>
                      Each cypher costs *.*** to materialize.
                    </div>
                    <div
                      className='value_box'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='500'>
                      <MintValue />
                      <span>{(0.0 * value).toFixed(3)}</span>
                    </div>
                    <div
                      className='button_values'
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='600'>
                      <button
                        className='transparent svg_wrap'
                        onClick={() => updateValue(false)}>
                        <Minus />
                      </button>

                      <div className='value'>{value}</div>
                      <button
                        className='transparent svg_wrap'
                        onClick={() => updateValue(true)}>
                        <Plus />
                      </button>
                    </div>
                    <div
                      data-aos='fade-up'
                      data-aos-offset='0'
                      data-aos-duration='700'>
                      {!isMinting ? (
                        <button
                          className='transparent svg_wrap mint_button_wrap'
                          onClick={() => {
                            setIsMinting(true);
                            mint();
                          }}>
                          <span>Mint</span>
                          <Button className='mint_button' />
                        </button>
                      ) : (
                        <button
                          className='transparent svg_wrap minting_button_wrap'
                          onClick={() => setPopUp(true)}>
                          <span>
                            Minting,
                            <br />
                            please wait...
                          </span>
                          <Minting className='mint_button' />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Mint;
