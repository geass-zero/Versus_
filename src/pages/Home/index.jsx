import React, { useContext, useEffect, Suspense } from 'react';
// import Main from './Sections/Main';
// import MintYourOwn from './Sections/MintYourOwn';
// import Slider from './Sections/Slider';
import Footer from './Sections/Footer';
import NewHome from './Sections/NewHome';
// import NFTs from './Sections/NFTs';
import './styles.scss';

import VersusContext from '../../store/Context';

import LoaderImage from '../../assets/images/Pattern.png';
// import AboutVersus from './Sections/AboutVersus';
// import AboutCyphers from './Sections/AboutCyphers';
// import Metaverse from './Sections/Metaverse';
// import BlockChain from './Sections/BlockChain';

const BlockChain = React.lazy(() => import('./Sections/BlockChain'));
const Metaverse = React.lazy(() => import('./Sections/Metaverse'));
const AboutCyphers = React.lazy(() => import('./Sections/AboutCyphers'));
const AboutVersus = React.lazy(() => import('./Sections/AboutVersus'));
const NFTs = React.lazy(() => import('./Sections/NFTs'));
const Slider = React.lazy(() => import('./Sections/Slider'));
const MintYourOwn = React.lazy(() => import('./Sections/MintYourOwn'));
const Main = React.lazy(() => import('./Sections/Main'));

const Home = () => {
  const contextData = useContext(VersusContext);

  useEffect(() => {
    // contextData.imageLoader([
    //     { type: 'image', src: LoaderImage },
    //     { type: 'image', src: Shibachu },
    //     // { type: 'video', src: Video1 },
    //     // { type: 'video', src: Video2 },
    // ]);
  }, []);

  return (
    <>
      {
        <section className='home'>
          <NewHome />
          <Suspense fallback={''}>
            <>
              <Main />
              <NFTs />
              <Slider />
              <AboutVersus />
              <AboutCyphers />
              <BlockChain />
              <Metaverse />
              <MintYourOwn />
            </>
          </Suspense>

          {/* <Footer /> */}
        </section>
      }
    </>
  );
};

export default Home;
