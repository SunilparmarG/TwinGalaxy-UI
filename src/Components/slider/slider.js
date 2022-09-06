import React from "react";
import Slider from "react-slick";
import Card from '../Card/Card';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
   
    <Slider {...settings}>
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