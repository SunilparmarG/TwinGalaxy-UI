import React, { memo } from "react";
import { Card, Tab, Row, Col, Nav, Form, Table } from "react-bootstrap";

// components 
import Text from "../text/Text";
import RecordsComponent from "../friendsList/Records"; 
import DataTables from "../DataTables/DataTables";      

// images and scss
import "./tab.scss";
import SearchComponent from "../Search/Search";

const VerticalTab = ({ className, ...rest }) => {
    // const 
    return (
        <section className="vertical-tab" aria-label="Vertical Tab Section">
            <Tab.Container id="left-tabs-example" defaultActiveKey="twingalaxiesrecords">
                <Row>
                    <Col md={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="twingalaxiesrecords">Twin Galaxies Records</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="steamachivements">Steam Achivements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="speedrunrecord">Speedrun.com Records</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="xboxachievements">Xbox Achievements</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="twingalaxiesrecords">
                                <Card>
                                    <Card.Header>
                                        <Text text="Twin Galaxies Records"
                                            color="text-col1"
                                            className="fs-20 fw600" />
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={6}>
                                                <SearchComponent />
                                            </Col>
                                            <Col md={6}>
                                                <div className="text-end show-no">
                                                    <Form.Select aria-label="Default select example">
                                                        <option>Show 10</option>
                                                        <option value="0">10</option>
                                                        <option value="1">20</option>
                                                        <option value="2">30</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>
                                        </Row>       
                                        <Row>
                                            <Col md={12}>
                                                <div className="data-table-border mt-2">
                                                    <DataTables /> 
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="steamachivements">
                                <RecordsComponent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="speedrunrecord">
                                <RecordsComponent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="xboxachievements">
                                <RecordsComponent />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </section >
    );
};

export default memo(VerticalTab);  