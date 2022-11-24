import React, { memo } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";  
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import "./tab.scss";
import CardTwo from '../card/CardTwo';
import CardOne from '../card/CardOne';
import Image1 from '../../assets/images/photo.jpg';
import ProfileImage from '../../assets/images/avatar_sml.png';
import Text from '../../Components/text/Text';

const TabOne = ({ className, ...rest }) => {
  return (
    <div className="wrapper">
      
        <div className="mt-36 mb-5 pb-5 tabs-style1" {...rest}>
        
          <Tabs id="controlled-tab-example" className="">
            <Tab
              eventKey="Performance"
              title={<React.Fragment><Text text="Performance" className="fs-17 fw600"/> <Text text="Enter details of performance" className="fs-14 fw500"/></React.Fragment> }
              mountOnEnter
              unmountOnExit={false}
            >
              <CardTwo heading="Gabriel Groomer" headingOne="Major Havoc The Promise End CAX 2022 Update" text="I will be at CAX 2022 later this month with the rest of the Major Havoc Project 
team showing off the final version of the Promised End." imgFirst={ProfileImage}/>
            </Tab>
            <Tab eventKey="Activity" title={<React.Fragment><Text text="Upload Video" className="fs-17 fw600"/> <Text text="Upload a video supporting your claim" className="fs-14 fw500"/></React.Fragment> }>
            <CardOne heading="Crazymoose3k’s has been submitted a performance" bottomText="Game: Hill Climb.." imgFirst={Image1} imgSecond={ProfileImage}/>
            </Tab>
            <Tab eventKey="performance" title={<React.Fragment><Text text="Additional Participants" className="fs-17 fw600"/> <Text text="Add users who contributed in this" className="fs-14 fw500"/></React.Fragment> }>
              tab3
            </Tab>
            
            
          </Tabs>
        </div>
      
    </div>
  );
};

export default memo(TabOne); 

