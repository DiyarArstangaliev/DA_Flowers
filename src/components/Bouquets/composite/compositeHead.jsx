import React from "react";
import composite from "./composite.module.css";
import { Link } from "react-scroll";
import acces from "../accessuor/acces.module.css";
import {NavLink} from "react-router-dom";

const CompositeHead = () => {
    return (
        <div className={composite.head}>
            <NavLink to='/bouquets' className={acces.back}>
                <div className={acces.backBut}></div>
                <div className={acces.backText}>Назад</div>
            </NavLink>
            <div className={composite.title}>
                СБОРНЫЕ БУКЕТЫ
            </div>
            <div className={composite.subtitle}>
                Цена может отличаться, уточни у менеджера
            </div>
            <div className={composite.scroll}>
                <Link className={composite.scroll__back}
                    activeClass="active"
                    to="back"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >вверх</Link>
            </div>
        </div>
    )
}

export default CompositeHead;