import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.svg";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar__logo-wrapper">
          <img className="navbar__logo" src={Logo} />
          <h4 className="navbar__logo-text">Cafe Columbia</h4>
        </Link>
          <div className="navbar__menu-wrapper">
            <ul className="navbar__menu">
              <Link to="/menu"><li className="navbar__menu-item">Menu</li></Link>
              <Link to="/gallery"><li className="navbar__menu-item">Gallery</li></Link>
              <Link to="/contact"><li className="navbar__menu-item">Contact Us</li></Link>
            </ul>
          </div>
        </div>
    </>
  );
}
