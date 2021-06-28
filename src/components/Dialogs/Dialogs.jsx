import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogElements = props.dialogsData.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let postsElements = props.msgData.map((post) => {
    return <Message message={post.message} />;
  }); 

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogElements}
      </div>
      <div className={style.messages}>
         {postsElements}
      </div>
    </div>
  );
};

export default Dialogs;
