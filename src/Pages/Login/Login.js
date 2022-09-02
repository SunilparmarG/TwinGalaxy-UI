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
import './Login.scss';

const Login = () => {
  return (
    <div>
      <Header />
      <div className='position-relative overflow-hidden'> 
        <Container className='mt-5 mb-5'>
          <div className='userLayout'>
            <div className='innerLayout'>
              <Row>
                <Col md={6}>
                  <Heading text="Login" typeofHeading="h2" size="fs-36" color="text-col12" className="text-capitalize fw600" />
                  <div className='d-flex'>
                    <Text text="Don’t have an account ?" className="text-col2 fs-20 fw500" />
                    <Nav.Link className="text-col4 fs-20 fw500 ms-1">Register</Nav.Link>
                  </div>
                  <Row>
                    <Col md={12}>
                      <Input
                        placeholder="Username"
                        name="uname"
                        required="true"
                      />
                    </Col>
                    <Col md={12}>
                      <Input
                        type='password'
                        placeholder="Password"
                        name="password"
                        required="true"
                      />
                    </Col>
                    <Col md={6}>
                      <Checkbox label="Keep me signed in" />
                    </Col>
                    <Col md={6} className="text-md-end"><Nav.Link className="text-col4 fs-20 fw500 ms-1">Forget password?</Nav.Link></Col>
                    <Col md={12}>
                      <Button
                        size="fs-24" 
                        className="btn-primary text-col3 fw-600 mt36 w-100 fs-24"
                        title="Login Now" 
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <div className='position-absolute'> 
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