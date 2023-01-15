import React from "react";
import q from './questions.module.css';
import Accordion from "./accordion";

const Questions = (props) => {

    let accordion = props.accordionData.map( d => <Accordion title={d.title} content={d.content}/> )

  return (
      <div className={q.container}>
          <div></div>
          <div className={q.content}>
              <div className={q.head}>
                  Часто задоваемые вопросы
              </div>
              <div className={q.questions}>
                  { accordion }
              </div>
          </div>
      </div>

  )
}

export default Questions;