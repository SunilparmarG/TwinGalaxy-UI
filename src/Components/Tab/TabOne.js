import React, { memo } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./tab.scss";
import CardTwo from '../card/CardTwo';
import CardOne from '../card/CardOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Text from '../../Components/text/Text';
import SelectComponent from "../Input/SelectFloat";
import InputComponent from "../Input/InputFloat";
import SelectAttachmentComponent from "../Attachment/SelectAttachmentComponent";
import Buttons from "../Buttons/Button";

const TabOne = ({ className, ...rest }) => {
  return (
    <div className="wrapper">

      <div className="mt-36 mb-5 pb-5 tabs-style1" {...rest}> 
        <Tabs id="controlled-tab-example"> 
          <Tab
            eventKey="Performance"
            title={<React.Fragment><Text text="Performance" className="fs-17 fw600" /> <Text text="Enter details of performance" className="fs-14 fw500" /></React.Fragment>}
            mountOnEnter
            unmountOnExit={false}
          >
            {/* <CardTwo heading="Gabriel Groomer" headingOne="Major Havoc The Promise End CAX 2022 Update" text="I will be at CAX 2022 later this month with the rest of the Major Havoc Project 
team showing off the final version of the Promised End." imgFirst={ProfileImage}/> */}
            <Row>
              <Col md={6}>
                <SelectComponent labelValue="Platform" defaultOption="Android" className="mb-4" />
              </Col>
              <Col md={6}>
                <SelectComponent labelValue="Game Name" defaultOption="Arena" className="mb-4" />
              </Col>
              <Col md={12}>
                <SelectComponent labelValue="Track" defaultOption="EMU - Points" className="mb-4" />
              </Col>
              <Col md={12}>
                <div class="alert alert-danger mb-4">
                  <h5 class="section-heading mb-4">Rules</h5>
                  <ul class="list-unstyled listStyle1">
                    <li>Score taken from the "Total Event Kudos" displayed after the difficulty bonus is applied for the indicated event.</li>
                    <li>Difficulty (and therefore bonus) is the player's choice. Event must be successfully completed to earn the bonus.</li>
                    <li>The "Previous Best" is not permitted as a measurement.</li>
                  </ul>
                </div>
              </Col>

              <Col md={6}>
                <SelectComponent labelValue="Score/Elapsed Time *" defaultOption="Android" className="mb-4" />
              </Col>
              <Col md={6}>
                <SelectComponent labelValue="Repeat Score/Elapsed Time  *" defaultOption="Arena" className="mb-4" />
              </Col>
              <Col md={12}>
                <InputComponent
                  placeholder="Type something"
                  name="Address"
                  required="true"
                  label="Evidence Description *"
                  className="mb-4"
                  as="textarea"
                // rows="3"
                />

              </Col>

              <Col md={12}>
                <label className="text-col5  fw500 mb-3">Attachments</label>
                <SelectAttachmentComponent className="mb-4" title="Choose File (s)" otherText="File extension supported: bmp, doc, gif, inp, jpe, jpeg, jpg, pdf, png, psd, txt and zip." />
              </Col>
            </Row>
            <div className="d-flex justify-content-between align-items-center">
              <Buttons
                text="Save & Next"
                variant="outline-secondary"
              />

              <Buttons
                text="Save & Next"
                variant="primary"
              />


            </div>
          </Tab>
          <Tab eventKey="Activity" title={<React.Fragment><Text text="Upload Video" className="fs-17 fw600" /> <Text text="Upload a video supporting your claim" className="fs-14 fw500" /></React.Fragment>}>
            <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
          </Tab>
          <Tab eventKey="performance" title={<React.Fragment><Text text="Additional Participants" className="fs-17 fw600" /> <Text text="Add users who contributed in this" className="fs-14 fw500" /></React.Fragment>}>
            tab3
          </Tab>


        </Tabs>
      </div>

    </div>
  );
};

export default memo(TabOne);

