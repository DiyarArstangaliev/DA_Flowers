import React from "react";
import composite from "./composite.module.css";
import {NavLink} from "react-router-dom";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import sbor1 from "./sbor/sbor1.JPG";
import sbor2 from "./sbor/sbor2.JPG";
import sbor3 from "./sbor/sbor3.JPG";
import sbor8 from "./sbor/sbor8.JPG";
import sbor9 from "./sbor/sbor9.png";

const CompositeItems = () => {
    return (
        <div className={composite.items}>
            {/*piony*/}
            <div className={composite.item} id="pion">
                <img src={sbor1} alt="mono"/>
                <div className={composite.name}>Букет из 6 позиций <br/>
                    «DaFlowers»</div>
                <NavLink className={composite.price} to='/*s'>
                    15000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={composite.item} id="pion">
                <img src={sbor2} alt="mono"/>
                <div className={composite.name}>Букет из 4 позиций <br/>
                    «DaFlowers»</div>
                <NavLink className={composite.price} to='/*s'>
                    10000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={composite.item} id="pion">
                <img src={sbor3} alt="mono"/>
                <div className={composite.name}>Букет из 5 позиций <br/>
                    «DaFlowers»</div>
                <NavLink className={composite.price} to='/*s'>
                    13000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={composite.item} id="pion">
                <img src={sbor8} alt="mono"/>
                <div className={composite.name}>Букет из 2 позиций <br/>
                    «DaFlowers»</div>
                <NavLink className={composite.price} to='/*s'>
                    5000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={composite.item} id="pion">
                <img src={sbor9} alt="mono"/>
                <div className={composite.name}>Букет из 7 позиций <br/>
                    «DaFlowers»</div>
                <NavLink className={composite.price} to='/*s'>
                    7000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
        </div>
    )
}

export default CompositeItems;