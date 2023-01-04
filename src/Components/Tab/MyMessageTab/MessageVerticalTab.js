import React, { memo } from "react";
import { Card, Tab, Row, Col, Nav, Form, Accordion, Container } from "react-bootstrap";

// components 
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import SelectComponent from "../../Input/SelectFloat";
import InputComponent from "../../Input/InputFloat";
import Checkbox from "../../checkbox/Checkbox";
import Buttons from "../../Buttons/Button";
import UploadButton from "../../UploadButton/UploadButton";
import Chips from "../../Chips/ChipsComponent";
import CheckboxNew from "../../checkbox/CheckboxNew";
import ProfileModal from "../../Modal/ProfileModal";
import ConfirmModal from "../../Modal/ConfirmModal";
import Image from "../../image/Image";
import { NavLink } from 'react-router-dom';

// images and scss
import BackArrow from '../../../assets/images/svg/backArrow.svg';
import AddIcons from '../../../assets/images/svg/PlusCircle.svg';
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
                                <Tab.Content>
                                    <Tab.Pane eventKey="inbox">
                                        <div className="inbox-items">
                                            <Card>
                                                <Card.Body>
                                                    <Heading
                                                        color='text-col1'
                                                        fontWeight='fw600'
                                                        className='fs-20 w-100 mb-4'
                                                        typeofHeading='h3'
                                                        text='Inbox'
                                                    />
                                                    {/* <Text
                                                        text="About"
                                                        color="text-col5"
                                                        className="fs-18 fw500 mb-1"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sentitems">
                                        <h2>Sent Items (05)</h2>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="trackmessage">
                                        <h2>Track Messages</h2>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="editfolder">
                                        <h2>Edit Folders</h2>
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

