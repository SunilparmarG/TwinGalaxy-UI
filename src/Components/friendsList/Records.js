import "./friend.scss";
import { Card, Row, Col } from "react-bootstrap";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import Games from '../../assets/images/games.svg'; 

const RecordsComponent = (props) => {
    return (
        <div className="friend-list">   
            <Card>
                <Card.Header>
                    <Text text="Twin Galaxies Records"
                        color="text-col1"
                        className="fs-20 fw600" />
                </Card.Header>
                <Card.Body>  
                    <Row>
                        <Col md={12}>
                            <div className="d-flex pt-5 pb-5 flex-column align-items-center justify-content-center">
                                <Image src={Games} name="Games" className="img-fluid mb-4" />
                                <Text text="Player holds no rankings" 
                                    color="text-col2"
                                    className="fs-25 fw600 text-center" />  
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};


export default RecordsComponent; 
