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
    </div>
  );
}

/* function Tokener() {
  var history = useHistory();

  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(true);

  const tokenValidator = () => {
    //it checks if the token is valid or not
    //if the token is valid then it shows
    //this thing is done in server side

    if (tokenArray.includes(value)) {
      setFlag(false);
      console.log("yeah");
      history.push(`/mcq/answer/${value}/form2`);
    }
    //here basically answers no with single step data goes to screen
  };
  const inputChange = (e) => {
    /** some input is changed while inserting token 
    setValue(e.target.value);
  };
  

  return (
    <div>
      <p>Please insert the token given by your host:</p>
      <input type="text" onChange={inputChange} />
      <br />
      <input type="button" value="Go" onClick={tokenValidator} />
    </div>
  );
} */
