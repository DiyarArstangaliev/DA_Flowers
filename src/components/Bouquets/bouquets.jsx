import React from "react";
import bouq from "./bouquets.module.css";
import mono from "./mono_logo.JPG";
import sbor from "./sbor__logo.JPG";
import acces from "./acces__logo.jpg";
import fete from "./fete__bg.png";
import {NavLink} from "react-router-dom";

const Bouquets = () => {
    return (
        <div className={bouq.bouquets}>
            <div className={bouq.head}>
                <div className={bouq.title}>
                    Заголовок
                </div>
                <div className={bouq.subtitle}>
                    Subtitle
                </div>
            </div>
            <div className={bouq.items}>
                <NavLink className={bouq.item} to='/mono'>
                    <img src={mono} alt="mono"/>
                    <div className={bouq.name}>MONO</div>
                </NavLink>
                <NavLink className={bouq.item} to='/composie'>
                    <img src={sbor} alt="sbor"/>
                    <div className={bouq.name} >MIX</div>
                </NavLink>
                <NavLink className={bouq.item} to='/acces'>
                    <img src={acces} alt="acces"/>
                    <div className={bouq.name}>Аксессуары</div>
                </NavLink>
                <NavLink className={bouq.item} to='/profile'>
                    <img src={fete} alt="bag"/>
                    <div className={bouq.name}>Декорации</div>
                </NavLink>
            </div>
        </div>
    )
};

export default Bouquets;