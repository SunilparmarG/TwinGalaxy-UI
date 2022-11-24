import React from "react";
import Slider from "react-slick";
import Card from '../card/Card';
import './slider.scss';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:2.5,
    slidesPerRow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
  };
  return (
   
    <Slider {...settings} className='homeSliderOne'>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
      <div>
      <Card/>
      </div>
    </Slider>
   
  );
}