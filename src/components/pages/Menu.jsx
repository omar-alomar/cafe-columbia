import React from 'react';
import Menu1 from './../../assets/img/menu1.png';
import Menu2 from './../../assets/img/menu2.png';

export default function Menu() {
  return (
    <>
    <div className="menu">
      <img className="menu__img" src={Menu1} alt="" />
      {/* <img className="menu__img" src={Menu2} alt="" /> */}
    </div>
    </>
  );
}
