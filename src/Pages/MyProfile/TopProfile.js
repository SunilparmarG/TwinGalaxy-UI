import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

// components 
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Button from '../../Components/Buttons/Button';
import Image from '../../Components/image/Image';
import './Profile.scss';

// images  
import ProfileImg from '../../assets/images/userprofile.png';
import StarsRating from '../../assets/images/svg/stars.svg';
import FacebookIcon from '../../assets/images/svg/Facebook-icon.svg';
import TwitterIcon from '../../assets/images/svg/Twitter-icon.svg';
import InstagramIcon from '../../assets/images/svg/Instagram-icon.svg';
import YoutubeIcon from '../../assets/images/svg/YouTube-icon.svg';
import TrueIcon from '../../assets/images/svg/True-icon.svg';
import ActivePro from '../../assets/images/svg/rightsign.svg'; 

const TopProfile = () => {
    return (
        <main> 
            <section className='position-relative overflow-hidden' aria-label="User Profile Section">
                <Container className='mt-5 mb-5'>
                    <div className='profileLayout'>
                        <div className='p-4'>
                            <Row>
                                <Col md={6} lg={5}>
                                    <div className='d-flex flex-column align-items-center align-items-sm-start flex-sm-row mb-4 mb-md-0'>
                                        <div className='profileBox1 position-relative text-center'>
                                            <div className='profileImg mb-2'>
                                                <Image src={ProfileImg} name="Jonathan Doe" className="img-fluid" />
                                                <Image src={ActivePro} name="Success" className="img-fluid activeIco" /> 
                                            </div>
                                            <div className='w140'>
                                                <span className='rating'>
                                                    <Image src={StarsRating} name="Star" className="img-fluid" />
                                                    <Text text="4.2" className="fs-16 fw600 ms-1 text-col26" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className='profileBox2 mt-3 ps-0 ps-sm-4'>
                                            <Heading text="Jonathan Doe" typeofHeading="h2" size="fs-28" color="text-col1" className="text-capitalize fw600 mb-0" />
                                            <Text text="(Junior Member)" className="fs-18 fw600 d-block text-col5" />
                                            <Text text="New York" className="fs-18 fw600 d-block text-col2" />
                                            <Text text="User ID:459571" className="fs-18 fw600 d-block text-col13" />
                                        </div>
                                    </div>

                                </Col>
                                <Col md={6} lg={4}>
                                    <div className='userInfo mb-3 mb-lg-0'>
                                        <Text text="TG User Info" className="fs-18 fw600 text-col5 mb-1" />
                                        <div className='d-flex justify-content-between mb-2'>
                                            <Text text="Expert Skill Index" className="fs-18 fw600 text-col2" />
                                            <Text text="0.00" className="fs-18 fw700 text-col1" />
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <Text text="Creadibility" className="fs-18 fw600 text-col2" />
                                            <Text text="1000" className="fs-18 fw700 text-col1" />
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <Text text="Submission Points" className="fs-18 fw600 text-col2" />
                                            <Text text="FREE" className="fs-18 fw700 text-col30" />
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <Text text="TG World Records" className="fs-18 fw600 text-col2" />
                                            <Text text="0" className="fs-18 fw700 text-col1" />
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <Text text="Other TG Records" className="fs-18 fw600 text-col2" />
                                            <Text text="0" className="fs-18 fw700 text-col1" />
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} lg={3}> 
                                    <div className='text-center text-sm-end mt-3 mt-md-0'>
                                        <Button
                                            className="btn-primary bgSend fs-16 text-col6 fw600"
                                            text="Send Message"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='p-4 bg-col31 userPost'>       
                            <Row className='align-items-center'>
                                <Col md={8}>
                                    <Row className='mb-4 mb-md-0'>
                                        <Col xs={12} sm={6} md={6} lg={3}>
                                            <div className='colBorder d-flex flex-column mb-3 mb-lg-0'>
                                                <Text text="Posts" className="fs-18 fw600 text-col2" />
                                                <Text text="05" className="fs-22 fw700 text-col1" />
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={3} className='ps-lg-4'>
                                            <div className='colBorder d-flex flex-column mb-3 mb-lg-0'>
                                                <Text text="Friends" className="fs-18 fw600 text-col2" />
                                                <Text text="07" className="fs-22 fw700 text-col1" />
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={3} className='ps-lg-4'>
                                            <div className='colBorder d-flex flex-column mb-3 mb-lg-0'>
                                                <Text text="Submissions" className="fs-18 fw600 text-col2" />
                                                <Text text="04" className="fs-22 fw700 text-col1" />
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={6} lg={3} className='ps-lg-4 mb-3 mb-md-0'>
                                            <div className='colBorder d-flex flex-column'>
                                                <Text text="Subscriptions" className="fs-18 fw600 text-col2" />
                                                <Text text="15" className="fs-22 fw700 text-col1" />
                                            </div>    
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <div className='text-sm-end text-center socialLinks'>  
                                        <ul className='justify-content-center justify-content-sm-end'>
                                            <li>
                                                <a href="#">
                                                    <Image src={FacebookIcon} name="Facebook Icon" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <Image src={TwitterIcon} name="Facebook Icon" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <Image src={InstagramIcon} name="Facebook Icon" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <Image src={YoutubeIcon} name="Facebook Icon" className="img-fluid" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <Image src={TrueIcon} name="Facebook Icon" className="img-fluid" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default TopProfile;

