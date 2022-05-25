import { useEffect, useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { ReactComponent as Head } from '../../../assets/svg/Home/Inspiration/Head.svg';

const Inspiration = () => {
  const MAX_VIDEO_HEIGHT = 900;
  const videoElement = useRef(null);
  const video_src =
    'https://player.vimeo.com/external/713499457.m3u8?s=3c3dfda01fc1f4364a04886e582243de9134bfff';

  useEffect(() => {
    updateVideoSize();

    window.addEventListener('resize', updateVideoSize);

    return () => {
      window.removeEventListener('resize', updateVideoSize);
    };
  }, []);

  const updateVideoSize = () => {
    if (videoElement.current) {
      const video = videoElement.current;
      let height =
        window.innerHeight > MAX_VIDEO_HEIGHT
          ? MAX_VIDEO_HEIGHT
          : window.innerHeight;
      height = height - 80;
      const width = height * (16 / 9);
      video.style.width = `${width}px`;
      video.style.height = `${height}px`;
    }
  };

  return (
    <div className='inpiration_wrap'>
      <div className='content_wrap'>
        <div
          className='header_title'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='400'>
          <Head className='main_head' />
        </div>
        <div
          className='video_wrap'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='500'>
          <ReactHlsPlayer
            playerRef={videoElement}
            src={video_src}
            autoPlay={true}
            muted={true}
            playsInline={true}
            loop={true}
            controls={false}
            width='100%'
            height='auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
