import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/card/Card';
import CardOne from '../../Components/card/CardOne';
import CardThree from '../../Components/card/CardThree';
import CardTwo from '../../Components/card/CardTwo';
import Toast from '../../Components/Toast/ToastAlert';
import ListOne from '../../Components/ListOne/ListOne';
import Image from '../../Components/image/Image';
import Tab from '../../Components/Tab/tab';
import Text from '../../Components/text/Text';
import Slider from '../../Components/slider/slider';
import Switch from '../../Components/switch/Switch';
import Buttons from '../../Components/buttons/Button';
import TopBarOne from '../../Components/TopBarOne/TopBarOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Profile1 from '../../assets/images/profile1.jpg';
import Send from '../../assets/images/send.png';
import Clock from '../../assets/images/svg/clock.svg';
import Comment from '../../assets/images/svg/chat.svg';
import Like from '../../assets/images/svg/like.svg';
import Like1 from '../../assets/images/svg/like1.svg';
import Dislike from '../../assets/images/svg/dislike.svg';
import Spam from '../../assets/images/svg/spam-2.svg';
import Envelop from '../../assets/images/svg/envelope.svg';
import Back from '../../assets/images/svg/arrowUpLeft.svg';
import Doubleuotes1 from '../../assets/images/svg/double-quotes-1.svg';
import Doubleuotes2 from '../../assets/images/svg/double-quotes-2.svg';
import VideoImg from '../../assets/images/video.png';
import Verify from '../../assets/images/svg/verify.svg';

import Verify1 from '../../assets/images/svg/verify1.svg';
import Badges from '../../Components/Badges/Badges';
// import Tab from '../../Components/Tab/tab';
import FbPost from '../../assets/images/fbPosts.png';

import './Home.scss';
import { Button } from 'bootstrap';
import InfoBlock from '../../Components/InfoBlock/InfoBlock';
import ToppBarOne from '../../Components/TopBarOne/TopBarOne';

