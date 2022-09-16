import { lazy, Suspense, useEffect, useContext } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VersusContext, { Provider } from './store/Context';
import Loader from './components/Loader';
import loaderVideo from './assets/videos/loader.mp4';

import Scroll from './components/Header/SmoothScroll';
// const Home = lazy(() => import('./pages/Home'));
// const Battle = lazy(() => import('./pages/Battle'));
// const Mint = lazy(() => import('./pages/Mint'));
// const Train = lazy(() => import('./pages/Train'));

import Header from './components/Header';

import Home from './pages/Home';
import Battle from './pages/Battle';
import Mint from './pages/Mint';
import Train from './pages/Train';
import ItemShop from './pages/ItemShop';

//const Header = lazy(() => import('./components/Header'));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HashRouter basename='/'>
      <Scroll />
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Versus' element={<Home />} />
          <Route path='/battle' element={<Battle />} />
          <Route path='/Versus/battle' element={<Battle />} />
          <Route path='/mint' element={<Mint />} />
          <Route path='/Versus/mint' element={<Mint />} />
          <Route path='/train' element={<Train />} />
          <Route path='/Versus/train' element={<Train />} />
          <Route path='/shop' element={<ItemShop />} />
          <Route path='/Versus/shop' element={<ItemShop />} />
        </Routes>
      </main>
    </HashRouter>
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
