import "./friend.scss";
import { Card, Row, Col } from "react-bootstrap";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import UserPostOne from '../../assets/images/user-post.svg';
import UserPostTwo from '../../assets/images/user-post-two.svg'; 
import UserPostThree from '../../assets/images/user-post-three.svg'; 
import SearchComponent from "../Search/Search";



const FriendsList = (props) => {
  return (
    <div className="friend-list">
      <Card>
        <Card.Body>
          <div className="mb-3 mb-md-0">
            <Text text="My Friends (07)"
              color="text-col1"
              className="fs-20 fw600 mb-2" />
            <div className="d-flex checkbox-types mb-3">
            </div>
          </div>
          <Row>
            <Col md={6}>
              <SearchComponent text="text" name="search" placeholder="Find People" />
            </Col>
          </Row>
          <div className="user-list">
            <div className="user-info"> 
              <Row className="align-items-center">   
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <div className="user-box">
                        <Image src={UserPostOne} name="user post" className="img-fluid" />
                      </div>
                      <span className="status online"></span>  
                    </div>  
                    <div className="ms-3">  
                      <Heading
                        color='text-col1'
                        fontWeight='fw600'
                        className='fs-18 text-black w-100 mb-0'
                        typeofHeading='h2'
                        text='Raghav Moan'
                      />
                      <Text text="Request Sent" 
                        color="text-col2"
                        className="fs-14 fw600" />
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="text-start text-sm-end mt-3 mt-sm-0">    
                    <span className="text-col4 fs-16 remove fw600">Remove</span>  
                    <span className="ms-3 status-default pending">Pending</span> 
                    {/* <span className="ms-3 status-default accept">Accept</span> 
                    <span className="ms-3 status-default follow">Follow</span> 
                    <span className="ms-3 status-default unfollow">Unfollow</span>    */}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="user-info">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <div className="user-box">
                        <Image src={UserPostTwo} name="user post" className="img-fluid" />
                      </div>
                      <span className="status yellow"></span>   
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
                </Col>
                <Col sm={6}>
                  <div className="text-start text-sm-end mt-3 mt-sm-0">    
                    <Text text="Remove"
                      color="text-col4"
                      className="fs-16 fw600" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="user-info">
              <Row className="align-items-center">  
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <div className="user-box">   
                        <Image src={UserPostThree} name="user post" className="img-fluid" />
                      </div>
                      <span className="status offline"></span>  
                    </div>
                    <div className="ms-3">
                      <Heading
                        color='text-col1'
                        fontWeight='fw600'
                        className='fs-18 text-black w-100 mb-0'
                        typeofHeading='h2'
                        text='Ginni Vanesa'
                      />
                      <Text text="Friend"  
                        color="text-col2"
                        className="fs-14 fw600" />
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="text-start text-sm-end mt-3 mt-sm-0">    
                    <Text text="Remove"
                      color="text-col4"
                      className="fs-16 fw600" />
                  </div>
                </Col>  
              </Row>
            </div>  
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


export default FriendsList; 
