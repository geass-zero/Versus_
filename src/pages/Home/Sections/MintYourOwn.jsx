import Graphic from '../../../assets/images/Graphics/graphic.png';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

const MintYourOwn = () => {
    return (
        <div className='mint_your_own'>
            <img src={Graphic} alt='Graphic' className='graphic' />
            <img src={GraphicLine} alt='Graphic' className='graphic_line1' />
            <img src={GraphicLine} alt='Graphic' className='graphic_line2' />
            <img src={GraphicLine1} alt='Graphic' className='graphic_line3' />
            <img src={GraphicLine2} alt='Graphic' className='graphic_line4' />
            <img src={GraphicLine1} alt='Graphic' className='graphic_line5' />
            <div className='content_wrap'>
                <h1
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='400'>
                    What are you waiting for?
                </h1>
                <p
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='500'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                </p>
                <button
                    data-aos='fade-up'
                    data-aos-offset='0'
                    data-aos-duration='600'>
                    Mint your Own
                </button>
            </div>
        </div>
    );
};

export default MintYourOwn;
