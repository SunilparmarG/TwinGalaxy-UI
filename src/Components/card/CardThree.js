import "./Card.scss";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";


const CardThree = (props) => {
  return (
    <div className="cardOne successBorder">
      <Card>
        
        <Card.Body>
          
          <div className="d-flex align-items-start flex-wrap flex-md-nowrap flex-lg-nowrap mb-2">
            
              <div className="d-flex align-items-start">
                <Image src={props.imgSecond} className="img-fluid   me-3"/>
                <div>
                <Heading 
                color="primaryColor"
                size="large"
                className='w-100 mb-1 fw500'
                typeofHeading='h1'
                text={props.heading}
                />
                  <Text text={props.subHeadingFirst} className="text-col4 fs-16 fw600 mb-2"/>
                  <Text text="At 06:31 PM, Aug 1, 2022" className="text-col2 fs-12 fw600 "/>
                </div>
              </div>
            
          </div>
          
         
        </Card.Body>
      </Card>
      
    </div>
  );
};

CardThree.propTypes = {
    time: PropTypes.string,
  heading: PropTypes.string,
  subHeadingFirst: PropTypes.string,
  text2: PropTypes.string,
  imgSecond: PropTypes.string,
  subHeadingSecond: PropTypes.string,
  subHeadingThird: PropTypes.string,
};

export default CardThree;
