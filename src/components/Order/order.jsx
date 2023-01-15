import React from "react";
import or from "./order.module.css";
import inst from "./inst.png";
import wa from "./whatsapp.png";
import tg from "./tg.png"

//import {NavLink} from "react-router-dom";

function Order() {
    return (
        <div className={or.content}>
            <div></div>
            <div>
                <div className={or.text}>Как сделать заказ</div>
                <div className={or.social}>
                    Напишите или позвоните в <br/>
                    <a href="https://www.instagram.com/da.flwrs/" target="_blank">
                        <img src={inst} alt=""/> direct
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <img src={wa} alt=""/> WhatsApp
                    </a>
                    <a href="https://web.telegram.org/" target="_blank">
                        <img src={tg} alt=""/> Telegram
                    </a>
                </div>
                <div className={or.contact}>
                    Мы выслушаем тебя<br/>
                    Обсудим индивидуальные предпочтения<br/>
                    Определимся со временем и адресом
                </div>
                <div className={or.contact}>
                    Курьер доставит букет в любое место и время
                </div>
            </div>
        </div>
    )
}

export default Order;