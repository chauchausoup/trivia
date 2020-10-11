import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import HomePage from './components/homePage'
import Chooser from './components/chooser'
import Questions from './components/questions'
import Answers from './components/answers'

function App() {

  return (
    <Router>
    <Switch>
     <Route exact path="/">
     <div className="App">
      <HomePage/>
    </div>
     </Route>
     <Route path="/mcq">
       <Chooser/>
     </Route>
     <Route path="/mcq/form">
       <Questions/>
     </Route>
     <Route path="/mcq/answer">
       <Answers/>
     </Route>
   </Switch>
    </Router>

  );
}

export default App;


