import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/card/CardOne';
import Toast from '../../Components/Toast/ToastAlert';
import Image from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';

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
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
  
  export default Home