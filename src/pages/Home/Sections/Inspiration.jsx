import ReactHlsPlayer from 'react-hls-player';
import { ReactComponent as Head } from '../../../assets/svg/Home/Inspiration/Head.svg';

const Inspiration = () => {
  const video_src =
    'https://player.vimeo.com/external/713499457.m3u8?s=3c3dfda01fc1f4364a04886e582243de9134bfff';

  return (
    <div className='inpiration_wrap'>
      <div className='content_wrap'>
        <Head />
        <div className='video_wrap'>
          <ReactHlsPlayer
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
