import React from "react";
import "./navBar.css";
import "./adaptive.css";
import ava from "./logo_da1.png";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__ava">
                <img src={ava} alt="Avatar"/>
            </div>
            <div className="nav__items">
                <div className="nav__item">
                    <span>
                        <NavLink className="button" to='/profile'>О нас</NavLink>
                    </span>
                </div>
                <div className="nav__item">
                    <span>
                        <NavLink to='/bouquets' className="button">Цветы</NavLink>
                    </span>
                </div>
                <div className="nav__item">
                    <span>
                        <NavLink className='button' to='/order'>Как заказать</NavLink>
                    </span>
                </div>
                <div className="nav__item">
                    <span>
                        <NavLink className='button' to='/contact'>Контакты</NavLink>
                    </span>
                </div>
                <div className="nav__item">
                    <span>
                        <NavLink className='button' to='/questions'>Вопросы</NavLink>
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;