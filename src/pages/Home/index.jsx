import { useContext, useEffect } from 'react';
import Main from './Sections/Main';
import MintYourOwn from './Sections/MintYourOwn';
import Slider from './Sections/Slider';
import Footer from './Sections/Footer';
import NFTs from './Sections/NFTs';
import './styles.scss';

import VersusContext from '../../store/Context';

import LoaderImage from '../../assets/images/Pattern.png';
import AboutVersus from './Sections/AboutVersus';
import AboutCyphers from './Sections/AboutCyphers';
import Metaverse from './Sections/Metaverse';
import AboutBridge from './Sections/AboutBridge';

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
            {(
                <section className='home'>
                  <Main />
                  <NFTs />
                  <Slider />
                  <AboutVersus/>
                  <AboutCyphers/>
                  <AboutBridge/>
                  <Metaverse/>
                  <MintYourOwn />
                  <Footer />
                </section>
            )}
        </>

    );
};

export default Home;