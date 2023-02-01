// import "./friend.scss"; 
import { Card, Row, Col } from "react-bootstrap";

import Image from "../../image/Image";
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import TrashIcon from '../../../assets/images/svg/Trash.svg';
import Sends from '../../../assets/images/svg/sends.svg';
import CheckboxNew from "../../checkbox/CheckboxNew";

const RecordsComponent = (props) => { 
    return (
        <div className="email-list">
            {/* <Image src={Games} name="Games" className="img-fluid mb-4" /> */}
            <div className="inner-email-list p-2 px-3 mb-2">
                <Row className="align-items-center">
                    <Col>
                        <div className="d-flex user-text">
                            <CheckboxNew id="maillist" label="Jacob Jones Jacob JonesJacob Jones" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit."
                            color="text-col5"
                            className="fs-14 fw500 text-truncate" />
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Text text="10:30 AM"
                                color="text-col2"
                                className="fs-14 fw500 text-truncate timeset" />
                        </div>
                        <div className="d-flex trace-icon text-end align-items-center justify-content-end">
                            <Image src={TrashIcon} name="Trash" className="img-fluid pointer me-3" />
                            <Image src={Sends} name="Send Icon" className="img-fluid pointer" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="inner-email-list p-2 px-3 mb-2">
                <Row className="align-items-center">
                    <Col>
                        <div className="d-flex user-text">
                            <CheckboxNew id="maillist" label="Jacob Jones Jacob JonesJacob Jones" />
                        </div>
                    </Col>
                    <Col md={8}>
                        <Text text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit."
                            color="text-col5"
                            className="fs-14 fw500 text-truncate" />
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-end">
                            <Text text="10:30 AM"
                                color="text-col2"
                                className="fs-14 fw500 text-truncate timeset" />
                        </div>
                        <div className="d-flex text-end trace-icon align-items-center justify-content-end">
                            <Image src={TrashIcon} name="Trash" className="img-fluid pointer me-3" />
                            <Image src={Sends} name="Send Icon" className="img-fluid pointer" />
                        </div>
                    </Col>  
                </Row>
            </div>
        </div>
    );
};


export default RecordsComponent;

