import React, { memo } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "./tab.scss";
import VerticalmenuTab from "./VerticalmenuTab";
import MyNetworkTab from "./MyNetworkTab";
import RecordTab from "./RecordTab";

const tab = ({ className, ...rest }) => {
  // const 
  return (
    <section className="wrapper">
      <Container>
        <div className="mt-36 mb-lg-5 pb-lg-5 mb-3 tabs-style" {...rest}>
          <Tabs id="controlled-tab-example" className="">
            <Tab
              eventKey="Wall"
              title={<React.Fragment>Profile</React.Fragment>}
              mountOnEnter
              unmountOnExit={false}
            >
              <VerticalmenuTab />   
            </Tab>
            <Tab eventKey="Activity" title="My Network">
              <MyNetworkTab />
            </Tab>
            <Tab eventKey="Achivements" title="Records &  Achivements">
              <RecordTab /> 
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default memo(tab);

