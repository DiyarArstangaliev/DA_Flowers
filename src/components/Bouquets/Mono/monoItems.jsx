import React from "react";
import mono from "./mono.module.css";
import pion1 from "./pion/pion1.jpg";
import pion2 from "./pion/pion2.jpg";
import pion3 from "./pion/pion3.jpg";
import pion15 from "./pion/sara15.JPG";
import pion17 from "./pion/sara17.JPG";
import pion19 from "./pion/sara19.JPG";
import coral29 from "./pion/coral29.JPG";
import malin11 from "./pion/malin11.JPG";
import red15 from "./pion/red15.jpg";
import tulp101 from "./tulpan/tulp__red101.JPG";
import tulp75 from "./tulpan/tulp__whit75.JPG";
import tulp41 from "./tulpan/tulp__mix41.JPG";
import tulp39 from "./tulpan/tulp__yellow39.JPG";
import tulp29 from "./tulpan/tulp__fiol29.JPG";
import gort5 from "./gortenz/gort__mix5.jpg";
import gort9 from "./gortenz/gort__pink9.JPG";
import gort11 from "./gortenz/gort__pink11.JPG";
import gort13 from "./gortenz/gort__white13.JPG";
import bubl101 from "./rosePiana/bombastik101.JPG";
import ohara21 from "./rosePiana/pionRose21.JPG";
import pionRose31 from "./rosePiana/pionRose31.JPG";
import dghul35 from "./rosePiana/pionRose35.JPG";
import bomb91 from "./rosePiana/pionRose91.JPG";
import pionRose101 from "./rosePiana/pionRose101.JPG";
import pionRose149 from "./rosePiana/pionRose149.JPG";
import pionRoseEvk27 from "./rosePiana/pionRoseEvk27.JPG";
import redPiano9 from "./rosePiana/redPiano9.jpg";
import redPiano25 from "./rosePiana/redPiano25.jpg";
import pink25 from "./rose/pinkRose25.JPG";
import red35 from "./rose/redRose35.jpg";
import persik25 from "./rose/rosePersik25.JPG";
import red77 from "./rose/roseRed77.jpg";
import white77 from "./rose/roseWhite77.jpg";
import roseMix101 from "./rose/roseMix101.JPG";
import {NavLink} from "react-router-dom";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const MonoItems = () => {
    return (
        <div className={mono.items}>
            {/*piony*/}
            <div className={mono.item} id="pion">
                <img src={pion1} alt="mono"/>
                <div className={mono.name}>35 розовых пионов <br/>
                    «Sarah Bernhardt»</div>
                <NavLink className={mono.price} to='/*s'>
                    17000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pion2} alt="mono"/>
                <div className={mono.name}>25 розовых пионов <br/>
                    «Sarah Bernhardt»</div>
                <NavLink className={mono.price} to='/*s'>
                    12500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pion3} alt="mono"/>
                <div className={mono.name}>75 белых пионов <br/>
                    «Duchesse de Nemours»</div>
                <NavLink className={mono.price} to='/*s'>
                    35000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pion15} alt="mono"/>
                <div className={mono.name}>15 розовых пионов <br/>
                    «Sarah Bernhardt»</div>
                <NavLink className={mono.price} to='/*s'>
                    8000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={coral29} alt="mono"/>
                <div className={mono.name}>29 кораловых пионов <br/>
                    «Coral Sunset»</div>
                <NavLink className={mono.price} to='/*s'>
                    16000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pion17} alt="mono"/>
                <div className={mono.name}>17 розовых пионов <br/>
                    «Sarah Bernhardt»</div>
                <NavLink className={mono.price} to='/*s'>
                    9000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={red15} alt="mono"/>
                <div className={mono.name}>15 бордовый пионов<br/>
                    «Red Charm»</div>
                <NavLink className={mono.price} to='/*s'>
                    9000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pion19} alt="mono"/>
                <div className={mono.name}>19 розовых пионов с эвкалиптом<br/>
                    «Sarah Bernhardt»</div>
                <NavLink className={mono.price} to='/*s'>
                    10500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={malin11} alt="mono"/>
                <div className={mono.name}>11 малиновых пионов<br/>
                    «Alexander Fleming»</div>
                <NavLink className={mono.price} to='/*s'>
                    6000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            {/*Tulpans*/}
            <div className={mono.item} id="tulpan">
                <img src={tulp101} alt="mono"/>
                <div className={mono.name}>101 красный тюльпан</div>
                <NavLink className={mono.price} to='/*s'>
                    11000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={tulp75} alt="mono"/>
                <div className={mono.name}>75 белых тюльпанов</div>
                <NavLink className={mono.price} to='/*s'>
                    8500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={tulp41} alt="mono"/>
                <div className={mono.name}>41 тюльпан MIX</div>
                <NavLink className={mono.price} to='/*s'>
                    4900р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={tulp39} alt="mono"/>
                <div className={mono.name}>39 желтых тюльпанов</div>
                <NavLink className={mono.price} to='/*s'>
                    4600р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={tulp29} alt="mono"/>
                <div className={mono.name}>29 фиолетовых тюльпанов</div>
                <NavLink className={mono.price} to='/*s'>
                    3500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            {/*Gortenz*/}
            <div className={mono.item} id="gortenz">
                <img src={gort5} alt="mono"/>
                <div className={mono.name}>5 гортензий MIX</div>
                <NavLink className={mono.price} to='/*s'>
                    3200р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={gort9} alt="mono"/>
                <div className={mono.name}>9 розовых гортензий</div>
                <NavLink className={mono.price} to='/*s'>
                    5800р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={gort11} alt="mono"/>
                <div className={mono.name}>11 розовых гортензий</div>
                <NavLink className={mono.price} to='/*s'>
                    7000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={gort13} alt="mono"/>
                <div className={mono.name}>13 белых гортензий</div>
                <NavLink className={mono.price} to='/*s'>
                    8200р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            {/*pionyRose*/}
            <div className={mono.item} id="pionRose">
                <img src={bubl101} alt="mono"/>
                <div className={mono.name}>101 пионовидная роза <br/>
                    «Misty Bubbles»</div>
                <NavLink className={mono.price} to='/*s'>
                    35000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={ohara21} alt="mono"/>
                <div className={mono.name}>21 пионовидная роза<br/>
                    «Pink O'Hara»</div>
                <NavLink className={mono.price} to='/*s'>
                    7300р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pionRose31} alt="mono"/>
                <div className={mono.name}>31 пионовидная роза<br/>
                    «Miss Bombastic»</div>
                <NavLink className={mono.price} to='/*s'>
                    10500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={dghul35} alt="mono"/>
                <div className={mono.name}>35 пионовидных роз<br/>
                    «Juliet»</div>
                <NavLink className={mono.price} to='/*s'>
                    13000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={bomb91} alt="mono"/>
                <div className={mono.name}>91 пионовидная роза<br/>
                    «Madam Bombastic»</div>
                <NavLink className={mono.price} to='/*s'>
                    32000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pionRose101} alt="mono"/>
                <div className={mono.name}>101 пионовидная роза<br/>
                    «Madam Bombastic»</div>
                <NavLink className={mono.price} to='/*s'>
                    35000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pionRose149} alt="mono"/>
                <div className={mono.name}>149 пионовидных роз<br/>
                    «White O'Hara»</div>
                <NavLink className={mono.price} to='/*s'>
                    50000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={pionRoseEvk27} alt="mono"/>
                <div className={mono.name}>27 пионовидных роз<br/>
                    «Juliet»</div>
                <NavLink className={mono.price} to='/*s'>
                    10500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={redPiano9} alt="mono"/>
                <div className={mono.name}>9 пионовидных роз<br/>
                    «Red Piano»</div>
                <NavLink className={mono.price} to='/*s'>
                    3000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={redPiano25} alt="mono"/>
                <div className={mono.name}>25 пионовидных роз<br/>
                    «Red Piano»</div>
                <NavLink className={mono.price} to='/*s'>
                    8500р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            {/*Rouse1*/}
            <div className={mono.item} id="rose">
                <img src={pink25} alt="mono"/>
                <div className={mono.name}>25 розовых роз</div>
                <NavLink className={mono.price} to='/*s'>
                    2700р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={red35} alt="mono"/>
                <div className={mono.name}>35 красных роз</div>
                <NavLink className={mono.price} to='/*s'>
                    3800р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={persik25} alt="mono"/>
                <div className={mono.name}>25 персиковых роз</div>
                <NavLink className={mono.price} to='/*s'>
                    3200р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={red77} alt="mono"/>
                <div className={mono.name}>77 красных роз</div>
                <NavLink className={mono.price} to='/*s'>
                    8400р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={white77} alt="mono"/>
                <div className={mono.name}>77 белых роз</div>
                <NavLink className={mono.price} to='/*s'>
                    8400р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
            <div className={mono.item}>
                <img src={roseMix101} alt="mono"/>
                <div className={mono.name}>101 роза MIX</div>
                <NavLink className={mono.price} to='/*s'>
                    10000р.
                    <FontAwesomeIcon icon={faShoppingCart} size="1x"/>
                </NavLink>
            </div>
        </div>
    )
}

export default MonoItems;