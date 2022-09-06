import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import CardOne from '../../Components/Card/CardOne';
import CardThree from '../../Components/Card/CardThree';
import Toast from '../../Components/Toast/ToastAlert';
import Image from '../../Components/Image/Image';
import Text from '../../Components/Text/Text';
import Slider from '../../Components/Slider/Slider';
import Buttons from '../../Components/Buttons/Buttons';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Profile1 from '../../assets/images/profile1.jpg';
import Verify from '../../assets/images/svg/verify.svg';
import Verify1 from '../../assets/images/svg/verify1.svg';
import Badges from '../../Components/Badges/Badges';
// import Tab from '../../Components/Tab/tab';
import FbPost from '../../assets/images/fbPosts.png';

import './Home.scss';
import { Button } from 'bootstrap';

const Home = () => {
    return (
      <div>
        <Header/>
        <Carousel/>
        <Toast content="Join community, share achievements, meet new friends and more" backgroundColor="default"/>
        <Container  >
          <div>
            <div className='submitWrap d-flex align-items-center justify-content-between my-4'>
              <Text text='Submit your own Performance for the community to evaluate' className="fs-25 fw600 text-col6"/>
              <Buttons
              title="Submit a performance"
              variant="primary"
              className="primary pad1 fs-14 fw600 ms-3"
            />
            </div>
          </div>
          <Text text='Performances' className="fs-30 fw600 mb-3"/>
          
          <Slider/>
          <Row className='mt-4 mb-3'>
            <Col lg={8}>
            
            {/* <Tab/> */}
            <div className='contentWrap'>
              <Text text='Recent Activity' className="fs-25 fw600 text-col1 mb-4"/>
              
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage}/>
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris"/>
              </div>
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage}/>
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris"/>
              </div>
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage}/>
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris"/>
              </div>
              <div className='d-flex justify-content-center'>
              <Buttons title="View all" className="fs-20 fw600" variant="borderDanger"/>
              </div>
              
              
            </div>
            </Col>
            <Col lg={4}>
              <div className='contentWrap'>
                <div className='d-flex justify-content-center overflow-hiddenH'>
                  <Image src={FbPost} className="img-fluid" />
                </div>
              
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col lg={9}>
            <div className='cardBg  mb-4'>
              <div className='d-flex mb-3 flex-wrap flex-md-nowrap flex-lg-nowrap'>
                <div className='imgWrap mx-auto mx-sm-0 mb-3 mb-md-0'>
                  <Image src={Profile1} className="img-fluid" />
                </div>
                <div className='ms-3'>
                <Text text="Welcome," className="fs-18 text-col6 fw400"/>
                <Text text="Jonathan Doe" className="fs-30 text-col6 fw600"/>
                </div>
                <div className='d-flex align-items-end'>
                <Badges
                badgeText="Verfied "
                className="badges  mb-4 mb-md-2 ms-3 success"
                iconSrc={Verify1}
                />
                </div>
                
                
              </div>
              <div className='d-flex mb-3'>
                <Text text='TG World Record' className="fs-22 fw500 text-col6"/>
                <Text text='120' className="fs-22 fw700 ms-2 text-col6"/>
              </div>
              <div className="d-flex align-items-center mb-3">
                <ul className="cardList ps-0">
                  <li>
                  <Text
                    text="Submission Points:"
                    color="text-col6"
                    className=" fs-18 fw-500  d-inline-block"
                  />
                  <Text
                    text="60"
                    color="text-col6"
                    className=" fs-18 fw-600 d-inline-block"
                  />
                  </li>
                  <li>
                  <Text
                    text="Credibility :"
                    color="text-col6"
                    className=" fs-18 fw-500  d-inline-block"
                  />
                  <Text
                    text="160,000"
                    color="text-col6"
                    className=" fs-18 fw-600 d-inline-block"
                  />
                  </li>
                  <li>
                  <Text
                    text="Following:"
                    color="text-col6"
                    className=" fs-18 fw-500  d-inline-block"
                  />
                  <Text
                    text="160"
                    color="text-col6"
                    className=" fs-18 fw-600 d-inline-block"
                  />
                  </li>
                  <li>
                  <Text
                    text="Follower:"
                    color="text-col6"
                    className=" fs-18 fw-500 d-inline-block "
                  />
                  <Text
                    text="160"
                    color="text-col6"
                    className=" fs-18 fw-600 d-inline-block"
                  />
                  </li>
                  
                </ul>
              </div>
              <div className='borderBox d-inline-block text-col6 me-4'>
                <div className='d-flex'>
                  <div>
                    <Text text='09' className="fs-55 fw600 lh1"/>
                    <Text text='Open' className="fs-26 fw400"/>
                  </div>
                  <div className='ms-4'>
                    <Text text='Performance(s)' className="fs-14 fw400 mb-3"/>
                    <div className='d-flex borderBefore bGreen mb-2 ps-3'>
                    <Text text='Accepted' className="fs-22 fw500"/>
                    <Text text='15' className="fs-22 fw700 ms-3"/>
                    </div>
                    <div className='d-flex borderBefore bOrange ps-3'>
                    <Text text='Total' className="fs-22 fw500"/>
                    <Text text='30' className="fs-22 fw700 ms-3"/>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              <div className='borderBox d-inline-block text-col6 me-4'>
                <div className='d-flex'>
                  <div>
                    <Text text='15' className="fs-55 fw600 lh1"/>
                    <Text text='Open' className="fs-26 fw400"/>
                  </div>
                  <div className='ms-4'>
                    <Text text='Vote(s)' className="fs-14 fw400 mb-3"/>
                    <div className='d-flex borderBefore bGreen mb-2 ps-3'>
                    <Text text='Accepted' className="fs-22 fw500"/>
                    <Text text='80' className="fs-22 fw700 ms-3"/>
                    </div>
                    <div className='d-flex borderBefore bOrange ps-3'>
                    <Text text='Total' className="fs-22 fw500"/>
                    <Text text='120' className="fs-22 fw700 ms-3"/>
                    </div>
                    
                  </div>
                </div>
                
              </div>
              
            </div>
            
            </Col>
          </Row> */}
        </Container>
        
        <Footer/>
      </div>
    )
  }
  
  export default Home