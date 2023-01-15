import React from "react";
import mono from "./mono.module.css";
import { Link } from "react-scroll";
import acces from "../accessuor/acces.module.css";
import {NavLink} from "react-router-dom";

const MonoHead = () => {
    return (
        <div className={mono.head}>
            <NavLink to='/bouquets' className={acces.back}>
                <div className={acces.backBut}></div>
                <div className={acces.backText}>Назад</div>
            </NavLink>
            <div className={mono.title}>
                МОНОБУКЕТЫ
            </div>
            <div className={mono.subtitle}>
                Цена может отличаться, уточни у менеджера
            </div>
            <div className={mono.scroll}>
                <Link
                    activeClass="active"
                    to="pion"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={2000}
                >Пионы</Link>
                <Link
                    activeClass="active"
                    to="tulpan"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >Тюльпаны</Link>
                <Link
                    activeClass="active"
                    to="gortenz"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >Гортензии</Link>
                <Link
                    activeClass="active"
                    to="pionRose"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >Пионовидные</Link>
                <Link
                    activeClass="active"
                    to="rose"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={1000}
                >Розы</Link>
                <Link className={mono.scroll__back}
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

export default MonoHead;