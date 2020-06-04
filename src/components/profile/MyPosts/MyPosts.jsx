import React from "react";
import prof from "./myPosts.module.css";
import Posts from "./post";

const MyPosts = () => {
  return (
      <div className={prof.myPosts}>
        My posts
        <div>
          New post
          <input type="text"/>
          <button>New Post</button>
          <button>Delete</button>
        </div>
        <div className={prof.post}>
          <Posts message="Hi, how are you?" likecounts="15"/>
          <Posts message="It's my first post!!!" likecounts="20"/>
        </div>
      </div>
  )
};

export default MyPosts;