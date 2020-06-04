import React from "react";
import headNav from "./header.module.css";

const HeaderNav = () => {
  return (
    <div className={headNav.headerNav}>
      <div className={`${headNav.link} ${headNav.active}`}>Home</div>
      <div className={headNav.link}>Message</div>
      <div className={headNav.link}>Notification</div>
      <div className={headNav.link}>
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
  )
}

export default HeaderNav;