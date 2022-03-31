import { useEffect, useState, useContext } from 'react';
import MintPopUp from './PopUp';
import './styles.scss';
import LoaderImage from '../../assets/images/Card.png';

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

  const updateValue = (isAdd) => {
    // if (isAdd) setValue(value + 1);
    // else if (value > 0) setValue(value - 1);
    setValue(1);
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
        <section className=' mint_wrap'>
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
                  className='mint_professor'
                  data-aos='fade-up'
                  data-aos-offset='0'
                  data-aos-duration='600'></div>
              </div>
              <div className='x2'>
                <div
                  className='box_wrap'
                  data-aos='zoom-in'
                  data-aos-offset='0'
                  data-aos-duration='300'>
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
                    Each <span>Cypher</span> costs 0.099 ETH to create
                  </div>
                  <div
                    className='value_box'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    {(0.099 * value).toFixed(3)}
                  </div>
                  <div
                    className='button_values'
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    <div className='button' onClick={() => updateValue(true)}>
                      &#43;
                    </div>
                    <div className='value'>{value}</div>
                    <div className='button' onClick={() => updateValue(false)}>
                      &#8722;
                    </div>
                  </div>
                  <div
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='700'>
                    <button
                      onClick={() => mint()}
                      className={showPopup ? 'animate' : ''}>
                      Mint
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Mint;
