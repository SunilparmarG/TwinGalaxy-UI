import "./InfoBlock.scss";

import PropTypes from "prop-types";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";


const InfoBlock = (props) => {
  return (
    <div className={props.className}>
        <div className="me-3 minWidth30">
            <Image src={props.img} className=' img-fluid'/>
        </div>
        <div>
            <Heading typeofHeading="h4" text={props.heading} className='fs-15 fw600 text-col1 mb-0' />
            <Text text={props.text} className='fs-14 fw500 text-col2'/>
        </div>
                
      
      
    </div>
  );
};

InfoBlock.propTypes = {
  img: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default InfoBlock;
