import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import Chooser from "./chooser";

import {Carousel, Button, Layout} from "antd";
const {Header,Footer} = Layout;



const contentStyle = {
  height: "60vh",
  color: "#fff",
  lineHeight: "50vh",
  textAlign: "center",
  background: "#364d79",
};

const header={

  color: "white"

}

const HomePage = () => {
  function handleCommingSoon() {
    alert("Comming Soon... Please try other features...");
  }
  return (
    <div className="homepage">
    <Layout>

   
      <Header className="site-page-header" style={header}>Trivia</Header>

      <Carousel effect="fade" autoplay>
        <div>
          <h1 style={contentStyle}>Trivia : Where minds come together...</h1>
        </div>
        <div>
          <h1 style={contentStyle}>Fill ins</h1>
        </div>
        <div>
          <h1 style={contentStyle}>MCQs</h1>
        </div>
      </Carousel>

      <Link to="/mcq">
        <Button id = "btn">MCQ</Button>
      </Link>
      <br/>
      <Link>
      <Button  onClick={handleCommingSoon} id="btn">
        Fill ins..
      </Button>
      </Link>
      <br/>

      <Link>
      <Button onClick={handleCommingSoon} id = "btn">
        Gengiz Khan
      </Button>
      </Link>
      
      <br/>
      

      <Footer className="site-page-footer" >All rights reserved</Footer>
      </Layout>
    </div>
  );
};

export default function homePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <HomePage />
          </div>
        </Route>
        <Route path="/mcq">
          <Chooser />
        </Route>
      </Switch>
    </Router>
  );
}
