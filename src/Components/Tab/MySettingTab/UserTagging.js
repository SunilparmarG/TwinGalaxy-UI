import { Card, Row, Col } from "react-bootstrap";  
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import CheckboxNew from "../../checkbox/CheckboxNew";
import SelectComponent from "../../Input/SelectFloat";
import Buttons from "../../Buttons/Button";

// images scss and icons  
import './settings.scss'; 

const UserTagging = (props) => { 
    return (
        <div className="settings-tab px-md-4"> 
            <Row>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Mention Restriction"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Enable Mention Restriction" />
                        </div>
                        <Text text="Check this box if you only want to be alerted of Mentions from users on your friends list."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Tag Restriction"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Enable Tag Restriction" />
                        </div>
                        <Text text="Check this box if you only want to be alerted of Tags from users on your friends list."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Quote Restriction"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Enable Quote Restriction" />
                        </div>
                        <Text text="Check this box if you only want to be alerted of Quotes from users on your friends list."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Mention Alerts"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Hide Mention Alerts" />
                        </div>
                        <Text text="Check this box if you want to hide the Mention alerts."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Tag Alerts"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Hide Tag Alerts" />
                        </div>
                        <Text text="Check this box if you want to hide the Tag alerts."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Quote Alerts"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Hide Mention Alerts" />
                        </div>
                        <Text text="Check this box if you want to hide the Quote alerts."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Mention Emails"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Disable Mention Emails" />
                        </div>
                        <Text text="Check this box if you do not wish to receive an email whenever you are mentioned in a post."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Thread Tag Emails"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Disable Thread Tag Emails" />
                        </div>
                        <Text text="Check this box if you do not wish to receive an email whenever you are tagged in a thread."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Quote Emails"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Disable Quote Emails" />
                        </div>
                        <Text text="Check this box if you do not wish to receive an email whenever you are quoted in a post."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mb-4">
                        <Text text="Desktop Notifications"
                            color="text-col5"
                            className="fs-15 fw500 mb-2" />
                        <div className="d-flex checkbox-types mb-0">
                            <CheckboxNew label="Disable Desktop Notifications" />
                        </div>
                        <Text text="Check this box if you do not wish to receive desktop notifications of new mentions / thread tags / post quotes."
                            color="text-col2"
                            className="fs-12 fw500 margin-left-space" />
                    </div>
                </Col>
                <Col md={12}>
                    <div className="border-bottom mb-4"></div>
                </Col>
                <Col md={12}>
                    <Heading
                        color='text-col13'
                        fontWeight='fw600'
                        className='fs-18 w-100 mb-2'
                        typeofHeading='h2'
                        text='Privacy Settings' 
                    />
                    <Text text="Mentions"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Everyone" />
                        <div className="d-flex flex-column mt-1 mb-3">
                            <Text text="This setting controls who can see your profile tab."
                                color="text-col2"
                                className="fs-12 fw500" />   
                            <Text text="Setting this to Nobody means nobody can see your profile tab except yourself."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="Tags"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Everyone" />
                        <div className="d-flex flex-column mt-1 mb-3">
                            <Text text="This setting controls who can see your profile tab."
                                color="text-col2"
                                className="fs-12 fw500" />   
                            <Text text="Setting this to Nobody means nobody can see your profile tab except yourself."
                                color="text-col2"
                                className="fs-12 fw500" />
                        </div>  
                    </div>
                </Col>
                <Col md={12}>
                    <Text text="Quotes"
                        color="text-col5"
                        className="fs-15 fw500 mb-2" />
                    <div className='mb-4'>
                        <SelectComponent defaultOption="Everyone" />
                        <div className="d-flex flex-column mt-1 mb-3">
                            <Text text="This setting controls who can see your profile tab."
                                color="text-col2"
                                className="fs-12 fw500" />   
                            <Text text="Setting this to Nobody means nobody can see your profile tab except yourself."
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


export default UserTagging;  
