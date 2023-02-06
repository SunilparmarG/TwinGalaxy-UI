import { Container, Row, Col, Card, NavLink } from "react-bootstrap";

import Image from "../../Components/image/Image";
import Text from "../../Components/text/Text";
import Heading from "../../Components/heading/Heading";
import Buttons from "../../Components/Buttons/Button";
import UserPostOne from '../../assets/images/user-post.svg';
import UserPostTwo from '../../assets/images/user-post-two.svg';
import UserPostThree from '../../assets/images/user-post-three.svg';
import SearchComponent from "../../Components/Search/Search";
import Input from "../../Components/Input/Input";
import SelectFloat from "../../Components/Input/SelectFloat";

// images and icons 
import BackArrow from '../../assets/images/svg/backArrow.svg';

const ViewleaderBoard = (props) => {
    return (
        <div className="view-board pt-4 pb-4">
            <Container>
                <div className='backBtn mb-3'>
                    <NavLink className="fs-25 p-0  d-flex align-items-center">
                        <Image src={BackArrow} className="img-fluid" />
                        <span className='text-col2 fs-25 ms-2 fw500'>Back</span></NavLink>
                </div>
                <Row className="d-flex align-items-center justify-content-between mb-4">
                    <Col md={3}>
                        <Heading
                            color='text-col1'
                            fontWeight='fw600'
                            className='fs-25 w-100 mb-0'
                            typeofHeading='h1'
                            text='Leaderboard'
                        />
                    </Col>
                    <Col md={9}>
                        <div className="text-start mt-3 mt-sm-0 text-sm-end">
                            <Buttons
                                text="View Proposed Leaderboards"
                                variant="primary"
                                className="primary pad1 fs-14 me-3 mb-3 mb-sm-0 fw600"
                            />
                            <Buttons
                                text="Create Leaderboard"
                                variant="primary"
                                className="btn-primary btn-reset pad1 fs-14 fw600"
                            />
                        </div>
                    </Col>
                </Row>
                <Card>
                    <Card.Body>
                        <Row className="mt-3">
                            <Col md={4}>
                                <SearchComponent text="text" name="search" placeholder="Find People" />
                            </Col>
                            <Col md={7} className="ms-auto">
                                <div className="view-board-input">
                                    <Row>
                                        <Col md={4}>
                                            <Input placeholder="Platform" />
                                        </Col>
                                        <Col md={4}>
                                            <Input placeholder="Game" />
                                        </Col>
                                        <Col md={4}>
                                            <Input placeholder="Player" />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <div className="border-bottom-lightgray mt-0 mb-4"></div>
                        <Row>
                            <Col md={6}></Col> 
                            <Col md={3}>
                                <SelectFloat defaultOption="Sort By Record Count" />
                            </Col>
                            <Col md={3}>
                                <SelectFloat defaultOption="Order By DESC" />  
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
            </Container>
        </div>
    );
};


export default ViewleaderBoard; 
