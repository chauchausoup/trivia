import React, { useContext, useState } from "react";
import Head from "./head";
import { LoginContext } from "../context/LoginContext";

import { useHistory } from "react-router-dom";

//import { tokenGenerator } from "../algo/Random";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";

let socket = io(ENDPOINT);

export default function Questions() {
  var history = useHistory();
  const [textAreaValue, setTextAreaValue] = useState("");
  //const [showToken,setShowToken] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  function textAreaChangeHandler(e) {
    e.preventDefault();
    setTextAreaValue(e.target.value);
    //console.log(textAreaValue);
  }

  function checkLogin() {
    //if login then ok gets the token id for users to follow up
    //if not then Shows up the modal of antd to login for the user
    //verify the questions
    if (localStorage.getItem("setter")) {
      history.push(`/mcq/`);
      //console.log(tokenArray)
      var arrayValue = textAreaValue.split(/\n/);

      console.log(arrayValue); //this value will be going to the screen one by one
      /* to screen */
      console.log(typeof(localStorage.getItem('personalInfo')))
      var qValue=JSON.stringify({
        "personalInfo":JSON.parse(localStorage.getItem('personalInfo')),
        "questions":arrayValue
              });
              console.log(typeof(qValue))
              console.log(qValue)
             

      socket.emit("questions", (qValue));
      
    } else {
      alert("Please login !");
    }
  }

  return (
    <div>
      <Head />

      <p>
        Please type your questions ending in "?"{" "}
        <strong>(one line each)</strong>
      </p>
      <textarea
        name="questions"
        id="qTextArea"
        cols="30"
        rows="10"
        onChange={textAreaChangeHandler}
      ></textarea>
      <br />
      <input type="button" value="Go" onClick={checkLogin} />
    </div>
  );
}
