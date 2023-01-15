import React from "react";
import s from "./contact.module.css";

const Contact = () => {
    let newName = React.createRef();
    let newNumber = React.createRef();
    let newComments = React.createRef();

    let addName = () => {
        let name = newName.current.value;
        let number = newNumber.current.value;
        let comments = newComments.current.value;
        alert('Привет ' + name +', твой номер ' + number + ', твой комментарий ' + comments);
    };

    let clearName = () => {
        newName.current.value = '';
        newNumber.current.value = '';
        newComments.current.value = '';
    };

  return (
   <div className={s.window}>
       <div className={s.title}>
           <div>Не хочешь писать сам? </div>
           <div> Оставь свои предпочтения или просто номер телефона и мы сразу перезвоним!</div>
       </div>
       <div className={s.name}>
           NAME:
           <textarea className={s.textarea} ref={ newName } />
       </div>
       <div className={s.number}>
           NUMBER:
           <textarea className={s.textarea} ref={ newNumber } />
       </div>
       <div className={s.text}>
           COMMENTS:
           <textarea className={s.textarea} ref={ newComments } />
       </div>
       <div className={s.button}>
           <button onClick={ addName } className='massage-button-text button'>
               Отправить
           </button>
           <button onClick={ clearName } className='massage-button-text button'>
               Очистить
           </button>
       </div>
   </div>
  )
};

export default Contact;