const Home = () => {
  return (
    <div>
      <Header /> 
      <Toast content="Join community, share achievements, meet new friends and more" backgroundColor="default" />
      {/* <TopBarOne name="Jonathan Doe" profile={Profile1} post="(Junior Member)" backgroundColor="default"/> */}
      <div className='position-relative'>
        <div className="switchWrap">
          <Switch id="btn1" />
        </div>
        <Carousel />
        <Container>
          <Row className='mt-5'>
            {/* <Col lg={9}>
                <div className='profileWrap'>
                  <div className='d-flex align-items-end'>
                    <Text text='Welcome' className='fs-32 fw500 text-col1'/>
                    <Text text=' Jonathan Doe' className='fs-32 fw700 text-col1 ms-2'/>
                    <Text text='Verified' className='fs-20 fw700 text-col22 ms-2 mb-1' />
                  </div>
                  <div className='d-flex mb-3'>
                    <Text text='TG World Record' className='text-col23 fs-22 fw500'/>
                    <Text text='120' className='fs-22 text-col23 fw700 ms-2'/>
                  </div>
                  <ListOne/>
                </div>
              </Col> */}
            <Col lg={9}>
              <div className='cardBg  mb-4'>
                <div className='d-flex mb-3 flex-wrap flex-md-nowrap flex-lg-nowrap'>
                  <div className='imgWrap mx-auto mx-sm-0 mb-3 mb-md-0'>
                    <Image src={Profile1} className="img-fluid" />
                  </div>
                  <div className='ms-3'>
                    <Text text="Welcome," className="fs-18 text-col6 fw400" />
                    <Text text="Jonathan Doe" className="fs-30 text-col6 fw600" />
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
                  <Text text='TG World Record' className="fs-22 fw500 text-col6" />
                  <Text text='120' className="fs-22 fw700 ms-2 text-col6" />
                </div>
                <div className='mb-3'>
                  <ListOne />
                </div>


                <div className='borderBox d-inline-block text-col6 me-4'>
                  <div className='d-flex'>
                    <div>
                      <Text text='09' className="fs-55 fw600 lh1" />
                      <Text text='Open' className="fs-26 fw400" />
                    </div>
                    <div className='ms-4'>
                      <Text text='Performance(s)' className="fs-14 fw400 mb-3" />
                      <div className='d-flex borderBefore bGreen mb-2 ps-3'>
                        <Text text='Accepted' className="fs-22 fw500" />
                        <Text text='15' className="fs-22 fw700 ms-3" />
                      </div>
                      <div className='d-flex borderBefore bOrange ps-3'>
                        <Text text='Total' className="fs-22 fw500" />
                        <Text text='30' className="fs-22 fw700 ms-3" />
                      </div>

                    </div>
                  </div>

                </div>
                <div className='borderBox d-inline-block text-col6 me-4'>
                  <div className='d-flex'>
                    <div>
                      <Text text='15' className="fs-55 fw600 lh1" />
                      <Text text='Open' className="fs-26 fw400" />
                    </div>
                    <div className='ms-4'>
                      <Text text='Vote(s)' className="fs-14 fw400 mb-3" />
                      <div className='d-flex borderBefore bGreen mb-2 ps-3'>
                        <Text text='Accepted' className="fs-22 fw500" />
                        <Text text='80' className="fs-22 fw700 ms-3" />
                      </div>
                      <div className='d-flex borderBefore bOrange ps-3'>
                        <Text text='Total' className="fs-22 fw500" />
                        <Text text='120' className="fs-22 fw700 ms-3" />
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </Col>
            <Col lg={3}>
              <div className="contentWrap">

                <div className='d-flex justify-content-between brdr-btm-1 pb-2 mb-3'>
                  <Text text='My Posts (20)' className='fs-18 fw600' />
                  <Text text='View all' className='fs-16 fw600 text-col4' />
                </div>
                <div className='brdr-btm-2 pb-2 mb-2'>
                  <Text text='Major Havoc The Promise End CAX 2022 Update' className="fs-16 fw600 text-col5 mb-2" />
                  <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap flex-lg-nowrap">
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Clock} />
                      <Text text="5 mins ago" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Comment} />
                      <Text text="0" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Like} />
                      <Text text="1" className="text-col4 fs-14 fw500  me-3" />
                    </div>

                  </div>
                </div>

                <div className='brdr-btm-2 pb-2 mb-2'>
                  <Text text='Major Havoc The Promise End CAX 2022 Update' className="fs-16 fw600 text-col5 mb-2" />
                  <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap flex-lg-nowrap">
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Clock} />
                      <Text text="5 mins ago" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Comment} />
                      <Text text="0" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Like} />
                      <Text text="1" className="text-col4 fs-14 fw500  me-3" />
                    </div>

                  </div>
                </div>

                <div className='brdr-btm-2 pb-2 mb-2'>
                  <Text text='Major Havoc The Promise End CAX 2022 Update' className="fs-16 fw600 text-col5 mb-2" />
                  <div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap flex-lg-nowrap">
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Clock} />
                      <Text text="5 mins ago" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Comment} />
                      <Text text="0" className="text-col2 fs-14 fw500 me-3" />
                    </div>
                    <div className="d-flex align-items-center">
                      <Image className="img-fluid me-2" src={Like} />
                      <Text text="1" className="text-col4 fs-14 fw500  me-3" />
                    </div>

                  </div>
                </div>



              </div>
            </Col>
          </Row>
        </Container>

      </div>
      <Container  >
        <div>
          <div className='submitWrap d-flex align-items-center  flex-wrap flex-md-nopwrap justify-content-start justify-content-md-between my-4'>
            <Text text='Submit your own Performance for the community to evaluate' className="fs-25 fw600 text-col6" />
            <Buttons
              text="Submit a performance"
              variant="primary"
              className="primary pad1 fs-14 fw600 ms-0 ms-lg-3"
            />
          </div>
        </div>
        <Text text='Performances' className="fs-30 fw600 mb-3" />
        <div className='position-relative'>
          <Slider />

        </div>

        <Row className='mt-4 mb-3'>
          <Col lg={12}>

            {/* <Tab/> */}
            <div className='contentWrap'>
              <Text text='Recent Activity' className="fs-25 fw600 text-col1 mb-4" />

              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='contentWrap mb-3'>
                <Text text='Rules' className='fs-19 fw600 text-col1 mb-3' />
                <ul className='ruleList'>
                  <li>
                    <Text text='Score taken from the "Total Event Kudos" displayed after the difficulty bonus is applied for the indicated event.' className='fs-14 fw500 text-col5' />

                  </li>
                  <li>
                    <Text text='Difficulty (and therefore bonus) is the players choice. Event must be successfully completed to earn the bonus.' className='fs-14 fw500 text-col5' />
                  </li>
                  <li>
                    <Text text='The "Previous Best" is not permitted as a measurement.' className='fs-14 fw500 text-col5' />
                  </li>
                </ul>
                <InfoBlock heading='Submission Message' text='Achieved on 20110801. Attempt begins around 13:01. Only Chapter 11 in this footage. Chapter 11 can be confirmedaround 2:11, 22:46, 27:16 and 1:02:23.  - AP' img={Send} className='blockWrap red d-flex' />
                <div className='d-flex  flex-wrap flex-md-nopwrap brdr-btm-2 pb-3 my-3'>
                  <div className='videoWrap mb-3 mb-lg-0 mx-auto mx-lg-0'>
                    <Image src={VideoImg} className="img-fluid" />
                  </div>
                  <div>

                    <div className='submitWrap padInc d-flex align-items-center ms-3 flex-wrap flex-md-nopwrap justify-content-start justify-content-lg-between '>
                      <Text text='Voting Poll: Is this Performance Claim Valid?' className="fs-25 fw600 text-col6 mb-3 mb-lg-0" />
                      <div className='mb-3 mb-md-0'>
                        <Image src={Like1} className="img-fuid mx-2" alt='Like' />
                        <Image src={Dislike} className="img-fuid mx-2" />
                      </div>

                      <Buttons
                        text="Vote Now"
                        variant="primary"
                        className="primary pad1 fs-14 fw600 ms-0 ms-lg-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap flex-md-nopwrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center mb-3 mb-md-0">
                    <Image className="img-fluid me-2" src={Like} />
                    <Text text="You, Diana Prince and 10 others" className="text-col4 fs-18 fw600  me-3" />
                  </div>
                  <div className='d-flex'>
                    <Image className="img-fluid me-3" src={Back} />
                    <Image className="img-fluid me-3" src={Doubleuotes1} />
                    <Image className="img-fluid me-3" src={Doubleuotes2} />
                    <Image className="img-fluid me-3" src={Spam} />
                    <Image className="img-fluid me-3" src={Envelop} />
                  </div>


                </div>
              </div>

              <div className='mb-3'>
                <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
              </div>
              <div className='mb-3'>
                <CardThree heading="RaGeNyc has just posted" imgSecond={ProfileImage} subHeadingFirst="Teens are rewriting what is possible in the world of competitive Tetris" />
              </div>
              <div className='d-flex justify-content-center'>
                <Buttons text="View all" className="fs-20 fw600 pdCustom" variant="borderDanger" />
              </div>


            </div>
          </Col>
          {/* <Col lg={4}>
              <div className='contentWrap'>
                <div className='d-flex justify-content-center overflow-hiddenH'>
                  <Image src={FbPost} className="img-fluid" />
                </div>
              
              </div>
            </Col> */}
        </Row>

      </Container>
      <Footer />
    </div>
  )
}

export default Home;