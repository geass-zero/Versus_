import { useState, useEffect } from 'react';
import './styles.scss';
import loaderVideo from '../../../src/assets/videos/loader.mp4';

const Loader = ({ isVisible }) => {
    const [isTruelyVisible, setVisibility] = useState(isVisible);
    const [animateFade, setAnimate] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            setAnimate(true);
            console.log(isVisible);
            setTimeout(() => {
                console.log(isVisible);
                setVisibility(isVisible);
                setAnimate(false);
                document
                    .getElementsByTagName('html')[0]
                    .classList.remove('overflow_hidden');
            }, 200);
        } else {
            setVisibility(isVisible);
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow_hidden');
        }
    }, [isVisible]);

    return (
        <>
            {isTruelyVisible && (
                <div
                    className={`loader_main ${
                        isTruelyVisible && animateFade ? 'animate_fade' : ''
                    }`}>
                    <video autoPlay={true} muted loop={true}>
                        <source src={loaderVideo} type='video/mp4' />
                    </video>
                </div>
            )}
            <div></div>
        </>
    );
};
export default Loader;
