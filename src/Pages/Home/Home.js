import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/card/CardOne';
import CardTwo from '../../Components/card/CardTwo';
import Toast from '../../Components/Toast/ToastAlert';
import Image from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Verify from '../../assets/images/svg/verify.svg';
import Badges from '../../Components/Badges/Badges';

const Home = () => {
    return (
      <div>
        <Header/>
        <Carousel/>
        <Toast content="Join community, share achievements, meet new friends and more" backgroundColor="default"/>
        <Container  fluid>
          <Row className='mt-4'>
            <Col lg={8}>
            <Card heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image} imgSecond={ProfileImage}/>
            <CardTwo heading="Gabriel Groomer" headingOne="Major Havoc The Promise End CAX 2022 Update" text="I will be at CAX 2022 later this month with the rest of the Major Havoc Project 
team showing off the final version of the Promised End." imgFirst={ProfileImage}/>

            <Badges
                badgeText="New Property "
                class="badges primaryBadge"
            />
            <Badges
                badgeText="Verfied "
                class="badges successBadge"
                iconSrc={Verify}
            />
            </Col>

          </Row>
        </Container>
        
        
      </div>
    )
  }
  
  export default Home