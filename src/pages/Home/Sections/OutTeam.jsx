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
    <div className='our_team_wrap no_parallax_ios'>
      <div className='image_bg'>
        <div className='content_wrap cypher_researchers_wrap'>
          <div className='cypher_researchers_wrap_section'>
            <OurTeam
              className='mobile_hidden'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <OurTeamMobile
              className='mobile_only'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <div
              className='scroll_box scroll_bar'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </div>
          <div className='cypher_researchers_wrap_section'>
            <MetTeam
              className='mobile_hidden'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <MetTeamMobile
              className='mobile_only'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <div
              className='scroll_box scroll_bar'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </div>
          <div className='cypher_researchers_wrap_section'>
            <ConceptArtists
              className='mobile_hidden'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <ConceptArtistsMobile
              className='mobile_only'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='400'
              data-aos-delay='100'
            />
            <div
              className='scroll_box scroll_bar'
              data-aos='fade-up'
              data-aos-offset='0'
              data-aos-duration='500'>
              <MemberCard />
              <MemberCard />
              <MemberCard />
              <MemberCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ name = 'Team member #1', role = 'Designer' }) => {
  return (
    <div className='member_card'>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='role'>{role}</div>
      </div>
    </div>
  );
};

export default TrackOurProgress;
