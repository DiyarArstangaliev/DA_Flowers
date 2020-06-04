import React from "react";
import "./navBar.css";
import ava from "./foto_1.jpeg";

const NavBar = () => {
  return <nav className="nav">
      <div className="nav__ava">
        <img src={ava} alt="Avatar"/>
      </div>
      <div className="nav__items">
        <div className="nav__item">
          <a>Profile</a>
        </div>
        <div className="nav__item">
          <a>Messages</a>
        </div>
        <div className="nav__item">
          <a>Music</a>
        </div>
        <div className="nav__item">
          <a>News</a>
        </div>
        <div className="nav__item">
          <a>Settings</a>
        </div>
      </div>
    </nav>
};

export default NavBar;