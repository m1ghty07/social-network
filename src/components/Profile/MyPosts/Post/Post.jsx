import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
      <div className={style.post}>
        <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"></img>
        {props.message}
        <div>
          <span>{props.like}Like</span>
        </div>
      </div> 
  );
};

export default Post;
