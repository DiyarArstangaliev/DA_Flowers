import React from "react";
import "./profile.css";
import "./adaptive.css";
import {NavLink} from "react-router-dom";

const Profile = () => {
  return (
   <div className='app-wrapper-content'>
       <div className='content-welcome'>
           Welcome to #1 flower shop
       </div>
       <div className='content-title'>
           Da Flowers
       </div>
       <div className='content-subtitle'>
           Соберём и доставим
           <br/> в любую точку Москвы и Московской области
       </div>
       <div className='content-button'>
           <NavLink to='/bouquets' className='content-button-text button'>
               Заказать
           </NavLink>
       </div>
   </div>
  )
};

export default Profile;