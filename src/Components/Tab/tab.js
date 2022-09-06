import React, { memo } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";  
import "./tab.scss";
import CardTwo from '../card/CardTwo';
import CardOne from '../../Components/card/CardOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';

const tab = ({ className, ...rest }) => {
  return (
    <div className="wrapper">
      
        <div className="mt-36 mb-5 pb-5 tabs-style" {...rest}>
          <Tabs id="controlled-tab-example" className="">
            <Tab
              eventKey="Wall"
              title={<React.Fragment>The Wall</React.Fragment>}
              mountOnEnter
              unmountOnExit={false}
            >
              <CardTwo heading="Gabriel Groomer" headingOne="Major Havoc The Promise End CAX 2022 Update" text="I will be at CAX 2022 later this month with the rest of the Major Havoc Project 
team showing off the final version of the Promised End." imgFirst={ProfileImage}/>
            </Tab>
            <Tab eventKey="Activity" title="Recent Activity">
            <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage}/>
            </Tab>
            <Tab eventKey="performance" title="Performances">
              tab3
            </Tab>
            <Tab eventKey="Post" title="Facobook Post">
              tab4
            </Tab>
            
          </Tabs>
        </div>
      
    </div>
  );
};

export default memo(tab); 

