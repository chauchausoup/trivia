import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Answers() {
  return (
    <div>
      <Form2/>
    </div>
  );
}

function Form2() {
  var history = useHistory();

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmission = () => {
   console.log(input)
   console.log(typeof(localStorage.getItem('personalInfo')))
      var aValue=JSON.stringify({
        "personalInfo":JSON.parse(localStorage.getItem('personalInfo')),
        "answer":input
              });
    socket.emit("answer", aValue);
  };

  return (
    <div>
      <p>Answer:</p>
      <input type="text" onChange={handleInput} />
      <br />
      <input type="button" value="Go" onClick={handleInputSubmission} />
      <br/>
      <br/>
      <br/>
      <button onClick={()=>(history.push(`/mcq/`))}>Home</button>

    </div>
  );
}


