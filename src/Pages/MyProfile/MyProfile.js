import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// components 
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Input from '../../Components/Input/InputFloat';
import Checkbox from '../../Components/checkbox/Checkbox';
import Button from '../../Components/Buttons/Button';
import InputTextarea from '../../Components/Input/inputTextarea';
import Image from '../../Components/image/Image';
import './Profile.scss';

// images  
import ProfileImg from '../../assets/images/userprofile.png';
import StarsRating from '../../assets/images/svg/stars.svg';


const MyProfile = () => {
    const navigate = useNavigate();
    return (
        <main>
            <section className='position-relative overflow-hidden' aria-label="User Profile Section">
                <Container className='mt-5 mb-5'>
                    <div className='profileLayout'>
                        <div className='p-4'>
                            <Row>
                                <Col md={5}>
                                    <div className='d-flex align-items-center'>
                                        <div className='profileBox1 text-center'>
                                            <div className='profileImg mb-2'>
                                                <Image src={ProfileImg} name="Jonathan Doe" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className='profileBox2 ps-4'>
                                            <Heading text="Jonathan Doe" typeofHeading="h2" size="fs-28" color="text-col1" className="text-capitalize fw600 mb-0" />
                                            <Text text="(Junior Member)" className="fs-18 fw600 d-block text-col5" />
                                            <Text text="New York" className="fs-18 fw600 d-block text-col2" />
                                            <Text text="User ID:459571" className="fs-18 fw600 d-block text-col13" />
                                        </div>
                                    </div>
                                    <div className='w140'>
                                        <span className='rating'>
                                            <Image src={StarsRating} name="Star" className="img-fluid" />
                                            <Text text="4.2" className="fs-16 fw600 ms-1 text-col26" />
                                        </span>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='userInfo'>
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
                                <Col md={3}>
                                    <div className='text-end'>
                                        <Button
                                            className="btn-primary bgSend fs-16 text-col6 fw600"
                                            text="Send Message"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='p-4 bg-col31 userPost'>
                            <Row>
                                <Col md={8}>
                                    <Row>
                                        <Col>
                                            <div className='colBorder d-flex flex-column'> 
                                                <Text text="Posts" className="fs-18 fw600 text-col2" />
                                                <Text text="05" className="fs-22 fw700 text-col1" /> 
                                            </div>
                                        </Col>
                                        <Col className='ps-lg-4'>
                                            <div className='colBorder d-flex flex-column'> 
                                                <Text text="Friends" className="fs-18 fw600 text-col2" />
                                                <Text text="07" className="fs-22 fw700 text-col1" /> 
                                            </div>
                                        </Col>
                                        <Col className='ps-lg-4'>
                                            <div className='colBorder d-flex flex-column'> 
                                                <Text text="Submissions" className="fs-18 fw600 text-col2" />
                                                <Text text="04" className="fs-22 fw700 text-col1" /> 
                                            </div>
                                        </Col>
                                        <Col className='ps-lg-4'>
                                            <div className='colBorder d-flex flex-column'> 
                                                <Text text="Subscriptions" className="fs-18 fw600 text-col2" />
                                                <Text text="15" className="fs-22 fw700 text-col1" /> 
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>    
                                    <div className='text-end socialLinks'>
                                        <ul>
                                            <li>
                                                <a></a> 
                                            </li>
                                            <li>
                                                <a></a> 
                                            </li>
                                            <li>
                                                <a></a> 
                                            </li>
                                            <li>
                                                <a></a> 
                                            </li>
                                            <li>
                                                <a></a> 
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

export default MyProfile;

