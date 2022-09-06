import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from '../image/Image';
import Banner from '../../assets/images/banner.png';
import Banner1 from '../../assets/images/banner2.png';
import Banner2 from '../../assets/images/banner3.png';
import Heading from '../heading/Heading';
import Button from '../buttons/Button';
import './Carousel.scss';
import Switch from '../switch/Switch';

function CarouselSlider() {
  return (
    <Carousel controls={false} className="homeSlider">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Banner}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="switchWrap">
            <Switch/>
          </div>
          <Heading typeofHeading="h2" size="fs-48" fontWeight="fw700" color="text-col6" className="text-capitalize" text="Show your achievements to the world"/>
          <Button title="Submit a Performance" variant="primary" size="fs-25" className="fw600"/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />

        <Carousel.Caption>
          <div className="switchWrap">
            <Switch/>
          </div>
          <Heading typeofHeading="h2" size="fs-48" fontWeight="fw700" color="text-col6"  className="text-capitalize" text="Contribute and gain credibility"/>
          <Button title="Vote on Performances" variant="primary" size="fs-25" className="fw600"/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className="d-block w-100"
          src={Banner2}
          alt="First slide"
        />

        <Carousel.Caption>
          <div className="switchWrap">
            <Switch/>
          </div>
          <Heading typeofHeading="h2" size="fs-48" fontWeight="fw700" color="text-col6"  className="text-capitalize" text="A Community For Gamers"/>
          <Button title="Join the Community" variant="primary" size="fs-25" className="fw600"/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;