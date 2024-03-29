import React, { memo } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "../tab.scss";

import Image from "../../image/Image";
import { NavLink } from 'react-router-dom'; 
import GenaralSettings from "./GeneralSetting"; 
import UserTagging from "./UserTagging"; 
import MiscellnneousTab from "./MiscellaneousTab"; 

// images 
import BackArrow from '../../../assets/images/svg/backArrow.svg';

const tab = ({ className, ...rest }) => {
  // const 
  return (
    <section className="wrapper">  
      <Container>
        <div className='backBtn mt-3 mb-3'>
          <NavLink className="fs-25 p-0  d-flex align-items-center">
            <Image src={BackArrow} className="img-fluid" />
            <span className='text-col2 ms-2 fw500'>Back</span>
          </NavLink>
        </div>
        <div className="mt-36 mb-lg-5 pb-lg-5 mb-3 tabs-style" {...rest}>
          <Tabs id="controlled-tab-example">
            <Tab
              eventKey="Genaralsetting"
              title={<React.Fragment>General Settings</React.Fragment>}
              mountOnEnter
              unmountOnExit={false}
            >
              <GenaralSettings />  
            </Tab>
            <Tab eventKey="Usertagging" title="User Tagging">  
              <UserTagging />  
            </Tab>
            <Tab eventKey="Miscellaneous" title="Miscellaneous">  
              <MiscellnneousTab />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default memo(tab);

