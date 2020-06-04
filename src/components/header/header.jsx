import React from 'react';
import logo from './horse-logo.png';
import HeaderNav from "./headerNav.jsx";
import head from "./header.module.css";

const Header = () => {
  return (
    <header className={head.header}>
      <div className="container">
        <div className={head.top}>
          <div className={head.logo}>
            <img src={logo} alt="logo"/>
            <div className={head.text}>Dastarhan</div>
          </div>
          <HeaderNav />
        </div>
      </div>
      <div className={head.bot}></div>

    </header>
  )
}

export default Header;