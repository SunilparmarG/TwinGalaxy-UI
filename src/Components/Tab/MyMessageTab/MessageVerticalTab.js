import React, { memo } from "react";
import { Card, Tab, Form, Row, Col, Nav, Container } from "react-bootstrap";

// components 
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import Image from "../../image/Image";
import { NavLink } from 'react-router-dom';
import SearchComponent from "../../Search/Search";
import ChipsComponent from "../../Chips/ChipsComponent";
import FolderComponent from "./FolderComponent";
import InputComponent from "../../Input/InputFloat";
import Buttons from "../../Buttons/Button";
import CheckboxNew from "../../checkbox/CheckboxNew";

// images and scss
import BackArrow from '../../../assets/images/svg/backArrow.svg';
import AddIcons from '../../../assets/images/svg/PlusCircle.svg';
import RightArrow from '../../../assets/images/svg/right-arrow.svg';
import TraceIcons from '../../../assets/images/svg/Trash.svg';
import SentIcons from '../../../assets/images/svg/sent-icon.svg';
import NoData from '../../../assets/images/no-data.png';
import "../tab.scss";

const MessageVerticalTab = ({ className, ...rest }) => {
    // const 
    return (
        <section className="wrapper vertical-tab" aria-label="Vertical Tab Section">
            <Container>
                <div className='backBtn mt-3 mb-3'>
                    <NavLink className="fs-25 p-0  d-flex align-items-center">
                        <Image src={BackArrow} className="img-fluid" />
                        <span className='text-col2 ms-2 fw500'>Back</span></NavLink>
                </div>
                <div className="mt-36 mb-lg-5 pb-lg-5 mb-3">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="inbox">
                        <Row>
                            <Col md={3}>
                                <div className="vertical-tabstyle">
                                    <div className="d-flex align-items-center">
                                        <Image src={AddIcons} name="inbox add icon" className="img-fluid pointer" />
                                        <Heading
                                            color='text-col4'
                                            fontWeight='fw600'
                                            className='fs-18 w-100 ms-2 mb-0'
                                            typeofHeading='h2'
                                            text='New Message'
                                        />
                                    </div>
                                    <div className="border-bottom mt-3 mb-3"></div>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="inbox">Inbox(10)</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sentitems">Sent Items (05)</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="trackmessage">Track Messages</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="editfolder">Edit Folders</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Col>
                            <Col md={9}>
                                <Tab.Content className="inbox-tabcontent">
                                    <Tab.Pane eventKey="inbox">
                                        <div className="inbox-items">
                                            <Card>
                                                <Card.Body>
                                                    <Heading
                                                        color='text-col1'
                                                        fontWeight='fw600'
                                                        className='fs-20 w-100 mb-3'
                                                        typeofHeading='h3'
                                                        text='Inbox'
                                                    />
                                                    <FolderComponent />
                                                    <Row>
                                                        <Col md={8}>
                                                            <SearchComponent placeholder="Search Sender, Title etc.." />
                                                        </Col>
                                                    </Row>
                                                    <div className="mb-3"></div>
                                                    {/* <Row>
                                                        <Col lg={2} md={4}>
                                                            <SelectComponent />
                                                        </Col>
                                                    </Row> */}
                                                    <Text
                                                        text="Signature Permissions"
                                                        color="text-col5"
                                                        className="fs-18 fw600 mb-2"
                                                    />
                                                    <div className="border-bottom-solid-two mb-3"></div>
                                                    <ChipsComponent />
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sentitems">
                                        <Card className="d-none">
                                            <Card.Body>
                                                <Heading
                                                    color='text-col1'
                                                    fontWeight='fw600'
                                                    className='fs-20 w-100 mb-3'
                                                    typeofHeading='h3'
                                                    text='Inbox'
                                                />
                                                <FolderComponent />
                                                <Row>
                                                    <Col md={8}>
                                                        <SearchComponent placeholder="Search Sender, Title etc.." />
                                                    </Col>
                                                </Row>
                                                <div className="mb-3"></div>
                                                <Text
                                                    text="Signature Permissions"
                                                    color="text-col5"
                                                    className="fs-18 fw600 mb-2"
                                                />
                                                <div className="border-bottom-solid-two mb-3"></div>
                                                <ChipsComponent />
                                            </Card.Body>
                                        </Card>
                                        <Card className="mb-3">
                                            <Card.Body className="pb-2">
                                                <div className="msg-box">
                                                    <Text
                                                        text="To: Rocky Daun"
                                                        color="text-col1"
                                                        className="fs-16 fw600"
                                                    />
                                                    <div className="text-end">
                                                        <Text
                                                            text="10:30 AM"
                                                            color="text-col2"
                                                            className="fs-14 fw500"
                                                        />
                                                    </div>
                                                    <Text
                                                        text="It is a long established fact that a reader will be distracted by the readable content of a page whenlooking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                                        color="text-col5"
                                                        className="fs-15 fw500"
                                                    />
                                                    <div className="border-bottom mt-3 mb-2"></div>
                                                    <div className="d-flex justify-content-end">
                                                        <Image src={RightArrow} name="Icon" className="img-fluid pointer" />
                                                        <Image src={TraceIcons} name="Icon" className="img-fluid pointer ms-3" />
                                                        <Image src={SentIcons} name="Icon" className="img-fluid pointer ms-3" />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card.Body>
                                                <div className="quick-reply">
                                                    <Text
                                                        text="Quick Reply"
                                                        color="text-col1"
                                                        className="fs-20 fw600"
                                                    />
                                                    <div className="text-end mb-1">
                                                        <Text
                                                            text="BCC Recipient"
                                                            color="text-col4"
                                                            className="fs-14 fw500 text-decor"
                                                        />
                                                    </div>
                                                    <Row>
                                                        <Col md={12}>
                                                            <div className="mb-4">
                                                                <InputComponent
                                                                    type='text'
                                                                    placeholder="Recipient Users"
                                                                    name="users"
                                                                    required="true"
                                                                />
                                                                <Text
                                                                    text="Separate multiple user names with a semi-colon ';'"
                                                                    color="text-col2"
                                                                    className="fs-12 fw500 mb-2 text-align"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="mb-4">
                                                                <InputComponent
                                                                    type='text'
                                                                    placeholder="Title"
                                                                    name="title"
                                                                    required="true"
                                                                />
                                                            </div>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className='mb-4'>
                                                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                    <Form.Control as="textarea" placeholder="Messsage" rows={5} />
                                                                </Form.Group>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Text
                                                        text="Additional Options"
                                                        color="text-col5"
                                                        className="fs-18 fw600 mb-2"
                                                    />
                                                    <div className="border-bottom-solid-two mb-3"></div>
                                                    <ChipsComponent />
                                                    <div className="mb-3"></div>
                                                    <Row>
                                                        <Col md={12}>
                                                            <Text text="Miscellaneous Options"
                                                                color="text-col5"
                                                                className="fs-15 fw500 mb-2" />
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mb-4">
                                                                <div className="d-flex checkbox-types mb-0">
                                                                    <CheckboxNew label="Request a read receipt for this message" />
                                                                </div>
                                                                <Text text="Allows you to see when the message is read by its recipients."
                                                                    color="text-col2"
                                                                    className="fs-12 fw500 margin-left-space" />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mb-4">
                                                                <div className="d-flex checkbox-types mb-0">
                                                                    <CheckboxNew label="Save a copy of this message in your Sent Items folder." />
                                                                </div>
                                                                <Text text="Stores a copy of the message you send in the 'Sent Items' folder."
                                                                    color="text-col2"
                                                                    className="fs-12 fw500 margin-left-space" />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mb-4">
                                                                <div className="d-flex checkbox-types mb-0">
                                                                    <CheckboxNew label="Automatically parse links in text" />
                                                                </div>
                                                                <Text text="Will turn www.example.com into [URL]http://www.example.com[/URL]."
                                                                    color="text-col2"
                                                                    className="fs-12 fw500 margin-left-space" />
                                                            </div>
                                                        </Col>
                                                        <Col md={6}>
                                                            <div className="mb-4">
                                                                <div className="d-flex checkbox-types mb-0">
                                                                    <CheckboxNew label="Disable smilies in text" />
                                                                </div>
                                                                <Text text="If selected, :) will not be replaced with"
                                                                    color="text-col2"
                                                                    className="fs-12 fw500 margin-left-space" />
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
                                                                    text="Send Message"
                                                                    variant="primary"
                                                                    className="primary pad1 fs-14 me-3 mb-3 mb-sm-0 fw600"
                                                                />
                                                                <Buttons
                                                                    text="Preview Message"
                                                                    variant="primary"
                                                                    className="btn-primary btn-reset pad1 fs-14 fw600"
                                                                />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="trackmessage">
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col md={12}>
                                                        <Text text="Message Tracking"
                                                            color="text-col1"
                                                            className="fs-20 fw600" />
                                                        <div className="d-flex pt-5 pb-5 flex-column align-items-center justify-content-center">
                                                            <Image src={NoData} name="No Data" className="img-fluid mb-4" />
                                                            <Text text="You are currently not tracking any messages"
                                                                color="text-col2"
                                                                className="fs-25 fw600 text-center" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="editfolder">
                                        <Card>
                                            <Card.Body>
                                                <Text text="Standard Folders"
                                                    color="text-col1"
                                                    className="fs-20 fw600 mb-3" />
                                                <div className="border-bottom editfolder-list pb-3 mb-3">
                                                    <Row className="align-items-center">
                                                        <Col sm={6}>
                                                            <Text text="Inbox"
                                                                color="text-block"
                                                                className="fs-18 fw600 mb-0" />
                                                            <Text text="Messages: 10"
                                                                color="text-col2"
                                                                className="fs-14 fw600" />
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="d-flex ms-auto justify-content-end">
                                                                <Text text="Empty Folder"
                                                                    className="fs-16 fw600 status-empty ms-4" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="border-bottom editfolder-list pb-3 mb-3">
                                                    <Row className="align-items-center">
                                                        <Col sm={6}>
                                                            <Text text="Sent Items"
                                                                color="text-block"
                                                                className="fs-18 fw600 mb-0" />
                                                            <Text text="Messages: 05"
                                                                color="text-col2"
                                                                className="fs-14 fw600" />
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="d-flex ms-auto justify-content-end">
                                                                <Text text="Empty Folder"
                                                                    className="fs-16 fw600 status-empty ms-4" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="border-bottom editfolder-list pb-3 mb-3">
                                                    <Row className="align-items-center">
                                                        <Col sm={6}>
                                                            <Text text="My Folder"
                                                                color="text-block"
                                                                className="fs-18 fw600 mb-0" />
                                                            <Text text="Created on 2nd July 2022"
                                                                color="text-col2"
                                                                className="fs-14 fw600" />
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="d-flex ms-auto justify-content-end">
                                                                <Text text="Edit Folder"
                                                                    className="fs-16 fw600 status-edit ms-4" />
                                                                <Text text="Empty Folder"
                                                                    className="fs-16 fw600 status-remove ms-4" />
                                                                <Text text="Remove"
                                                                    className="fs-16 fw600 status-empty ms-4" />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Text text="Your Custom Folders"
                                                    color="text-col1"
                                                    className="fs-18 fw600 mb-3" />
                                                <Row>
                                                    <Col md={12}>
                                                        <div className='mb-4'>
                                                            <Text text="Empty Folder"
                                                                color="text-col5"     
                                                                className="fs-15 fw500 mb-1" /> 
                                                            <InputComponent
                                                                placeholder="Interests"
                                                                name="interest"
                                                                required="true"
                                                                type="text" />
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
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </section >
    );
};

export default memo(MessageVerticalTab);

