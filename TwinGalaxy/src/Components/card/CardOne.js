import "./Card.scss";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";


const CardOne = (props) => {
  return (
    <div className="cardOne warningBorder">
      <Card>        
        <Card.Body>          
          <div className="d-flex align-item-center flex-wrap flex-md-nowrap flex-lg-nowrap mb-2">            
              <div className="cardImageWrap mx-auto mx-md-0 mb-3 mb-md-0">
              <Image 
                src={props.imgFirst}
                className="img-fluid cardOneImage"
                name="images"
              />
              </div>
              <div className="ms-3 d-flex flex-wrap ">
                <div className="d-flex flex-wrap">
                  <Heading 
                    color="primaryColor"
                    size="large"
                    className='fw500'
                    typeofHeading='h1'
                    text={props.heading}
                  />
                  <Heading 
                    color="col5"
                    size="large"
                    className='fw500 ms-1'
                    typeofHeading='h1'
                    text={props.headingTwo}
                  />
               </div>

              <ul className="activityList mb-1">
                <li>
                  <Text text="Game:" className="text-col1  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="Hill Climb" className="text-col4 fs-16 fw600 d-inline-block ellipsis"/>
                  
                </li>
                <li>
                  <Text text="Track: " className="text-col1  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="Spirit Battles" className="text-col4 fs-16 fw600 d-inline-block"/>
                  
                </li>
                <li>
                  <Text text="Platform: " className="text-col1  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="Android" className="text-col4 fs-16 fw600 d-inline-block"/>
                  
                </li>
                <li>
                  <Text text="Potential Rank: " className="text-col1  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="30" className="text-col4 fs-16 fw600 d-inline-block"/>
                  
                </li>
              </ul>
              <ul className="activityList w-100">
                <li>
                  <Text text="Points: " className="text-col5  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="57,606" className="text-col1 fs-16 fw600 d-inline-block"/>
                  
                </li>
                <li>
                  <Text text="Views: " className="text-col5  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="1" className="text-col1 fs-16 fw600 d-inline-block"/>
                  
                </li>
                <li>
                  <Text text="Reply: " className="text-col5  fs-16 fw600 d-inline-block me-2"/>
                  <Text text="0" className="text-col1 fs-16 fw600 d-inline-block"/>                  
                </li>                
              </ul>
              <div className="d-flex align-items-center">
                <Image src={props.imgSecond} className="img-fluid   me-3"/>
                <div>
                  <Text text="Submitted by " className="text-col5 fs-12 fw400 d-inline-block me-2"/>
                  <Text text="Crazymoose3k" className="text-col1 fs-12 fw600 d-inline-block me-3"/>
                  <Text text="At 06:31 PM, Aug 1, 2022" className="text-col2 fs-12 fw600 d-inline-block"/>
                </div>
              </div>
            </div>
          </div>          
        </Card.Body>
      </Card>
      
    </div>
  );
};

CardOne.propTypes = {
  day: PropTypes.string,
  time: PropTypes.string,
  bottomText: PropTypes.string,
  imgFirst: PropTypes.string,
  heading: PropTypes.string,
  subHeadingFirst: PropTypes.string,
  text2: PropTypes.string,
  imgSecond: PropTypes.string,
  subHeadingSecond: PropTypes.string,
  subHeadingThird: PropTypes.string,
};

export default CardOne;
