
import 'reactjs-popup/dist/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ReactComponent as Close } from '../../assets/images/Close.svg';
import User from '../../assets/images/characters/moon.gif';
import { useState } from 'react';

const Wallet = ({ showPopUp, closeModal }) => {
    const [closeAnimate, setCloseAnimate] = useState('');
    const [selecteditem, setSelectedItem] = useState(null);

    const closeHandler = () => {
        setCloseAnimate('close_animate ');
        setTimeout(() => {
            closeModal && closeModal();
            setCloseAnimate('');
        }, 200);
    };

    return (
        <div>
            123
        </div>
    );
};

export default Wallet;