import React from "react";
import style from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
  <div>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"></img>
      </div>
      <div className={style.descriptionBlock}>Ava + profile</div>
  </div>
  );
};

export default ProfileInfo;
