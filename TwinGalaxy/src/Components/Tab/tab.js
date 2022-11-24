import React, { memo } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "./tab.scss";
import CardTwo from '../card/CardTwo';
import CardOne from '../../Components/card/CardOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Card from './../card/Card';
import PostCard from './../card/PostCard';

const tab = ({ className, ...rest }) => {
  // const 
  return (
    <div className="wrapper">

      <div className="mt-36 mb-lg-5 pb-lg-5 mb-3 tabs-style" {...rest}>
        <Tabs id="controlled-tab-example" className="">
          <Tab
            eventKey="Wall"
            title={<React.Fragment>The Wall</React.Fragment>}
            mountOnEnter
            unmountOnExit={false}
          >
            <CardTwo heading="Gabriel Groomer" headingOne="Major Havoc The Promise End CAX 2022 Update" text="I will be at CAX 2022 later this month with the rest of the Major Havoc Project 
team showing off the final version of the Promised End." imgFirst={ProfileImage} />
          </Tab>
          <Tab eventKey="Activity" title="Recent Activity">
            <CardOne heading="’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage} />
          </Tab>
          <Tab eventKey="performance" title="Performances">
            <Row>
              <Col lg={4}>
                  <Card className='tabCard'/>
              </Col>
              <Col lg={4}>
                  <Card className='tabCard'/>
              </Col>
              <Col lg={4}>
                  <Card className='tabCard'/>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Post" title="Facobook Post">
            <Row>
                <Col lg={4}>
                  <PostCard/>
                </Col>
                <Col lg={4}>
                  <PostCard/>
                </Col>
                <Col lg={4}>
                  <PostCard/>
                </Col>
            </Row>
          </Tab>

        </Tabs>
      </div>

    </div>
  );
};

export default memo(tab);

