import Main from './Sections/Main';
import MintYourOwn from './Sections/MintYourOwn';
import Slider from './Sections/Slider';
import Footer from './Sections/Footer';
import NFTs from './Sections/NFTs';
import './styles.scss';

const Home = () => {
    return (
        <section className='home'>
            <Main />
            <NFTs />
            <Slider />
            <MintYourOwn />
            <Footer />
        </section>
    );
};

export default Home;
