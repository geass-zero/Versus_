import { useState } from 'react';
import { ReactComponent as Bottom } from '../../../assets/svg/Home/Metaverse/Bottom.svg';
import { ReactComponent as BottomMobile } from '../../../assets/svg/Home/Metaverse/BottomMobile.svg';
import Graphic from '../../../assets/images/Graphics/graphic.png';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

import { ReactComponent as OurTeam } from '../../../assets/svg/Home/MintYourOwn/OurTeam.svg';
import { ReactComponent as OurTeamMobile } from '../../../assets/svg/Home/MintYourOwn/OurTeamMobile.svg';
import { ReactComponent as MetTeam } from '../../../assets/svg/Home/MintYourOwn/MetTeam.svg';
import { ReactComponent as MetTeamMobile } from '../../../assets/svg/Home/MintYourOwn/MetTeamMobile.svg';
import { ReactComponent as ConceptArtists } from '../../../assets/svg/Home/MintYourOwn/ConceptArtists.svg';
import { ReactComponent as ConceptArtistsMobile } from '../../../assets/svg/Home/MintYourOwn/ConceptArtistsMobile.svg';
import { ReactComponent as PinksMobile } from '../../../assets/svg/Home/MintYourOwn/PinksMobile.svg';
import { ReactComponent as Wrapbig } from '../../../assets/svg/Home/MintYourOwn/Wrapbig.svg';
import { ReactComponent as Wrapsmall } from '../../../assets/svg/Home/MintYourOwn/Wrapsmall.svg';

const TrackOurProgress = () => {
  const [selectedTimeline, setTimeline] = useState(1);

  return (
    <div className='track_our_progress'>
      <div
        className='header_title bottom'
        data-aos='fade-up'
        data-aos-offset='0'
        data-aos-duration='500'>
        <Bottom className='mobile_hidden' />
        <BottomMobile className='mobile_only' />
        <span>Track our progress</span>
      </div>
      <div className='image_bg'>
        <div
          className='timeline_wrap'
          data-aos='fade-up'
          data-aos-offset='0'
          data-aos-duration='300'>
          <div className='content_wrap'>
            <div
              className={`dot ${selectedTimeline === 1 ? 'active' : ''}`}
              onClick={() => setTimeline(1)}>
              1
            </div>
            <div
              className={`dot ${selectedTimeline === 2 ? 'active' : ''}`}
              onClick={() => setTimeline(2)}>
              2
            </div>
            <div
              className={`dot ${selectedTimeline === 3 ? 'active' : ''}`}
              onClick={() => setTimeline(3)}>
              3
            </div>
          </div>
          {selectedTimeline !== 0 && (
            <div
              className='timeline_content'
              key={selectedTimeline}
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='300'>
              {selectedTimeline === 1 && (
                <span>
                  Versus launch and browser based cypher training and battles in
                  a cross chain environment creates a new paradigm of NFT
                  interaction in the metaverse space.
                </span>
              )}
              {selectedTimeline === 2 && (
                <span>
                  The Versus Metaverse expands into a fully realized 3D
                  ecosystem enabling expanded interactions between players, and
                  cyphers in the world of Versus
                </span>
              )}
              {selectedTimeline === 3 && (
                <span>
                  Expansion of the Versus Metaverse with player governance and
                  open source world generation
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOurProgress;
