import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Img1 from '../../../assets/images/Slider/1.jpg';
import Img2 from '../../../assets/images/Slider/2.jpg';
import Img3 from '../../../assets/images/Slider/3.jpg';

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
                <SlideItem img={Img1} />
                <SlideItem img={Img2} />
                <SlideItem img={Img3} />
            </Carousel>
        </div>
    );
};

const SlideItem = ({ img }) => {
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
                                    MINT
                                </div>
                                <p
                                    data-aos='fade-up'
                                    data-aos-offset='0'
                                    data-aos-duration='500'>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua.
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
