import React,{useContext} from "react";
import { Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {LoginContext} from '../context/LoginContext';

import Questions from "./questions";
import Answers from "./answers";
import Head from "./head";
import { tokenArray } from "../data/tkn";


function TokenText(){
  return(
    <div>
      <p>Token is:</p><h2>{tokenArray[0]}</h2>
    </div>
  )
  }

function Choose() {
//const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  return (
    <div>
      <Head />
      {localStorage.getItem('setter')? <TokenText/>:<p></p>}
      <p>Please Select a mode.</p>
      <Link to="/mcq/form">
        <Button default>Setter</Button>
      </Link>
      <Link to="/mcq/answer">
        <Button default>Answerer</Button>
      </Link>
    </div>
  );
}

export default function Chooser() {
  return (
    <Router>
      <Switch>
        <Route exact path="/mcq">
          <Choose />
        </Route>
        <Route exact path="/mcq/form">
          <Questions />
        </Route>
        <Route exact path="/mcq/answer">
          <Answers />
        </Route>
      </Switch>
    </Router>
  );
}
