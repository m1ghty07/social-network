import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={props.postsData}/>
    </div>
  );
};

export default Profile;
