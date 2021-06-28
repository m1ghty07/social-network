import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  console.log(props);

  let postsElements = props.postsData.map((post) => {
    return <Post message={post.message} like={post.likes} />;
  });

  return (
    <div className={style.postsBlock}>
     <h3>My posts</h3> 
      <div>
        <div>
     <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
