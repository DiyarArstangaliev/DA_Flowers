import React, {useState} from "react";
import headNav from "./header.module.css";
import {NavLink} from "react-router-dom";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const HeaderNav = () => {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <div className={headNav.headerNav}>
            <div className={headNav.search}>
                <input type="text" name="" className={headNav.txt}
                       placeholder="Type to search"/>
                <a className={headNav.btn} href="#s">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
            </div>
            <div className={headNav.number}>
                <div className={headNav.number1}>+7(996) 051 36 90</div>
                <div className={headNav.number1}>+7(999) 628 61 64</div>
            </div>
            <div className={headNav.link}>
                <NavLink to='/message'>
                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                </NavLink>
                <NavLink onClick={() => setCartOpen(cartOpen = !cartOpen)}
                         className={` ${cartOpen && 'active'}`}
                         to='/profile'>
                    <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
                </NavLink>
            </div>
        </div>
    )
}

export default HeaderNav;