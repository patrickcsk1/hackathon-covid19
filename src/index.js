import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBftabisSl7u4fm8jh8Z9kXxX4U-9GIQiw",
  authDomain: "thani-hack.firebaseapp.com",
  databaseURL: "https://thani-hack.firebaseio.com",
  projectId: "thani-hack",
  storageBucket: "thani-hack.appspot.com",
  messagingSenderId: "222656514518",
  appId: "1:222656514518:web:8620a5bdead43ee4ff3c77",
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
