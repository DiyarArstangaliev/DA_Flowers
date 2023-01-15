import React from "react";
import acces from "./acces.module.css";
// import {NavLink} from "react-router-dom";
// import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import a1 from "./img/acces__logo.jpg";
import a2 from './img/acces2.jpg';
import a3 from './img/acces3.jpg';
import a4 from './img/acces4.jpg';
import a5 from './img/acces5.jpg';
import a6 from './img/acces6.jpg';
import a7 from './img/acces7.jpg';

const AccesItems = () => {
    return (
        <div className={acces.items}>
            {/*piony*/}
            <div className={acces.item} id="acces">
                <img src={a1} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a2} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a3} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a4} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a5} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a6} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
            <div className={acces.item} id="acces">
                <img src={a7} alt="acces"/>
                <div className={acces.name}>Наличие и цены узнавай у менеджера<br/>
                    {/*<NavLink className={acces.price} to='/*s'>*/}
                    {/*    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>*/}
                    {/*</NavLink>*/}
                </div>
            </div>
        </div>
    )
}

export default AccesItems;