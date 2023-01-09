import React from 'react'; 
import { ProgressBar } from "react-bootstrap";
// components 
import Text from "../../text/Text";
import Heading from "../../heading/Heading";
import Image from "../../image/Image";

// images and icons 
import EmailSend from '../../../assets/images/svg/email-send.svg';

const FolderComponent = () => {
    return (
        <div className="control-box d-flex mb-3">
            <div className="circle-box">
                <Image src={EmailSend} name="email send icon" className="img-fluid pointer" />
            </div>
            <div className="d-flex flex-column ms-2">
                <Text
                    text="Folder Controls"
                    color="text-col1"
                    className="fs-12 fw600 mb-0"
                />
                <div className="d-flex align-items-center flex-wrap mb-1">
                    <Text
                        text="Download all Private Messages as:"
                        color="text-col1"
                        className="fs-10 fw600"
                    />
                    <Text
                        text="XML"
                        color="text-col29"
                        className="fs-10 fw500 ms-1"
                    />
                    <span className="mx-1 seprator-right">|</span>
                    <Text
                        text="CSV"
                        color="text-col29"
                        className="fs-10 fw600"
                    />
                    <span className="mx-1 seprator-right">|</span>
                    <Text
                        text="Text"
                        color="text-col29"
                        className="fs-10 fw600"
                    />
                    <Text
                        text="OR"
                        color="text-col1"
                        className="fs-10 fw600 mx-1"
                    />
                    <Text
                        text="(Empty Folder)"
                        color="text-col1"
                        className="fs-10 fw600"
                    />
                </div>
                <div className="progress-top mb-2">
                    <ProgressBar now={20} />
                </div>
                <Text
                    text="13.97 GB of 100 GB used"
                    color="text-col1 text-black opacity-color"
                    className="fs-12 fw600 mb-0"
                />
            </div>
        </div>
    )
}

export default FolderComponent;

