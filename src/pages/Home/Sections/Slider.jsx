import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Img1 from '../../../assets/images/Slider/1.jpg';
import Img2 from '../../../assets/images/Slider/2.jpg';
import Img3 from '../../../assets/images/Slider/3.jpg';

let mintDesc = "Each Cypher can be brought to life through a process called minting. Act fast though, they're limited.";
let trainDesc = "Increase your Cypher's stats in the Chainlink Gym, powered by the Chainlink price feeds.";
let battleDesc = "Add your Cyphers to the battle pool to battle other Cyphers and win rewards. Make sure to train first!";

const Slider = () => {
    return (
        <div className='slider_section'>
            <Carousel
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                emulateTouch={false}
                swipeable={false}
                showStatus={false}>
                <SlideItem img={Img1} title={"Mint"} desc={mintDesc} />
                <SlideItem img={Img2} title={"Train"} desc={trainDesc} />
                <SlideItem img={Img3} title={"Battle"} desc={battleDesc} />
            </Carousel>
        </div>
    );
};

const SlideItem = ({ img, title, desc }) => {
    return (
        <div className='slide_item'>
            <img
                src={img}
                alt='placehol'
                data-aos='zoom-in'
                data-aos-offset='0'
                data-aos-duration='400'
            />
            <div className='content_wrap'>
                <div className='flex_box'>
                    <div className='x2'></div>
                    <div className='x2'>
                        <div className='detail_box'>
                            <div className='insider'>
                                <div
                                    className='title'
                                    data-aos='fade-up'
                                    data-aos-offset='0'
                                    data-aos-duration='400'>
                                    {title}
                                </div>
                                <p
                                    data-aos='fade-up'
                                    data-aos-offset='0'
                                    data-aos-duration='500'>
                                    {desc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
