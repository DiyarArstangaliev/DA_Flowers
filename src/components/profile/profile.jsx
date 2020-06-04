import React from "react";
import prof from "./profile.module.css";
import MyPosts from "./MyPosts";

const Profile = () => {
  return (
    <div className={prof.content}>
      <div className={prof.img}>
        <img src="https://cdn.pixabay.com/photo/2020/05/06/10/52/landscape-5137147_960_720.jpg" alt=""/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
};

export default Profile;