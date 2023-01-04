import React, { memo } from "react";
import { Card, Tab, Row, Col, Nav, Form, Accordion } from "react-bootstrap";

// components 
import Text from "../text/Text";
import Heading from "../heading/Heading";
import SelectComponent from "../Input/SelectFloat";
import InputComponent from "../Input/InputFloat";
import Checkbox from "../checkbox/Checkbox";
import Buttons from "../Buttons/Button";
import UploadButton from "../UploadButton/UploadButton";
import Chips from "../Chips/ChipsComponent";
import CheckboxNew from "../checkbox/CheckboxNew";
import ProfileModal from "../Modal/ProfileModal";
import ConfirmModal from "../Modal/ConfirmModal";
import Image from "../image/Image";

// images and scss
import "./tab.scss";
import EyeSvgrepo from '../../assets/images/svg/eye-svgrepo.svg';
import EyeSlace from '../../assets/images/svg/eye-slash.svg';
import FacebookIcon from '../../assets/images/svg/facebook-icon.svg';
import UserPostOne from '../../assets/images/user-post.svg';
import UserPostTwo from '../../assets/images/user-post-two.svg';

const VerticalTab = ({ className, ...rest }) => {
  // const 
  return (
    <section className="vertical-tab" aria-label="Vertical Tab Section">
      <Tab.Container id="left-tabs-example" defaultActiveKey="myprofile">  
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="myprofile">My Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="editprofile">Edit Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="editsignature">Edit Signature</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="claimusername">Claim Username</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="emailpassword">Edit Email & Password</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="editconnections">Edit Connections</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="editignorelist">Edit Ignore List</Nav.Link>  
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reverify">Re Verify</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="myprofile">
                <div className="my-profile">
                  <Card> 
                    <Card.Header>
                      <Heading
                        color='text-col1'
                        fontWeight='fw600'
                        className='fs-20 w-100 mb-0'
                        typeofHeading='h2'
                        text='Profile Details'
                      />
                    </Card.Header>
                    <Card.Body>
                      <div className="border-bottom-dashed pb-3 mb-4">
                        <Row>
                          <Col md={12} lg={5}>
                            <div className="border-right-dashed pe-md-4 mb-4 mb-lg-0">
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="User Name:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="Jonathan_D"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Email ID:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="jonathan@gmail.com"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Date of Birth:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="24 June, 1987"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Location:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="NewYork"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Interests:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="Gaming, Internet Surfing"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={12} lg={7}>
                            <div className="ps-lg-4">
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Occupation:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="Freelancer"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="TG Live Feed:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="ON"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Privacy:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="Display only age"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Status:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="Free Agent"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                              <div className="d-flex flex-column flex-sm-row mb-2">
                                <Text
                                  text="Home Page URL:"
                                  color="text-col5"
                                  className="fs-18 fw500"
                                />
                                <Text
                                  text="http://www.jonathan.com"
                                  color="text-col1"
                                  className="fs-18 fw500 ms-sm-2"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="mb-2 mb-md-5">
                        <Text
                          text="About"
                          color="text-col5"
                          className="fs-18 fw500 mb-1"
                        />
                        <Text
                          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
                          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
                          ipsum' will uncover many web sites still in their infancy."
                          color="text-col1"
                          className="fs-18 fw500"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="editprofile">
                <div className="edit-profile">
                  <Card>
                    <Card.Header>
                      <Heading
                        color='text-col1'
                        fontWeight='fw600'
                        className='fs-20 w-100 mb-0'
                        typeofHeading='h2'
                        text='Edit Profile'
                      />
                    </Card.Header>
                    <Card.Body>
                      <Text
                        text="Optional Information - All information will be viewable by other forum members."
                        color="text-col5"
                        className="fs-18 fw500 mb-3"
                      />
                      <Text
                        text="Date of Birth"
                        color="text-col2"
                        className="fs-16 fw600 mb-4"
                      />
                      <div className="edit-form">
                        <Form>
                          <Row>
                            <Col md={4}>
                              <div className='mb-4'>
                                <SelectComponent defaultOption="Jan" />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className='mb-4'>
                                <SelectComponent defaultOption="25" />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className='mb-4'>
                                <SelectComponent defaultOption="1996" />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className='mb-4'>
                                <SelectComponent defaultOption="Display Only Age" />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className='mb-4'>
                                <SelectComponent defaultOption="Arena" />
                              </div>
                            </Col>
                          </Row>
                          <div className="border-bottom-solid mb-4"></div>
                        </Form>
                      </div>
                      <div className="accordian-form">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0" className="mb-4">
                            <Accordion.Header>Additional Information</Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Col md={12}>
                                  <div className='mb-4'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                      <Form.Control as="textarea" placeholder="A few details about yourself" rows={6} />
                                    </Form.Group>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Interests"
                                      name="interest"
                                      required="true"
                                      type="text" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Interests"
                                      name="interest"
                                      required="true"
                                      type="text" />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6} lg={3}>      
                                  <div>
                                    <Text text="Twin Galaxies Live Feed"
                                      color="text-col5"
                                      className="fs-13 fw500 mb-2" />
                                    <div className="d-flex checkbox-types">
                                      <Checkbox label="ON" checked />
                                      <Checkbox label="OFF" />
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6} lg={3}>
                                  <div>
                                    <Text text="Show Full Name"
                                      color="text-col5"
                                      className="fs-13 fw500 mb-2" />
                                    <div className="d-flex checkbox-types">
                                      <Checkbox label="YES" checked />
                                      <Checkbox label="NO" />
                                    </div>
                                  </div>
                                </Col>
                                <Col md={12}>
                                  <Text text="Set the player to on or off"
                                    color="text-col2"
                                    className="fs-12 fw500 mt-2 mb-4" />
                                </Col>
                              </Row>
                              <Row>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <SelectComponent defaultOption="New York" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <SelectComponent defaultOption="Free Agent" />
                                  </div>
                                </Col>
                                <Col md={12}>
                                  <div className='mb-4'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                      <Form.Control as="textarea" placeholder="Gaming History and Achievements" rows={6} />
                                    </Form.Group>
                                  </div>
                                </Col>
                              </Row>
                              <div className="border-bottom-solid mb-4"></div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" className="mb-4">
                            <Accordion.Header>Social Media</Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Twitter"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your twitter profile https://twitter.com/username"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="My Website"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Examples : http://www.mywebsite.com"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Facebook"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your facebook profile https://www.facebook.com/username"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Reddit"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your reddit profile https://www.reddit.com/"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>

                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Instagram"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your instagram profile http://instagram.com/"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Skype"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter your Skype ID"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Twitch"
                                      name="interest"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your twitch profile https://www.twitch.tv/"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="LinkedIn"
                                      name="linkedin"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your linkedin profile https://www.linkedin.com/in/username"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Youtube"
                                      name="youtube"
                                      required="true"
                                      type="text" />

                                    <Text text="Enter 'username' from your youtube profile https://www.youtube.com/user/username"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Discord"
                                      name="discard"
                                      required="true"
                                      type="text" />
                                    <Text text="Enter 'channel id' from your discordapp profile https://discordapp.com/channels/@me/channel_id"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                              </Row>
                              <div className="border-bottom-solid mb-4"></div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Other Information</Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Col md={6}>
                                  <div className="mb-3 mb-md-0">
                                    <Text text="Add me to H1PL Qualifed list"
                                      color="text-col5"
                                      className="fs-14 fw500 mb-2" />
                                    <div className="d-flex checkbox-types">
                                      <CheckboxNew label="YES" />
                                    </div>
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <SelectComponent defaultOption="North America" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <SelectComponent defaultOption="H1PL Team" />
                                    <Text text="Select your H1PL Team"
                                      color="text-col2"
                                      className="fs-12 fw500 text-bottom" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Postal Code"
                                      name="postalcode"
                                      required="true"
                                      type="text" />
                                    <Text text="Changing this field requires re-verification"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Speedrun"
                                      name="speedrun"
                                      required="true"
                                      type="text" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Steam"
                                      name="postalcode"
                                      required="true"
                                      type="text" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Xbox"
                                      name="xbox"
                                      required="true"
                                      type="text" />
                                    <Text text="Put your Xbox live userid Or gamertag"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={6}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Exophase"
                                      name="expose"
                                      required="true"
                                      type="text" />
                                    <Text text="Put your exophase username"
                                      color="text-col2"
                                      className="fs-12 fw500 text-align" />
                                  </div>
                                </Col>
                                <Col md={12}>
                                  <div className='mb-4'>
                                    <InputComponent
                                      placeholder="Wall"
                                      name="wall"
                                      required="true"
                                      type="text" />
                                  </div>
                                </Col>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                      <Row className="mt-4">
                        <Col md={4} lg={4} sm={3} xs={12}>
                          <Buttons
                            text="Cancel"
                            variant="primary"
                            className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                          />
                        </Col>
                        <Col md={8} lg={8} sm={8} xs={12}>
                          <div className="text-start text-sm-end mt-3 mt-sm-0">
                            <Buttons
                              text="Save Changes"
                              variant="primary"
                              className="primary pad1 fs-14 fw600 me-4 me-sm-0"
                            />
                            <Buttons
                              text="Reset Fields"
                              variant="primary"
                              className="btn-primary btn-reset pad1 fs-14 fw600 ms-0 mt-3 mt-sm-0 ms-sm-3"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="editsignature">
                <Card>
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Edit Signature'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <div className='mb-4'>
                          <Text
                            text="Signature"
                            color="text-col5"
                            className="fs-14 fw500 mb-3"
                          />
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Messages" rows={6} />
                          </Form.Group>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3}>
                        <Buttons
                          text="Clear"
                          variant="primary"
                          className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                        />
                      </Col>
                      <Col sm={9}>
                        <div className="text-start mt-3 mt-sm-0 text-sm-end">
                          <Buttons
                            text="Save Signature"
                            variant="primary"
                            className="primary pad1 fs-14 me-3 mb-3 mb-sm-0 fw600"
                          />
                          <Buttons
                            text="Preview Signature"
                            variant="primary"
                            className="btn-primary btn-reset pad1 fs-14 fw600"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-3 mb-3">
                      <Text
                        text="Or"
                        color="text-col5"
                        className="fs-18 fw600"
                      />
                    </div>
                    <Row>
                      <Col md={12}>
                        <div className='mb-4'>
                          <Text
                            text="Option 1 - Enter the URL to the Image on Another Website"
                            color="text-col5"
                            className="fs-14 fw500 mb-2"
                          />
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Messages" rows={2} />
                          </Form.Group>
                          <Text
                            text="Note: The maximum size of your custom image is 500 by 100 pixels or 9.8 KB (whichever is smaller)."
                            color="text-col2"
                            className="fs-12 fw500 mb-2 text-align"
                          />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='mb-4'>
                          <Text
                            text="Option 2 - Upload Image From Your Computer"
                            color="text-col5"
                            className="fs-14 fw500 mb-2"
                          />
                          <UploadButton />
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col sm={3}>
                        <Buttons
                          text="Cancel"
                          variant="primary"
                          className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                        />
                      </Col>
                      <Col sm={9}>
                        <div className="text-start text-sm-end">
                          <Buttons
                            text="Save Changes"
                            variant="primary"
                            className="primary pad1 fs-14 fw600 me-3 mt-3 mb-3 mb-sm-0 mt-sm-0"
                          />
                          <Buttons
                            text="Reset Fields"
                            variant="primary"
                            className="btn-primary btn-reset pad1 fs-14 fw600 ms-0 ms-lg-3"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <Text
                          text="Signature Permissions"
                          color="text-col5"
                          className="fs-14 fw500 mb-2"
                        />
                        <div className="border-bottom-solid mb-3"></div>
                        <Chips />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="claimusername">
                <Card>
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Claim Username'
                    />
                  </Card.Header>
                  <Card.Body>
                    <ProfileModal />
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="emailpassword">
                <Card>
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Claim Username'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12} className="position-relative">
                        <div className="mb-4">
                          <InputComponent
                            type='password'
                            placeholder="Password"
                            name="password"
                            required="true"
                            className="paddingRight"
                          />
                          <Text
                            text="You must enter your current password if you wish to change your password or email address."
                            color="text-col2"
                            className="fs-12 fw500 mb-2 text-align"
                          />
                          <div className='showPass'>
                            <Image src={EyeSlace} className="img-fluid disabledImg" />
                            <Image src={EyeSvgrepo} className="img-fluid enableImg" />
                          </div>
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="d-flex mb-2">
                          <Text
                            text="Edit Password"
                            color="text-col5"
                            className="fs-16 fw600"
                          />
                          <Text
                            text="(Optional)"
                            color="text-col2"
                            className="fs-16 fw500 italic ms-1"
                          />
                        </div>
                      </Col>
                      <Col md={6} className="position-relative">
                        <div className="mb-4">
                          <InputComponent
                            type='password'
                            placeholder="New Password"
                            name="newpassword"
                            required="true"
                            className="paddingRight"
                          />
                          <ul className="w-100 listing-validtext m-0 p-0">
                            <li>
                              <span className="list-circle"></span>
                              <Text
                                text="Must be at least 8 characters"
                                color="text-col2"
                                className="fs-12 fw500 text-align"
                              />
                            </li>
                            <li>
                              <span className="list-circle"></span>
                              <Text
                                text="Must contain lower-case characters"
                                color="text-col2"
                                className="fs-12 fw500 text-align"
                              />
                            </li>
                            <li>
                              <span className="list-circle"></span>
                              <Text
                                text="Must contain upper-case characters"
                                color="text-col2"
                                className="fs-12 fw500 text-align"
                              />
                            </li>
                            <li>
                              <span className="list-circle"></span>
                              <Text
                                text="Must contain numbers"
                                color="text-col2"
                                className="fs-12 fw500 text-align"
                              />
                            </li>
                          </ul>
                          <div className='showPass'>
                            <Image src={EyeSlace} className="img-fluid disabledImg" />
                            <Image src={EyeSvgrepo} className="img-fluid enableImg" />
                          </div>
                        </div>
                      </Col>
                      <Col md={6} className="position-relative">
                        <div className="mb-4">
                          <InputComponent
                            type='password'
                            placeholder="Confirm New Password"
                            name="confirmpassword"
                            required="true"
                            className="paddingRight"
                          />
                          <Text
                            text="Enter a new password for your user account. Note that passwords are
                          case-sensitive"
                            color="text-col2"
                            className="fs-12 fw500 mb-2 text-align"
                          />
                          <div className='showPass'>
                            <Image src={EyeSlace} className="img-fluid disabledImg" />
                            <Image src={EyeSvgrepo} className="img-fluid enableImg" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <div className="d-flex mb-2">
                          <Text
                            text="Edit Email Address"
                            color="text-col5"
                            className="fs-16 fw600"
                          />
                          <Text
                            text="(Optional)"
                            color="text-col2"
                            className="fs-16 fw500 italic ms-1"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-4">
                          <InputComponent
                            type='email'
                            placeholder="New Email Address"
                            name="email"
                            required="true"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-4">
                          <InputComponent
                            type='email'
                            placeholder="Confirm New Email Address"
                            name="confirmemail"
                            required="true"
                          />
                          <Text
                            text="Enter your new email address here. You must be able to receive email
                            sent to this address."
                            color="text-col2"
                            className="fs-12 fw500 mb-2 text-align"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3}>
                        <Buttons
                          text="Cancel"
                          variant="primary"
                          className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                        />
                      </Col>
                      <Col sm={9}>
                        <div className="text-start mt-3 mt-sm-0 text-sm-end">
                          <Buttons
                            text="Save Changes"
                            variant="primary"
                            className="primary pad1 fs-14 me-3 mb-3 mb-sm-0 fw600"
                          />
                          <Buttons
                            text="Reset Fields"
                            variant="primary"
                            className="btn-primary btn-reset pad1 fs-14 fw600"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="editconnections">
                <Card>
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Edit Connections'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Text
                      text="The Facebook Platform"
                      color="text-col5"
                      className="fs-18 fw600 mb-3"
                    />
                    <div className="border-bottom-platform mb-3"></div>
                    <Text
                      text="Get Connected with Facebook"
                      color="text-col5"
                      className="fs-16 fw600 mb-3"
                    />
                    <div>
                      <Image src={FacebookIcon} name="Icon" className="img-fluid pointer" />
                    </div>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="editignorelist">
                <Card className="mb-4">
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Ignore List'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <div className="mb-3 mb-md-0">
                          <Text text="Add me to H1PL Qualifed list"
                            color="text-col5"
                            className="fs-14 fw500 mb-2" />
                          <div className="d-flex checkbox-types mb-3">
                            <CheckboxNew label="Check / Uncheck All" />
                          </div>
                        </div>
                        <div className="user-list">
                          <div className="user-info d-flex">
                            <div className="user-post d-flex align-items-center">
                              <div className="d-flex checkbox-types align-items-center">
                                <CheckboxNew />
                                <div className="user-box">
                                  <Image src={UserPostOne} name="user post" className="img-fluid" />
                                </div>
                              </div>
                              <div className="ms-3">  
                                <Heading
                                  color='text-col1'
                                  fontWeight='fw600'
                                  className='fs-18 text-black w-100 mb-0'
                                  typeofHeading='h2'
                                  text='Datalog'
                                />
                                <Text text="Friend"
                                  color="text-col2"
                                  className="fs-14 fw600" />
                              </div>
                            </div>
                          </div>
                          <div className="user-info d-flex">
                            <div className="user-post d-flex align-items-center">
                              <div className="d-flex checkbox-types align-items-center">
                                <CheckboxNew />
                                <div className="user-box">
                                  <Image src={UserPostOne} name="user post" className="img-fluid" />
                                </div>
                              </div>
                              <div className="ms-3">
                                <Heading
                                  color='text-col1'
                                  fontWeight='fw600'
                                  className='fs-18 text-black w-100 mb-0'
                                  typeofHeading='h2'
                                  text='Megan Ruth'
                                />
                                <Text text="Friend"
                                  color="text-col2"
                                  className="fs-14 fw600" />
                              </div>
                            </div>
                          </div>
                          <div className="user-info d-flex">
                            <div className="user-post d-flex align-items-center">
                              <div className="d-flex checkbox-types align-items-center">
                                <CheckboxNew />
                                <div className="user-box">
                                  <Image src={UserPostTwo} name="user post" className="img-fluid" />
                                </div>
                              </div>
                              <div className="ms-3">
                                <Heading
                                  color='text-col1'
                                  fontWeight='fw600'
                                  className='fs-18 text-black w-100 mb-0'
                                  typeofHeading='h2'
                                  text='Jenny  D’souza'
                                />
                                <Text text="Friend"
                                  color="text-col2"
                                  className="fs-14 fw600" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col xs={6}>
                        <Buttons
                          text="Cancel"
                          variant="primary"
                          className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                        />
                      </Col>
                      <Col xs={6} className="text-end">
                        <Buttons
                          text="Save Changes"
                          variant="primary"
                          className="primary pad1 fs-14 mb-0 mb-sm-0 fw600"
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
                        <Text text="Add a Memeber to your list"
                          color="text-col1"
                          className="fs-20 fw600 mb-3" />
                        <div className="mb-4">
                          <InputComponent
                            type="text"
                            name="username"
                            placeholder="User Name"
                          />
                        </div>
                        <div className="mt-4 pt-3 d-flex align-items-center justify-content-between">
                          <Buttons
                            text="Cancel"
                            variant="primary"
                            className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                          />
                          <Buttons
                            text="Add"
                            variant="primary"
                            className="primary pad1 fs-14 me-3 mb-0 mb-sm-0 fw600"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="reverify">
                <Card className="mb-4">
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Private and Confidential'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Text
                      text="Welocome to the Twin Galaxies user verification process!"
                      color="text-col5"
                      className="fs-18 fw600 mb-2"
                    />
                    <Text
                      text="Twin Galaxies’ mandate is to provide a consistent, data-driven, bankable foundation that professional leagues, team organizations, sponsors, media, communities and competitors can reference and trust."
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="This foundation is focused on recognizing electronic gaming competitor achievement and is the ongoing basis of direct economic and promotional opportunities for video game players and eSports competitors.andate is to provide a consistent, data-driven, bankable foundation that professional leagues, team organizations, sponsors,media, communities and competitors can reference and trust."
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="Once you are VERIFIED here are just some of the things you will be able to do:"
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="Becoming “VERIFIED” means you have proven that you are non-anonymous and are personally accountable for your score performances. Your information will be kept private."
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="Twin Galaxies does not charge any fees to become VERIFIED."
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="Non-verified users have limited access to the site and cannot submit or adjudicate scores."
                      color="text-col5"
                      className="fs-16 fw500 mb-2"
                    />
                    <Text
                      text="To become VERIFIED, please enter the information in the fields below. All information is required and it must be current and accurate.If at any time your identification information becomes invalid, you will lose verified status."
                      color="text-col5"
                      className="fs-16 fw500 mb-4"
                    />
                    <div className="verify-box">
                      <Text
                        text="If you already have a record stored in the Twin Galaxies database, and you wish to claim and assign that record to your Twin Galaxies user account, make sure that your FULL NAME exactly matches your name in the record database."
                        color="text-col5"
                        className="fs-18 fw500"
                      />
                    </div>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-4'
                      typeofHeading='h2'
                      text='Re-Verify'
                    />
                    <Row>
                      <Col md={12}>
                        <div className="mb-4">
                          <InputComponent
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='mb-4'>
                          <SelectComponent defaultOption="India" />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='mb-4'>
                          <SelectComponent defaultOption="MP" />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='mb-4'>
                          <SelectComponent defaultOption="Indore" />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className='mb-4'>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Street Address" rows={6} />
                          </Form.Group>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-4">
                          <InputComponent
                            type="text"
                            name="fullname"
                            placeholder="Postal Code"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="d-flex mb-4">
                          <div className="min72">
                            <SelectComponent defaultOption="91" />
                          </div>
                          <div className="ms-3 w-100">
                            <InputComponent
                              type="text"
                              name="fullname"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Buttons
                          text="Cancel"
                          variant="primary"
                          className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                        />
                      </Col>  
                      <Col xs={6}>
                        <div className="text-end">
                          <ConfirmModal />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section >
  );
};

export default memo(VerticalTab);

