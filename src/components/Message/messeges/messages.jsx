import React from "react";
import s from "./../message.module.css";


const Message = (props) => {
    return (
            <div className={s.newMessages}>{props.text}</div>

    )
}


export default Message;