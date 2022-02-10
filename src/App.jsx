import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';

import Home from './pages/Home';
import Battle from './pages/Battle';
import Mint from './pages/Mint';
import Train from './pages/Train';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <HashRouter basename='/'>
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
                </Routes>
            </main>
        </HashRouter>
    );
}

export default App;
