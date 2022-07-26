import "./Card.scss";

import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

import Image from "../image/Image";
import Text from "../text/Text";
import Heading from "../heading/Heading";
import Profile2 from '../../assets/images/profile1.jpg';
import Buttons from '../Buttons/Button';


const Cardbox = (props) => {
  const names = 'matchesCard' + ' ' + (props.className || '');
  return (
    <div className={names}>
      <Card >
        <div className="bgImage"></div>
        <Card.Body className="linearBg">
          
          <div className="d-flex flex-wrap flex-md-nowrap align-item-center mb-2">
            
              <div className="cardImage mx-auto mx-md-0 mb-md-0 mb-3">
              <Image 
                src={Profile2}
                className="img-fluid"
                name="images"
              />
              </div>
              <div className="ms-0 ms-md-3 w-100 d-flex flex-wrap align-items-end align-content-end">
              <Heading 
                color='text-col6'
                fontWeight='fw500'
                className='fs-20 w-100 mb-1'
                typeofHeading='h1'
                text='Martina Bob'
              />
              <Text
                text="Submitted today at 01:25 PM"
                color="text-col21"
                className=" fs-14 fw-400"
              />
            </div>
            

            
          </div>
          <Card.Text className="mb-4">
          <Text
                text="Super Smash Bros. Ultimate"
                color="text-col6"
                className=" fs-25 fw-600"
              />
          <Text text="Track : Spirit Battles" className="fs-16 fw-600 text-col19"/>
          <Text text="Platform : Nintendo Switch" className="fs-16 fw-600 text-col19"/>
          <Text text="Potential RANK: 30" className="fs-16 fw-600 text-col19"/>
          
          </Card.Text>
          
        </Card.Body>
        <div className="d-flex align-items-center flex-wrap flex-md-nowrap cardBottom justify-content-between">
            <ul className="cardList1 mb-3 mb-md-0">
              <li>
                <span className="d-flex">
                  <Text
                  text="Points:"
                  color="text-col6"
                  className=" fs-14 fw-500 w-100"
                  />
                  <Text
                    text="1,60,000"
                    color="text-col6"
                    className=" fs-14 fw-600 ms-2"
                  />
                </span>
              
              </li>
              <li>
              <span className="d-flex">
              <Text
                text="Views:"
                color="text-col6"
                className=" fs-14 fw-500 w-100"
              />
              <Text
                text="12"
                color="text-col6"
                className=" fs-14 fw-600 ms-2"
              />
              </span>
              </li>
              <li>
              <span className="d-flex">
              <Text
                text="Shared:"
                color="text-col6"
                className=" fs-14 fw-500 w-100"
              />
              <Text
                text="04"
                color="text-col6"
                className=" fs-14 fw-600 ms-2"
              />
              </span>
              </li>
            </ul>
            <div>
              <Buttons
                text="Vote Now"
                variant="primary"
                className="primary pad1 fs-14"
              />
            </div>
            
          </div>
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
