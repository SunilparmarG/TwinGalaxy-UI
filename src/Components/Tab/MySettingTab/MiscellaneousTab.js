import { Card, Row, Col } from "react-bootstrap";

import Image from "../../image/Image";
import Text from "../../text/Text";

// images scss and icons  
import './settings.scss';
import NoData from '../../../assets/images/no-data.png';

const RecordsComponent = (props) => {
    return (
        <div className="settings-tab px-md-4"> 
            <Row>
                <Col md={12}>
                    <div className="d-flex pt-5 pb-5 flex-column align-items-center justify-content-center">
                        <Image src={NoData} name="No Data" className="img-fluid mb-4" />
                        <Text text="You have no attachments."
                            color="text-col2"
                            className="fs-25 fw600 text-center" />    
                    </div>
                </Col>
            </Row>
        </div>
    );
};


export default RecordsComponent; 
