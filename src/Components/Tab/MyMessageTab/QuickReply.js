import { Card, Row, Col, Form } from "react-bootstrap";

import Text from "../../text/Text";
import Buttons from "../../Buttons/Button";
import InputComponent from "../../Input/InputFloat";


const QuickReply = (props) => {
    return (
        <div className="quick-reply">
            <Text
                text="Quick Reply"
                color="text-col1"
                className="fs-20 fw600"
            />
            <div className="text-end mb-1">
                <Text
                    text="BCC Recipient"
                    color="text-col4"
                    className="fs-14 fw500 text-decor"
                />
            </div>
            <Row>
                <Col md={12}>
                    <div className="mb-4">
                        <InputComponent
                            type='text'
                            placeholder="Recipient Users"
                            name="users"
                            required="true"
                        />
                        <Text
                            text="Separate multiple user names with a semi-colon ';'"
                            color="text-col2"
                            className="fs-12 fw500 mb-2 text-align"
                        />
                    </div>
                </Col>
                <Col md={12}>
                    <div className="mb-4">
                        <InputComponent
                            type='text'
                            placeholder="Title"
                            name="title"
                            required="true"
                        />
                    </div>
                </Col>
                <Col md={12}>
                    <div className='mb-4'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Messsage" rows={5} />
                        </Form.Group>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4 pb-3">
                <Col>
                    <Buttons
                        text="Submit Message" 
                        variant="primary"
                        className="primary pad1 fs-14 me-3 mb-3 mb-sm-0 fw600"
                    />
                    <Buttons
                        text="Preview Message"
                        variant="primary"
                        className="btn-primary btn-cancel text-col5 pad1 me-3 fs-14 fw600"
                    />
                    <Buttons
                        text="Discard" 
                        variant="primary"
                        className="btn-primary btn-cancel text-col5 pad1 fs-14 fw600"
                    />
                </Col>
            </Row>
            <Text
                text="Additional Options"
                color="text-col5"
                className="fs-18 fw600 mb-2"
            />

            {/* <div className="border-bottom-solid-two mb-3"></div> */}
            {/* <ChipsComponent /> */}
            <div className="mb-3"></div>

        </div>
    );
};


export default QuickReply;


