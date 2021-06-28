import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogsData = [
  { name: "Sergey", id: 1 },
  { name: "Dima", id: 2 },
  { name: "Sveta", id: 3 },
  { name: "Oleg", id: 4 },
  { name: "Ivan", id: 5 },
  { name: "Nikolay", id: 6 },
]

let msgData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you" },
  { id: 3, message: "I am learning React" },
  { id: 4, message: "Good" },
  { id: 5, message: "YOYOYO!" },
]

let postsData = [
  { message: "hello my friend", likes: 12 },
  { message: "its my first post", likes: 15 },
];

ReactDOM.render(
  <App 
  dialogsData={dialogsData} 
  msgData={msgData} 
  postsData={postsData} />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
