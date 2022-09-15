import "./Card.scss";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import Button from '../buttons/Button';
import Clock from '../../assets/images/svg/clock.svg';
import Comment from '../../assets/images/svg/chat.svg';
import Like from '../../assets/images/svg/like.svg';


const CardOne = (props) => {
  return (
    <div className="cardTwo">
      <Card>
        
        <Card.Body>
          
          <div className="d-flex align-item-center flex-wrap flex-md-nowrap flex-lg-nowrap mb-2">
            
              <div className="cardImageWrap mb-3 mb-md-0">
              <Image 
                src={props.imgFirst}
                className="img-fluid cardImage"
                name="images"
              />
              </div>
              <div className="ms-3 ">
                <Heading 
                  color="primaryColor"
                  size="large"
                  className=' w-100 mb-1 fw600'
                  typeofHeading='h1'
                  text={props.heading}
                />
                <div className="d-flex">
                <Button variant="borderDanger" text="Ignore" className="fs-12 me-3"/>
                <Button variant="borderInfo" text="Follow" className="fs-12"/>
                </div>
                
              </div>
            
            
                
              
            
          </div>
          <div>
            <Heading 
            color="primaryColor"
            size="xlarge"
            className=' mb-1 fw600'
            typeofHeading='h1'
            text={props.headingOne}
          />
              <Text text={props.text} className="text-col5 fs-20 fw500  d-inline-block"/>
              <Text text="Read more" className="text-col4 fs-20 fw500 d-inline-block me-3"/>
              <div className="d-flex align-items-center flex-wrap flex-md-nowrap flex-lg-nowrap">
                <div className="d-flex align-items-center">
                <Image className="img-fluid me-2" src={Clock}  />
                <Text text="5 mins ago" className="text-col2 fs-20 fw500 d-inline-block me-3"/>
                </div>
                <div className="d-flex align-items-center">
                <Image className="img-fluid me-2" src={Comment}  />
                <Text text="0" className="text-col2 fs-20 fw500 d-inline-block me-3"/>
                </div>
                <div className="d-flex align-items-center">
                <Image className="img-fluid me-2" src={Like}  />
                <Text text="You, Diana Prince and 10 others" className="text-col4 fs-20 fw500 d-inline-block me-3"/>
                </div>
                
              </div>
          </div>
         
        </Card.Body>
      </Card>
      
    </div>
  );
};

CardOne.propTypes = {
  time: PropTypes.string,
  bottomText: PropTypes.string,
  imgFirst: PropTypes.string,
  heading: PropTypes.string,
  headingOne: PropTypes.string,
  text: PropTypes.string,
  imgSecond: PropTypes.string,
};

export default CardOne;
