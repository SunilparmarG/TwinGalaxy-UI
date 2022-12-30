import { Card, Row, Col } from "react-bootstrap";

import Image from "../../image/Image";
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import Games from '../../../assets/images/games.svg';
import CheckboxNew from "../../checkbox/CheckboxNew";
import RadioBox from "../../checkbox/Checkbox";
import SelectComponent from "../../Input/SelectFloat";
import './settings.scss';

// images and icons


const GenaralSettings = (props) => {
    return (
        <div className="general-settings px-4">
            <Heading
                color='text-col13'
                fontWeight='fw600'
                className='fs-18 w-100 mb-2'
                typeofHeading='h2'
                text='Messaging & Notification'
            />
            <Row>
                <Col md={12}>
                    <Text text="Receive Email"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={4}>
                            <div className="d-flex checkbox-types mb-2">
                                <CheckboxNew label="Receive Email from Administrators" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="d-flex checkbox-types mb-2">
                                <CheckboxNew label="Receive Friendship Request Email" />
                            </div>
                        </Col>
                    </Row>
                    <Text text="From time to time, the administrators and/or other members may want to send you email notifications or messages. If you do not want to receive email from certain people then you may disable the options here"
                        color="text-col2"
                        className="fs-12 fw500 mb-3" />
                </Col>
                <Col md={12}>
                    <Text text="Default Thread Subscription Mode"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Daily, using email" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="When you post a new thread, or reply to a topic, you can choose to automatically add that thread to your list of"
                                color="text-col2"
                                className="fs-12 fw500" />
                            <Text text="subscribed threads"
                                color="text-col4"
                                className="fs-12 fw500 mx-1" />
                            <Text text=", with the option to receive email notification of new replies to that thread."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Heading
                        color='text-col13'
                        fontWeight='fw600'
                        className='fs-18 w-100 mb-2'
                        typeofHeading='h2'
                        text='Private Messaging'
                    />
                    <Text text="Private Messaging"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={4} lg={3}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Private Messaging on" checked />
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Private Messaging off" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-wrap mb-1">
                        <Text text="This forum features a"
                            color="text-col2"
                            className="fs-12 fw500" />
                        <Text text="private messaging system"
                            color="text-col4"
                            className="fs-12 fw500 mx-1" />
                        <Text text=", which allows members to send messages to one another privately"
                            color="text-col2"
                            className="fs-12 fw500" />
                    </div>
                    <Text text="If you do not want to send or receive private messages, you may disable the private messaging system"
                        color="text-col2"
                        className="fs-12 fw500 mb-3" />
                    <Text text="Receive Private Messaging"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={5} lg={4}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Only from Contacts and Moderators" />
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="From all members" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-wrap mb-3">
                        <Text text="You may limit the receipt of private messages to just moderators and your"
                            color="text-col2"
                            className="fs-12 fw500" />
                        <Text text="contacts"
                            color="text-col4"
                            className="fs-12 fw500 mx-1" />
                        <Text text=". Other members who attempt to send messages to you will be told that you have disabled private messaging."
                            color="text-col2"
                            className="fs-12 fw500" />
                    </div>
                    <Text text="Email Notification of New Private Messages"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={6} lg={5}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Receive Email Notification of new Private Messages" />
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Don't receive Email Notification of new Private 
Messages" />
                            </div>
                        </Col>
                    </Row>
                    <Text text="The forum can send a message to your email address to inform you when someone sends you a private message."
                        color="text-col2"
                        className="fs-12 fw500 mb-3" />
                    <Text text="New Private Message Notification Pop-up"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={6} lg={5}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Show New Private Message Notification Pop-up" />
                            </div>
                        </Col>
                        <Col md={6} lg={5}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Don't show New Private Message Notification Pop-up" />
                            </div>
                        </Col>
                    </Row>
                    <Text text="If you are browsing the forums when you receive a new private message, the system can pop-up a notification box informing you of the new message."
                        color="text-col2"
                        className="fs-12 fw500 mb-3" />
                    <Text text="Sent Private Messages"  
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Save a copy of sent messages in my Sent Items folder by default" />
                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Don't save a copy of sent messages" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};


export default GenaralSettings; 
