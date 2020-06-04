import React from "react";
import s from "./Posts.module.css";
import ava from "../../../navBar/foto_1.jpeg";

const Posts = (props) => {

  return (
          <div className={s.item}>
            <img className={s.ava} src={ava} alt="avatar"/>
            { props.message }
            <div className="">
              <span> { props.likecounts } like</span>
            </div>
          </div>
  )
};

export default Posts;