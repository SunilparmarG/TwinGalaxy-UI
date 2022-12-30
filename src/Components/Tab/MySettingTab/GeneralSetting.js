import { Card, Row, Col } from "react-bootstrap";

import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import CheckboxNew from "../../checkbox/CheckboxNew";
import RadioBox from "../../checkbox/Checkbox";
import SelectComponent from "../../Input/SelectFloat";
import Buttons from "../../Buttons/Button";

// images scss and icons  
import './settings.scss';  

const GenaralSettings = (props) => {
    return (
        <div className="settings-tab px-md-4"> 
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
                    <Text text="When sending private messages the forum can make a copy of the message in your Sent Items folder."
                        color="text-col2"
                        className="fs-12 fw500 mb-3" />
                    <Heading
                        color='text-col13'
                        fontWeight='fw600'
                        className='fs-18 w-100 mb-2'
                        typeofHeading='h2'
                        text='Visitor Messaging'
                    />
                    <Text text="Visiting Messaging"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={4} lg={3}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Visitor Messaging on" />
                            </div>
                        </Col>
                        <Col md={4} lg={3}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Visitor Messaging off" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-wrap mb-3">
                        <Text text="This forum features a"
                            color="text-col2"
                            className="fs-12 fw500" />
                        <Text text="visitor messaging system"
                            color="text-col4"
                            className="fs-12 fw500 mx-1" />
                        <Text text="that allows members to send messages to one another publicly. If you do not want to receive visito messages, you may disable the visitor messaging system."
                            color="text-col2"
                            className="fs-12 fw500" />
                    </div>

                    <Text text="Visiting Messages Limit"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={6} lg={6}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Limit usage of Visitor Messages to Contacts and Moderators" />
                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <div className="d-flex checkbox-types mb-2">
                                <RadioBox label="Don't limit usage of Visitor Messages" />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex flex-wrap mb-3">
                        <Text text="You may limit the usage of your visitor messages to just moderators and your"
                            color="text-col2"
                            className="fs-12 fw500" />
                        <Text text="contacts"
                            color="text-col4"
                            className="fs-12 fw500 ms-1" />
                    </div>
                    <Heading
                        color='text-col13'
                        fontWeight='fw600'
                        className='fs-18 w-100 mb-2'
                        typeofHeading='h2'
                        text='Thread Display Options'
                    />
                    <Text text="Visible Post Elements"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <Row>
                        <Col md={2}>
                            <div className="mb-3 mb-md-0">
                                <div className="d-flex checkbox-types">
                                    <CheckboxNew label="Show Signatures" />
                                </div>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className="d-flex checkbox-types mb-2">
                                <CheckboxNew label="Show Avatars" />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="d-flex checkbox-types mb-2">
                                <CheckboxNew label="Show Images (including attached images and images in [IMG] code)" />
                            </div>
                        </Col>
                    </Row>
                    <Text text="You have the option to show or hide various elements of messages, which may be of use to users on slow internet connections, or who want to remove extraneous clutter from posts."
                        color="text-col2"
                        className="fs-12 fw500 mb-4" />
                </Col>
                <Col md={12}>
                    <Text text="Thread Display Mode"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Threaded" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="Here you can choose the display mode for threads. For a full explanation of the modes, please view "
                                color="text-col2"
                                className="fs-12 fw500" />
                            <Text text="this help page."
                                color="text-col4"
                                className="fs-12 fw500 ms-1" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="Number of Posts to Show Per Page"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Use Forum Default" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="Use this option to set the number of posts to show in a thread before splitting the display into multiple pages."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="Default Thread Age Cut Off"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Use Forum Default" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="You may specify a time period from which to display threads. Threads older than the age you specify will not be shown."
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
                        text='Date & Time Options'
                    />
                    <Text text="Time Zone"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="(GMT - 9:00) Alaska" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="All timestamps displayed on the forums can be automatically corrected to show the correct time for your location in the world. Simply select the appropriate time zone from the list below."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="DST Correction Option"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="DST corrections always off" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="In addition, you may set the appropriate option to allow for daylight savings time in your part of the world."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="Start of the Week"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Sunday" />
                        <div className="d-flex flex-wrap mt-1 mb-3">
                            <Text text="Different parts of the world traditionally use a different day as the start of the week. Select the appropriate day for your region here, in order to have the calendar appear correctly."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4} lg={4} sm={3} xs={12}>
                    <Buttons
                        text="Cancel"
                        variant="primary"
                        className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                    />
                </Col>
                <Col md={8} lg={8} sm={8} xs={12} className="ms-auto"> 
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
        </div>
    );
};


export default GenaralSettings; 
