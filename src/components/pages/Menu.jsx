import React from 'react';
import Menu1 from './../../assets/img/menuColored.png';
import MenuPage1 from './../../assets/img/menuCut1.png';
import MenuPage2 from './../../assets/img/menuCut2.png';

export default function Menu() {
  return (
    <>
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu__img-container">
        <img className="menu__img" src={MenuPage1} alt="" />
        <img className="menu__img" src={MenuPage2} alt="" />
      </div>
    </div>
    </>
  );
}
