import React from 'react';
import Logo from "../assets/img/logo.svg";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container footer__container--address">
          <p>5550 Sterrett Place</p>
          <p>Suite 103, Columbia</p>
          <p>MD-21204</p>
        </div>

        <a href="tel:+14106003788" className="footer__container footer__container--call">
          <PhoneIcon /><p>410-600-3788</p>
        </a>

        <div className="footer__container footer__container--logo">
          <img src={Logo} className="footer__logo" />
        </div>

        <a className="footer__container footer__container--mail" href="mailto:cafecolumbiallc@gmail.com">
          <EmailIcon /><p>cafecolumbiallc<br/>@gmail.com</p>
        </a>

        <div className="footer__container footer__container--rights">
          <p>Cafe Columbia, LLC</p>
          <p>© All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
