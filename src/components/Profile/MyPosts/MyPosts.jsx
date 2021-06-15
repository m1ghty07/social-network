import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="hello my friend" like='14'/>
        <Post message="its my first post" like='22'/>
      </div>
    </div>
  );
};

export default MyPosts;
