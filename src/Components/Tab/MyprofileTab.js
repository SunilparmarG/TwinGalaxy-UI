import React, { memo } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import "./tab.scss";
import VerticalmenuTab from "./VerticalmenuTab"; 

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
              My Network
            </Tab>
            <Tab eventKey="Achivements" title="Records &  Achivements">
              <Row>
                <Col lg={4}>
                  Hello
                </Col>
                <Col lg={4}>
                  Hello 2
                </Col>
                <Col lg={4}>
                  Hello 3
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default memo(tab);

