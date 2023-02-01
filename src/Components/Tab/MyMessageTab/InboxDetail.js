import { Card, Row, Col } from "react-bootstrap";

import Image from "../../image/Image";
import Text from "../../text/Text";
import Heading from "../../heading/Heading"; 
import ChipsComponent from "../../Chips/ChipsComponent"; 
import QuickReply from "./QuickReply"; 

// images icons 
import LeftArrow from '../../../assets/images/svg/style-arrow.svg';
import CrossBtn from '../../../assets/images/svg/cross-new.svg';
import CrossLeft from '../../../assets/images/svg/back-svgrepo.svg';
import UserPro from '../../../assets/images/userprofile.png';


const InboxDetail = (props) => {
    return (
        <div className="inbox-datainfo">
            <Row className="align-items-center mb-4">
                <Col md={10}>
                    <div className="d-flex align-items-center"> 
                        <Heading
                            color='text-black'
                            fontWeight='fw500'
                            className='fs-25 mb-0'
                            typeofHeading='h2'
                            text='Amet minim mollit non deserunt ullamco est'
                        />
                        <span className="ms-3">
                            <Image src={LeftArrow} name="Left Arrow" className="img-fluid pointer" />
                        </span>  
                        <span className="ms-3 inbox-tag">
                            Inbox <Image src={CrossBtn} name="Left Arrow" className="img-fluid pointer ms-2" />
                        </span>
                    </div>
                </Col>
                <Col className="ms-auto">
                    <div className="d-flex trace-icon text-end align-items-center justify-content-end">
                        <Image src={CrossLeft} name="Send Icon" className="img-fluid pointer" />
                    </div>
                </Col>
            </Row>

            <QuickReply />   

            <div className="user-boxlist d-flex align-items-center mb-4">
                <div className="profile-user">
                    <Image src={UserPro} name="Send Icon" className="img-fluid pointer" />
                </div>
                <div className="ms-3"> 
                    <Text
                        text="Jonathan Doe"
                        color="text-col1"
                        className="fs-16 fw700"
                    />
                    <Text
                        text="jonathan.doe@gmail.com"
                        color="text-col4"
                        className="fs-12 fw600"
                    />
                    <Text
                        text="08-01-2022. 06:22 AM"
                        color="text-col2"
                        className="fs-12 fw500"
                    />
                </div>
            </div>
            <div className="d-flex flex-column mb-5 pb-5"> 
                <Text
                    text="Hi Guys,"
                    color="text-black"
                    className="fs-16 fw400 mb-3"
                />
                <Text
                    text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
                    color="text-black"
                    className="fs-16 fw400 mb-3"
                />
                <Text
                    text="Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
                    color="text-black"
                    className="fs-16 fw400"
                />
            </div>
            <div className="border-bottom-solid-two mb-3"></div>
            <ChipsComponent />
        </div>
    );
};


export default InboxDetail;

