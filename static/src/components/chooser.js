import React from "react";
import { Button } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Questions from "./questions";
import Answers from "./answers";

function Choose() {
  return (
    <div>
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
