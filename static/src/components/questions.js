import React, { useContext, useState } from "react";
import Head from "./head";
import { LoginContext } from "../context/LoginContext";

import { useHistory } from "react-router-dom";

//import { tokenGenerator } from "../algo/Random";





export default function Questions() {
  var history = useHistory();
  const [textAreaValue, setTextAreaValue] = useState("");
//const [showToken,setShowToken] = useState(false);

const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  function textAreaChangeHandler(e) {
    e.preventDefault();
    setTextAreaValue(e.target.value);
  }

  function checkLogin() {
    //if login then ok gets the token id for users to follow up
    //if not then Shows up the modal of antd to login for the user
    //verify the questions
    if (localStorage.getItem('setter')) {
      console.log(textAreaValue);
      history.push(`/mcq/`);
      //console.log(tokenArray)
      
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

