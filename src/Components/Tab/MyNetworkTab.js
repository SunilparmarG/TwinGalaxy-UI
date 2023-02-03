import React, { memo } from "react";
import { Card, Tab, Row, Col, Nav, Form, Accordion } from "react-bootstrap";

// components 
import Heading from "../heading/Heading";
import InputComponent from "../Input/InputFloat";
import Buttons from "../Buttons/Button"; 
import UploadButton from "../UploadButton/UploadButton";
import Chips from "../Chips/ChipsComponent";
import ProfileModal from "../Modal/ProfileModal";
import ConfirmModal from "../Modal/ConfirmModal";
import Image from "../image/Image";
import FriendsList from "../friendsList/friendslist"; 
import Games from "../friendsList/Games";

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
      <Tab.Container id="left-tabs-example" defaultActiveKey="myfriends">
        <Row>
          <Col md={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="myfriends">My Friends</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="friendsrequest">Friend Requests</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="following">Following</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="followers">Followers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="games">Games</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content>
              <Tab.Pane eventKey="myfriends">
                <Card className="mb-4">
                  <Card.Header>
                    <Heading
                      color='text-col1'
                      fontWeight='fw600'
                      className='fs-20 w-100 mb-0'
                      typeofHeading='h2'
                      text='Add a Friend'
                    />
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={12}>
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
                            text="Add Friend"
                            variant="primary"
                            className="primary pad1 fs-14 me-3 mb-0 mb-sm-0 fw600"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <FriendsList />
              </Tab.Pane>
              <Tab.Pane eventKey="friendsrequest">    
                <FriendsList />
              </Tab.Pane>
              <Tab.Pane eventKey="following">    
                <FriendsList />
              </Tab.Pane>
              <Tab.Pane eventKey="followers">    
                <FriendsList />
              </Tab.Pane>
              <Tab.Pane eventKey="games">    
                <Games />  
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section >
  );
};

export default memo(VerticalTab); 

