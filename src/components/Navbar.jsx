import React from 'react';
import Logo from "../assets/img/logoCropped.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="navbar__logo" src={Logo} />
        <div className="navbar__logo-text-wrapper">
          <h4>Cafe Columbia</h4></div>
      </div>
    </>
  );
}
