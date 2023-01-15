import React from "react";
import acces from "./acces.module.css";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";

const AccesHead = () => {
    return (
        <div className={acces.head}>
            <NavLink to='/bouquets' className={acces.back}>
                <div className={acces.backBut}></div>
                <div className={acces.backText}>Назад</div>
            </NavLink>
            <div className={acces.title}>
                Аксессуары для декора
            </div>
            <div className={acces.subtitle}>
                Цена может отличаться, уточни у менеджера
            </div>
            <div className={acces.scroll}>
                <Link className={acces.scroll__back}
                    activeClass="active"
                    to="back"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >Вверх</Link>
            </div>
        </div>
    )
}

export default AccesHead;