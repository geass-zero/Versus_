import Shibachu from '../../../assets/images/shibachu.gif';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
// import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

const Main = () => {
    return (
        <div className='main_section'>
            <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line1'
            />
            <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line2'
            />
            <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line3'
            />
            <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line4'
            />
            <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line5'
            />
            <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line6'
            />
            <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line7'
            />
            <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line8'
            />
            <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line9'
            />
            <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line10'
            />

            <div className='content_wrap'>
                <div className='flex_box'>
                    <div className='x2 image_wrap'>
                        <img
                            src={Shibachu}
                            alt='shibachu.gif'
                            className='shibachu'
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='400'
                        />
                    </div>
                    <div className='x2'>
                        <h1
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            Passive Blockchain Battles
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='600'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                        <button
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='700'>
                            Mint Your Own
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
