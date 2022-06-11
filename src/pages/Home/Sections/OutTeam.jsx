import { useState } from 'react';
import { ReactComponent as Bottom } from '../../../assets/svg/Home/Metaverse/Bottom.svg';
import { ReactComponent as BottomMobile } from '../../../assets/svg/Home/Metaverse/BottomMobile.svg';
import Graphic from '../../../assets/images/Graphics/graphic.png';
import GraphicLine from '../../../assets/images/Graphics/Group 51.png';
import GraphicLine1 from '../../../assets/images/Graphics/Group 48.png';
import GraphicLine2 from '../../../assets/images/Graphics/Group 49.png';

import bz from '../../../assets/images/team/bz.png'
import beryllium from '../../../assets/images/team/beryllium.png'
import mrock from '../../../assets/images/team/mrock.png'
import xaldin from '../../../assets/images/team/xaldin.png'
import ribinroy from '../../../assets/images/team/ribinroy.png'
import kimberly from '../../../assets/images/team/kimberly.png'
import sylvanna from '../../../assets/images/team/sylvanna.png'
import esteban from '../../../assets/images/team/esteban.png'
import madison from '../../../assets/images/team/madison.png'
import kevin from '../../../assets/images/team/kevin.png'
import hector from '../../../assets/images/team/hector.png'
import allwyn from '../../../assets/images/team/allwyn.png'
import shinsyl from '../../../assets/images/team/shinsyl.png'
import jad from '../../../assets/images/team/jad.png'
import gyruum from '../../../assets/images/team/gyruum.png'
import diana from '../../../assets/images/team/diana.png'

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
              <MemberCard name='Black Zero' role='Founder' image={bz} alt='Black Zero'/>
              <MemberCard name='Beryllium Boots' role='Co-Founder' image={beryllium} alt='Beryllium Boots'/>
              <MemberCard name='mRock' role='Co-Founder' image={mrock} alt='mRock'/>
              <MemberCard name='Xaldin' role='Lead Metaverse Developer' image={xaldin} alt='xaldin'/>
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
              <MemberCard name='Ribinroy4' role='Website Development' image={ribinroy} alt='ribinroy4'/>
              <MemberCard name='Kimberly Chan' role='UI/UX Design' image={kimberly} alt='Kimberly Chan'/>
              <MemberCard name='Madison Kutz' role='Animator' image={madison} alt='Madison Kutz'/>
              <MemberCard name='Hector Lopez' role='Animator' image={hector} alt='Hector Lopez'/>
              <MemberCard name='MuahaYolo' role='Composer'/>
              <MemberCard name='Kevin Felix Hervas' role='3D Modeler/ Environment Design' image={kevin} alt='Kevin Felix Hervas'/>
              <MemberCard name='Esteban Dhuy' role='3D Modeler' image={esteban} alt='Esteban Dhuy'/>
              <MemberCard name='Allwyn' role='3D Modeler' image={allwyn} alt='Allwyn'/>
              <MemberCard name='Rebellion' role='3D Modeler'/>
              <MemberCard name='Sylvanna Escarraga' role='3D Modeler' image={sylvanna} alt='Sylvanna Escarraga'/>
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
              <MemberCard name='Shinsyl' role='Illustrator' image={shinsyl} alt='shinsyl'/>
              <MemberCard name='Gyruum' role='Illustrator' image={gyruum} alt='gyruum'/>
              <MemberCard name='JAD' role='Graphic Design' image={jad} alt='JAD'/>
              <MemberCard name='Diana Barta' role='Illustrator/ Map Design' image={diana} alt='Diana Barta'/>
              <MemberCard name='WeiTooCool' role='Illustrator'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberCard = ({ name, role, image, alt}) => {
  console.log(name)
  return (
    <div className='member_card'>
      <img src={image} alt={alt} className='team' />
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='role'>{role}</div>
        {/* <div className='role'>{role}</div> */}
      </div>
    </div>
  );
};

export default TrackOurProgress;
