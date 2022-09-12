import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Input from '../../Components/Input/Input';
import Checkbox from '../../Components/checkbox/Checkbox';
import Button from '../../Components/buttons/Button';
import Image from '../../Components/image/Image';
import LoginUser from '../../assets/images/loginUser.png'
import Facebook from '../../assets/images/svg/facebook.svg';
import Twitters from '../../assets/images/svg/twitermain.svg';
import Comments from '../../assets/images/svg/comments.svg'; 
import BackArrow from '../../assets/images/svg/backArrow.svg';  
import EyeSlace from '../../assets/images/svg/eye-slash.svg'; 
import EyeSvgrepo from '../../assets/images/svg/eye-svgrepo.svg';
import './Login.scss';

const Login = () => {
  return (
    <div>
      <Header />
      <div className='position-relative overflow-hidden'>
        <Container className='mt-5 mb-5'>
          <div className='userLayout'>
            <div className='backBtn pt-3 ps-3'>
                <Nav.Link className="fs-18 p-0  d-flex align-items-center"><Image src={BackArrow} className="img-fluid" /> 
                <span className='text-col4 ms-2 fw500'>Back</span></Nav.Link>   
            </div>
            <div className='innerLayout'>
              <Row>
                <Col md={12} lg={6}>  
                  <Heading text="Login" typeofHeading="h2" size="fs-36" color="text-col13" className="text-capitalize fw600" />
                  <div className='d-flex align-items-center'>
                    <Text text="Don’t have an account ?" className="text-col2 fs-20 fw500" />
                    <Nav.Link className="ms-1"><span className='text-col4 fs-20 fw500'>Register</span></Nav.Link>
                  </div>
                  <Row>
                    <Col md={12}>
                      <Input
                        placeholder="Username"
                        name="uname"
                        required="true"
                      />
                    </Col>   
                    <Col md={12} className="position-relative"> 
                      <Input 
                        type='password'
                        placeholder="Password"
                        name="password"
                        required="true"
                        className="paddingRight" 
                      />
                      <div className='showPass'>
                        <Image src={EyeSlace} className="img-fluid disabledImg" /> 
                        <Image src={EyeSvgrepo} className="img-fluid enableImg" />  
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mt-2 mb-4">
                      <Checkbox label="Keep me signed in" />
                    </Col>
                    <Col md={6} className="text-md-end mt-2 mb-4">
                      <Nav.Link className="ms-1">
                        <span className='text-col4 fs-18 fw500'>Forget password?</span>
                      </Nav.Link>
                    </Col>
                    <Col md={12}> 
                      <Button 
                        className="btn-primary fs-24 text-col3 fw-600 mt36 w-100 mb-3"
                        title="Login Now"
                      />
                    </Col>
                    <Col md={12}>
                      <Text text="Or continue with" className="text-col2 fs-18 fw500 mb-3 text-center" /> 
                      <ul className='socialLogin'>
                        <li>
                          <Nav.Link>
                            <Image src={Facebook} className="img-fluid" />
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link>
                            <Image src={Comments} className="img-fluid" />
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link>
                            <Image src={Twitters} className="img-fluid" />
                          </Nav.Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>  
                  <div className='position-absolute userRight'>
                    <Image src={LoginUser} className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Login; 