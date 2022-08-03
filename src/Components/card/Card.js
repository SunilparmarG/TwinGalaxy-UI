import "./Card.scss";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import ImageTop from '../../assets/images/photo.jpg';
import Buttons from '../buttons/Button';


const Cardbox = (props) => {
  return (
    <div className="matchesCard">
      <Card className="bgImage">
        
        <Card.Body>
          
          <div className="d-flex align-item-center mb-2">
            
              <div className="cardImage">
              <Image 
                src={ImageTop}
                className="img-fluid"
                name="images"
              />
              </div>
              <div className="ms-3 d-flex flex-wrap align-items-end align-content-end">
              <Heading 
                color='text-col6'
                fontWeight='fw500'
                className='fs-20 w-100 mb-1'
                typeofHeading='h1'
                text='Martina Bob'
              />
              <Text
                text="Submitted today at 01:25 PM"
                color="text-col6"
                className=" fs-14 fw-400"
              />
            </div>
            

            
          </div>
          <Card.Text className="mb-4">
          <Text
                text="Nintendo Switch - Super Smash Bros. Ultimate - Spirit Battles"
                color="text-col6"
                className=" fs-26 fw-600"
              />
          
          </Card.Text>
          <div className="d-flex align-items-center mt-1">
            <ul className="cardList">
              <li>
              <Text
                text="Points"
                color="text-col6"
                className=" fs-16 fw-500 w-100"
              />
              <Text
                text="1,60,000"
                color="text-col6"
                className=" fs-20 fw-600"
              />
              </li>
              <li>
              <Text
                text="Views"
                color="text-col6"
                className=" fs-16 fw-500 w-100"
              />
              <Text
                text="12"
                color="text-col6"
                className=" fs-20 fw-600"
              />
              </li>
              <li>
              <Text
                text="Shared"
                color="text-col6"
                className=" fs-16 fw-500 w-100"
              />
              <Text
                text="04"
                color="text-col6"
                className=" fs-20 fw-600"
              />
              </li>
            </ul>
            <Buttons
              title="Vote Now"
              variant="primary"
              className="primary"
            />
          </div>
        </Card.Body>
      </Card>
      
    </div>
  );
};

Cardbox.propTypes = {
  day: PropTypes.string,
  time: PropTypes.string,
  bottomText: PropTypes.string,
  imgFirst: PropTypes.string,
  headingFirst: PropTypes.string,
  subHeadingFirst: PropTypes.string,
  text2: PropTypes.string,
  imgSecond: PropTypes.string,
  headingSecond: PropTypes.string,
  subHeadingSecond: PropTypes.string,
  showChip: PropTypes.bool,
  chipText: PropTypes.string,
};

export default Cardbox;
