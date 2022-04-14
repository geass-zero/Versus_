import Shibachu from '../../../assets/images/Calfire.gif';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
// import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

import MainBGImage from '../../../assets/svg/Home/Main/MainBG.png';
import { ReactComponent as MainBG } from '../../../assets/svg/Home/Main/MainBG.svg';
import { ReactComponent as MainBigButton } from '../../../assets/svg/Home/Main/MainBigButton.svg';
import { ReactComponent as MainSmallButton } from '../../../assets/svg/Home/Main/MainSmallButton.svg';

const Main = () => {
  return (
    <div className='main_section'>
      {/* <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line1'
            /> */}
      {/* <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line2'
            /> */}
      {/* <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line3'
            /> */}
      {/* <img
                src={GraphicLine}
                alt='Graphic'
                className='graph_line graphic_line4'
            /> */}
      {/* <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line5'
            /> */}
      {/* <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line6'
            /> */}
      {/* <img
                src={GraphicLine1}
                alt='Graphic'
                className='graph_line graphic_line7'
            /> */}
      {/* <img
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
            /> */}

      <div className='content_wrap'>
        <div className='flex_box'>
          <div className='x1 image_wrap'>
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
            {/* <h1
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='500'>
                            A New World To Explore
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='600'>
                            Cyphers have come to life through the power of blockchain. 
                            Mint your own and help them harness their power for epic rewards!
                        </p>
                        <button
                            data-aos='fade-up'
                            data-aos-offset='0'
                            data-aos-duration='700'>
                            Read the Docs
                        </button> */}
            <div
              className='box_svg main_box'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'>
              <img src={MainBGImage} className='box_svg mobile_hidden' />
              <MainBG className='box_svg mobile_only' />
            </div>
            <div
              className='buttons_wrap'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'>
              <button className='transparent svg_wrap blue_button'>
                <span></span>
                <MainSmallButton />
              </button>
              <button className='transparent svg_wrap green_button'>
                <span></span>
                <MainBigButton />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
