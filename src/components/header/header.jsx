import React from 'react';
import HeaderNav from "./headerNav.jsx";
import head from "./header.module.css";

const Header = () => {
  return (
    <header className={head.header} id="back">
      <div className={head.container}>
          <div className={head.title}>
             For you and for yourself
          </div>
          <HeaderNav />
      </div>
    </header>
  )
}

export default Header;