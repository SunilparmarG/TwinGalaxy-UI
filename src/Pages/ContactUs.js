import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// components 
import Heading from '../Components/heading/Heading';
import Text from '../Components/text/Text';
import Input from '../Components/Input/InputFloat';
import Checkbox from '../Components/checkbox/Checkbox';
import Button from '../Components/Buttons/Button';
import InputTextarea from '../Components/Input/inputTextarea';
import TopBarOne from '../Components/TopBarOne/TopBarOne';

// images  
import Image from '../Components/image/Image';
import BackArrow from '../assets/images/svg/backArrow.svg';
import Profile1 from '../assets/images/profile1.jpg';


const ContactUs = () => {
    const navigate = useNavigate();
    return (
        <main>
            <TopBarOne name="Jonathan Doe" profile={Profile1} post="(Junior Member)" backgroundColor="default" />
            <section className='position-relative overflow-hidden' aria-label="Contact Us Section">
                <Container className='mt-5 mb-5'>
                    <div className='backBtn mb-3'>
                        <NavLink className="fs-25 p-0  d-flex align-items-center">
                            <Image src={BackArrow} className="img-fluid" />
                            <span className='text-col2 ms-2 fw500'>Back</span></NavLink>
                    </div>
                    <div className='userLayout'>
                        <div className='innerLayout'>
                            <Heading text="Contact Us" typeofHeading="h3" size="fs-20" color="text-col1" className="text-capitalize fw600 mb-3" />
                            <div className='mb-4 pb-2'>
                                <Text text="Send an Email to the Site Administrator" className="text-col5 fs-18 fw600" />
                                <div className='borderBottom'></div>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        placeholder="Your Name"
                                        name="yourname"
                                        required="true"
                                        type="text"
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        placeholder="Email Address"
                                        name="email"
                                        required="true"
                                        type="email"
                                    />
                                </Col>
                                <Col md={12}>
                                    <Text text="Subject" className="fw500 fs-18 text-col5" />
                                    <Row>
                                        <Col md={3} className="mt-2 mb-3">
                                            <Checkbox label="Site Feedback" />
                                        </Col>
                                        <Col md={3} className="mt-2 mb-3">
                                            <Checkbox label="Registration Problem" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <InputTextarea />
                                </Col>
                                <Col md={12}>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <Button
                                            className="btn-primary btn-trans fs-16 text-col5 fw600"
                                            text="Reset Fields"
                                        />
                                        <Button
                                            className="btn-primary btn-send fs-16 text-col6 fw600"
                                            text="Send"
                                        />
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

export default ContactUs; 