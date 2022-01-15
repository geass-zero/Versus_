import { lazy, Suspense, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VersusContext, { Provider } from './store/Context';
import Loader from './components/Loader';
import loaderVideo from './assets/videos/loader.mp4';

const Home = lazy(() => import('./pages/Home'));
const Battle = lazy(() => import('./pages/Battle'));
const Mint = lazy(() => import('./pages/Mint'));
const Train = lazy(() => import('./pages/Train'));

const Header = lazy(() => import('./components/Header'));

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Provider>
            <LoaderLoadedAck />
            <Router>
                <Suspense fallback={<SuspensedCallback />}>
                    <Header />
                    <main>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/battle' element={<Battle />} />
                            <Route path='/mint' element={<Mint />} />
                            <Route path='/train' element={<Train />} />
                        </Routes>
                    </main>
                </Suspense>
            </Router>
        </Provider>
    );
}

const SuspensedCallback = () => {
    const contextData = useContext(VersusContext);

    useEffect(() => {
        contextData.showLoader();
    }, []);
    return <div></div>;
};

const LoaderLoadedAck = () => {
    useEffect(() => {
        var asset = document.createElement('video');
        asset.setAttribute('src', loaderVideo);
        asset.addEventListener('loadeddata', (e) => {
            if (asset.readyState >= 3) {
                console.log('Loader Loaded Success');
            }
        });
    }, []);
    return '';
};

export default App;
