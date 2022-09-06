import React from 'react';
import './Footer.scss';
import LogoImg from '../../assets/images/logo-white.png';
import Image from '../../Components/image/Image';
import Twitter from '../../assets/images/svg/twitter.svg';
import Instagram from '../../assets/images/svg/instagram.svg';
import Emails from '../../assets/images/svg/emails.svg';
import Text from '../../Components/text/Text';

const Footer = () => {
  return (
    <footer className="footer-mj text-center">
      <img src={LogoImg} />
      <ul className="footer-links w-100">
        <li>
          <a>Contact Us</a>
        </li>
        <li>
          <a>Score Review</a>
        </li>
        <li>
          <a>Leaderboards</a>
        </li>
        <li>
          <a>Archive</a>
        </li>
        <li>
          <a>Site Info</a>
        </li>
      </ul>
      <ul className='socialLink'>
        <li>
          <a>
            <Image src={Twitter} className="img-fluid" />
          </a>
        </li>
        <li>
          <a>
            <Image src={Instagram} className="img-fluid" />
          </a>
        </li>
        <li>
          <a>
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
