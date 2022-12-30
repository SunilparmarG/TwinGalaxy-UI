import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import Heading from '../../Components/heading/Heading';
import Text from '../../Components/text/Text';
import Input from '../../Components/Input/InputFloat';
import Select from '../../Components/Input/SelectFloat';
import Checkbox from '../../Components/checkbox/Checkbox';
import Button from '../../Components/Buttons/Button';
import Image from '../../Components/image/Image';
import LoginUser from '../../assets/images/loginUser.png'
import Facebook from '../../assets/images/svg/facebook.svg';
import Twitters from '../../assets/images/svg/twitermain.svg';
import Comments from '../../assets/images/svg/comments.svg';
import BackArrow from '../../assets/images/svg/backArrow.svg';
import EyeSlace from '../../assets/images/svg/eye-slash.svg';
import EyeSvgrepo from '../../assets/images/svg/eye-svgrepo.svg';
import Location from '../../assets/images/svg/Location.svg';
import './Register.scss';

const Register = () => {
  return (
    <div>

      <div className='position-relative overflow-hidden'>
        <Container className='mt-3 mb-5'>
          <div className='userLayout'>
            <div className='backBtn pt-3 ps-3'>
              <Nav.Link className="fs-18 p-0  d-flex align-items-center"><Image src={BackArrow} className="img-fluid" />
                <span className='text-col4 ms-2 fw500'>Back</span></Nav.Link>
            </div>
            <div className='innerLayout'>
              <Row>
                <Col md={12} lg={6} className="upIndex">
                  <Heading text="Register" typeofHeading="h2" size="fs-36" color="text-col13" className="text-capitalize fw600" />
                  <div className='d-flex align-items-center mb-4'>
                    <Text text="Already have an account ?" className="text-col2 fs-20 fw500" />
                    <NavLink className="ms-1" to='/login'><span className='text-col4 fs-20 fw500'>Login</span></NavLink>
                  </div>
                  <div>
                    <div className='mb-md-4 mb-3'>
                      <Input
                        placeholder="Username"
                        name="uname"
                        required="true"
                        label="Username"
                      />
                    </div>
                    <div className='mb-md-4 mb-3'>
                      <Input
                        placeholder="Email"
                        name="Email"
                        required="true"
                        label="Email"
                      />
                    </div>


                    <div className='mb-md-4 mb-3 position-relative'>
                      <Input
                        placeholder="Location"
                        name="location"
                        required="true"
                        label="Location"
                        className='paddingRight'
                      />
                      <div className='showPass mx-20'>
                        <Image src={Location} className="img-fluid" />  
                      </div>
                    </div>
                    <div className='d-flex mb-md-4 mb-3 justify-content-between flex-wrap flex-md-nowrap'>
                      <div className='me-0 me-md-3 mxWdth w-100 mb-3 mb-md-0'>
                        <Select defaultOption="Country" />
                      </div>
                      <div className='me-0 me-md-3 mxWdth w-100 mb-3 mb-md-0'>
                        <Select defaultOption="State" />
                      </div>
                      <div className='mxWdth w-100'>
                        <Select defaultOption="City" />
                      </div>
                    </div>
                    <div className='mb-md-4 mb-3'>
                      <Input
                        placeholder="Address"
                        name="Address"
                        required="true"
                        label="Address"
                      />
                    </div>
                    <div className='d-flex mb-md-4 mb-3'>
                      <div className='me-3'>
                        <Input
                          placeholder="+1"
                          name="code"
                          required="true"
                          value="+1"
                          className="mxWdth1 text-center"
                        />
                      </div>

                      <div className="w-100">
                        <Input
                          type="number"
                          placeholder="Phone Number"
                          name="Phone number"
                          required="true"
                          label="Phone Number"
                        />
                      </div>

                    </div>
                    <div className="position-relative mb-md-4 mb-3">
                      <Input
                        type='password'
                        placeholder="Password"
                        name="password"
                        required="true"
                        className="paddingRight "
                        label="Password"
                      />
                      <div className='showPass'>
                        <Image src={EyeSlace} className="img-fluid disabledImg" />
                        <Image src={EyeSvgrepo} className="img-fluid enableImg" />
                      </div>
                    </div>
                  </div>


                  <div>
                    <Button
                      variant="primary"
                      className=" fs-24 text-col3 fw-600 mt36 w-100 mb-3"
                      text="Next"
                      disabled="true"
                    />
                  </div>
                  <div>
                    <Text text="Or continue with" className="text-col2 fs-18 fw500 mb-3 text-center" />
                    <ul className='socialLogin'>
                      <li>
                        <NavLink>
                          <Image src={Facebook} className="img-fluid" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          <Image src={Comments} className="img-fluid" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink>
                          <Image src={Twitters} className="img-fluid" />
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                </Col>
                <Col md={6}>
                  <div className='position-absolute userRight rightImg'>
                    <Image src={LoginUser} className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

    </div>
  )
}

export default Register; 