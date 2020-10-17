import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/homePage";
import Chooser from "./components/chooser";
import Questions from "./components/questions";
import Answers from "./components/answers";
import Screen from './components/screen';
import Thank from './components/thank'
import TokenInput from './components/tokenInput';

import { ScreenButtonProvider } from "./context/ScreenButtonContext";
import {LoginProvider} from "./context/LoginContext";


function App() {
  return (
    <LoginProvider>
      <ScreenButtonProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <HomePage />
            </div>
          </Route>
          <Route path="/screen">
            <Screen/>
          </Route>
          {/* <Route path="/screen/">
            <TokenInput/>
          </Route> */}
          <Route path="/mcq">
            <Chooser />
          </Route>
          <Route path="/thank">
            <Thank/>
          </Route>
          <Route path="/mcq/form">
            <Questions />
          </Route>
          <Route path="/mcq/answer">
            <Answers />
          </Route>
        </Switch>
      </Router>
      </ScreenButtonProvider>
    </LoginProvider>
  );
}

export default App;
