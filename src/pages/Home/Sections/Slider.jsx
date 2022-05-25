import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactHlsPlayer from 'react-hls-player';

import { ReactComponent as Mint } from '../../../assets/svg/Home/Slider/Mint.svg';

let mintDesc =
  "Each Cypher can be brought to life through a process called minting. Act fast though, they're limited.";
let trainDesc =
  "Increase your Cypher's stats in the Chainlink Gym, powered by the Chainlink price feeds.";
let battleDesc =
  'Add your Cyphers to the battle pool to battle other Cyphers and win rewards. Make sure to train first!';

const Slider = () => {
  const slideDetails = [
    {
      title: 'MINT',
      description:
        "Versus scientists have developed a new technology known as a W.A.L.L.E.T. that allows Cyphers to be materialized into the world of Versus through a process called minting.",
      video:
        'https://player.vimeo.com/external/665992462.m3u8?s=fc6c8b495529166a3be408a5d9cd5e8e015a676f',
    },
    {
      title: 'TRAIN',
      description:
        "Increase your Cypher's stats in the Chainlink Gym, powered by the Chainlink price feeds.",
      video:
        'https://player.vimeo.com/external/665991357.m3u8?s=00ee7c0c36c5863f6519dbb22c63527998c829d0',
    },
    {
      title: 'BATTLE',
      description:
        'Enter your Cyphers into the Battle Pool! Test your might against other trainers and earn $VERSUS rewards for every triumph.',
      video:
        'https://player.vimeo.com/external/665993451.m3u8?s=26a000d0874a3646623b0b8423923345e0cb0c52',
    },
  ];

  return (
    <div className='slider_section'>
      {slideDetails.map((item, index) => (
        <SlideItem
          key={index}
          videoSrc={item.video}
          title={item.title}
          description={item.description}
        />
      ))}
      {/* <Carousel
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        emulateTouch={false}
        swipeable={false}
        showStatus={false}>
        {slideDetails.map((item, index) => (
          <SlideItem
            key={index}
            videoSrc={item.video}
            title={item.title}
            description={item.description}
          />
        ))}
      </Carousel> */}
    </div>
  );
};

const SlideItem = ({ title, description, videoSrc }) => {
  return (
    <div className='slide_item'>
      <ReactHlsPlayer
        src={videoSrc}
        autoPlay={true}
        muted={true}
        playsInline={true}
        loop={true}
        controls={false}
        width='100%'
        height='auto'
      />

      {/* <video autoPlay={true} muted loop={true}>
                <source src={video} type='video/mp4' />
            </video> */}
      <div className='content_wrap'>
        <div className='flex_box'>
          <div className='x2'></div>
          <div className='x2'>
            <div className='detail_box'>
              <Mint className='box_svg' />
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
                  {description}
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
