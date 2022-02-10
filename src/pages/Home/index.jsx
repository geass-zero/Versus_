import Main from './Sections/Main';
import MintYourOwn from './Sections/MintYourOwn';
import Slider from './Sections/Slider';
import Footer from './Sections/Footer';
import NFTs from './Sections/NFTs';
import './styles.scss';
import AboutVersus from './Sections/AboutVersus';
import AboutCyphers from './Sections/AboutCyphers';
import Metaverse from './Sections/Metaverse';
import AboutBridge from './Sections/AboutBridge';

const Home = () => {
    return (
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
    );
};

export default Home;
