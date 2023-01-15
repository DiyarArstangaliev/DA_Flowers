import React from "react";
import "./navBar.css";
import ava from "./foto_1.jpeg";
//import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__ava">
        <img src={ava} alt="Avatar"/>
      </div>
      <div className="nav__items">
        <div className="nav__item">
          <span>О нас</span>
        </div>
          <div className="nav__item">
              <span>Букеты</span>
          </div>
          <div className="nav__item">
              <span>Композиции</span>
          </div>
          <div className="nav__item">
              <span>Оформление праздников</span>
          </div>
          <div className="nav__item">
              <span>Как заказать</span>
          </div>
          <div className="nav__item">
              <span>Доставка и оплата</span>
          </div>
          <div className="nav__item">
              <span>Контакты</span>
          </div>
          <div className="nav__item">
              <span>Часто задаваемые вопросы</span>
          </div>
      </div>
    </nav>
  )
};

export default NavBar;