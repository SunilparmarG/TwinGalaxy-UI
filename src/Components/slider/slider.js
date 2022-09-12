import React from "react";
import Slider from "react-slick";
import Card from '../card/Card';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
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
            centerMode: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
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