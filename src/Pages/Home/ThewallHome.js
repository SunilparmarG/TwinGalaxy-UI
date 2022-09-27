import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import ListOne from '../../Components/ListOne/ListOne';
import Image from '../../Components/image/Image';
import Tab from '../../Components/Tab/tab';
import Text from '../../Components/text/Text';
import Switch from '../../Components/switch/Switch';
import Buttons from '../../Components/buttons/Button';
import TopBarOne from '../../Components/TopBarOne/TopBarOne'; 

// images and icons 
import Profile1 from '../../assets/images/profile1.jpg';
import Clock from '../../assets/images/svg/clock.svg';
import Comment from '../../assets/images/svg/chat.svg';
import Like from '../../assets/images/svg/like.svg';
import Verify1 from '../../assets/images/svg/verify1.svg';

// import Tab from '../../Components/Tab/tab';
import Badges from '../../Components/Badges/Badges';
import './Home.scss';

const TheWall = () => {
    return (
        <div>
            <Header />
            <TopBarOne name="Jonathan Doe" profile={Profile1} post="(Junior Member)" backgroundColor="default" />
            <div className='position-relative'>    
                <div className="switchWrap">
                    <Switch id="btn1" />
                </div>
                <Container>
                    <Row className='mt-5'>
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
                                            badgeText="Verfied"
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
            <Container>
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
                <Row className='mt-4 mb-3'>  
                    <Col lg={12}>
                        <Tab/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default TheWall; 