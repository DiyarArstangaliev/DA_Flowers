import React, { useState } from 'react';
import q from './questions.module.css';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={q.question}>
            <div className={q.title} onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={q.answer}>{content}</div>}
        </div>
    );
};

export default Accordion;