import React, { useState } from 'react';
import Slider from 'react-slick';
import './producSlider.scss'

import Image from '../../Components/image/Image';

// Slider images
import Slide1 from '../../assets/images/slider/slide1.webp'
import Slide2 from '../../assets/images/slider/slide2.webp'
import Slide3 from '../../assets/images/slider/slide3.webp'


export default function App() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
   
    <div>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
         <div>
            <Image className="rounded img-fluid w-100" src={Slide1}  alt="Slider Image" />
          </div>
          <div>
            <Image className="rounded img-fluid w-100" src={Slide2}  alt="Slider Image" />
          </div>
          <div>
            <Image className="rounded img-fluid w-100" src={Slide3}  alt="Slider Image" />
          </div>
      </Slider>
      <div className='thumbsImage'>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          dots={false}        
        >        
          <div className='produtImage'>
              <Image className="rounded img-fluid" src={Slide1}  alt="Slider Image" />
            </div>
            <div className='produtImage'>
              <Image className="rounded img-fluid" src={Slide2}  alt="Slider Image" />
            </div>
            <div className='produtImage'>
              <Image className="rounded img-fluid" src={Slide3}  alt="Slider Image" />
            </div> 
      </Slider>
      </div>
    </div>
  );
}
