import React from 'react';
import {NavLink } from 'react-router-dom';

import Text from '../../Components/text/Text'; 
import './footer.scss';

// Images and icon
import LogoImg from '../../assets/images/logo-white.png';
import Image from '../../Components/image/Image';
import Twitter from '../../assets/images/svg/twitter.svg';
import Instagram from '../../assets/images/svg/instagram.svg';
import Emails from '../../assets/images/svg/emails.svg';


const Footer = () => {
  return (
    <footer className="footer-mj text-center">
      <img src={LogoImg} alt='twingalaxy logo' />
      <ul className="footer-links w-100">
        <li>
          <NavLink to=''>Contact Us 132</NavLink>
          
        </li>
        <li>
          <NavLink to=''>Score Review</NavLink>
        </li>
        <li>
          <NavLink to=''>Leaderboards</NavLink>
        </li>
        <li>
          <NavLink to=''>Archive</NavLink>
        </li>
        <li>
          <NavLink to=''>Site Info</NavLink>
        </li>
      </ul>
      <ul className='socialLink'>
        <li>
         <a href='https://twitter.com/' target="_blank">
            <Image src={Twitter} className="img-fluid" />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/' target="_blank">
            <Image src={Instagram} className="img-fluid" /> 
          </a>
        </li>
        <li>
          <a  href="mailto:someone@example.com">
            <Image src={Emails} className="img-fluid" />
          </a>
        </li>
      </ul>
      <div className='text-center'> 
        <Text text="© Twin Galaxies. All right reserved" className="text-col6 fs-14 fw600" />
      </div>
    </footer>
  )
}

export default Footer
