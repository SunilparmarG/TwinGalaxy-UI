import React from 'react';
import './footer.scss';
import LogoImg from '../../assets/images/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer-mj text-center">
      <img src={LogoImg} />
      <ul className="footer-links">
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
    </footer>
  )
}

export default Footer
