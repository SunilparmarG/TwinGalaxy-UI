import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import ListOne from '../../Components/ListOne/ListOne';
import Image from '../../Components/image/Image';
import Tab1 from '../../Components/Tab/TabOne';
import Text from '../../Components/text/Text';
import Slider from '../../Components/slider/slider';
import Switch from '../../Components/switch/Switch';
import Buttons from '../../Components/Buttons/Button';
import TopBarOne from '../../Components/TopBarOne/TopBarOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Profile1 from '../../assets/images/profile1.jpg';
import Verify from '../../assets/images/svg/verify.svg';
import Settings from '../../assets/images/svg/settings.svg';

import Verify1 from '../../assets/images/svg/verify1.svg';
import Badges from '../../Components/Badges/Badges';
// import Tab from '../../Components/Tab/tab';
import FbPost from '../../assets/images/fbPosts.png';

import './Performance.scss';
import { Button } from 'bootstrap';
import InfoBlock from '../../Components/InfoBlock/InfoBlock';
import ToppBarOne from '../../Components/TopBarOne/TopBarOne';
import Modal from '../../Components/Modal/Modal';

const Performance = () => {  
    return (
      <div>
        {/* <Toast content="Join community, share achievements, meet new friends and more" backgroundColor="default"/> */}
        <TopBarOne name="Jonathan Doe" profile={Profile1} post="(Junior Member)" backgroundColor="default"/>
        <div className='position-relative'>
          <div className="switchWrap"> 
              <Switch id="btn1"/>
          </div>
        </div>
        <div className='mt-5 container'>
        <Tab1/>
        {/* <Modal image={Settings} heading="Success!" subHeading="Your account has been created and verified successfully."/> */}
        <Modal/>
        </div>
      </div>
    )
  }
  
  export default Performance