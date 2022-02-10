import React, { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader';
import logo from '../assets/images/versus.png';

const VersusContext = React.createContext();

export default VersusContext;

export function Provider(props) {
    const [isLoading, setLoader] = useState(false);
    const [initialloaderFinished, setInitialLoader] = useState(false);
    const cacheItem = useRef([]);

    const isAlreadyCached = (url) => {
        return cacheItem.current.find((item) => item === url);
    };

    const contextData = {
        isLoading,
        initialloaderFinished,
        setLoader: (val) => {
            setLoader(val);
        },
        showLoader: () => {
            setLoader(true);
        },
        closeLoader: () => {
            setLoader(false);
        },
        imageLoader: (itemsArray) => {
            let loadedItems = 0;

            if (!isAlreadyCached(logo))
                itemsArray.push({ type: 'image', src: logo });

            itemsArray.forEach((item) => {
                if (isAlreadyCached(item.src)) return;

                setLoader(true);
                if (item.type === 'image') {
                    var asset = new Image();
                    asset.onload = function () {
                        cacheItem.current.push(item.src);
                        if (itemsArray.length <= ++loadedItems)
                            setLoader(false);
                    };
                    asset.onerror = function () {
                        console.log('Error loading asset:' + item.src);
                    };

                    asset.src = item.src;
                } else {
                    var assetVid = document.createElement('video');
                    assetVid.setAttribute('src', item.src);
                    assetVid.addEventListener('loadeddata', (e) => {
                        if (assetVid.readyState >= 3) {
                            cacheItem.current.push(item.src);
                            if (itemsArray.length <= ++loadedItems)
                                setLoader(false);
                        } else {
                            console.log('Error loading asset:' + item.src);
                        }
                    });
                }
            });
        },
    };

    useEffect(() => {
        setTimeout(() => {
            setInitialLoader(true);
        }, 2100);
    }, []);

    return (
        <VersusContext.Provider value={contextData}>
            <Loader isVisible={isLoading || !initialloaderFinished} />
            {props.children}
        </VersusContext.Provider>
    );
}
