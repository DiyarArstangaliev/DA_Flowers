import React from "react";
import s from "./message.module.css";
import Item from "./dialogs/dialogs";
import Message from "./messeges/messages";

const Messages = (props) => {

    let dialogs = props.dialogsData.map( d => <Item name={d.name} id={d.id}/> )
    let messages = props.messagesData.map( t => <Message text={t.text}/>)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };

    let onPostChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.messages}>
            <div className={s.head}>
                <span>Служба поддержки</span>
            </div>
            <div className={s.dialogs}>
                <div className={s.items}>
                    { dialogs }
                </div>
                <div className={s.dialog}>
                    <div className={s.input}>
                        { messages }
                    </div>
                    <div className={s.newMessage}>
                        <textarea className={s.textarea} ref={newMessageElement}
                                  onChange={onPostChange} value={props.newMessageText}/>
                        <button className={s.button} onClick={ addMessage }> Отправить </button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Messages;