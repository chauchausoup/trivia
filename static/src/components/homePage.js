import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Carousel, Button, PageHeader, Layout, Modal, Drawer } from "antd";
import Head2 from "./head";
import TokenGenerator from "./tokenGenerator";

const { Footer } = Layout;

const contentStyle = {
  height: "60vh",
  color: "#fff",
  lineHeight: "50vh",
  textAlign: "center",
  background: "#364d79",
};

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  function alertCompo() {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  };

  function handleCommingSoon() {
    alert("Comming Soon... Please try other features...");
  }

  return (
    <div className="homepage">
      <Head2 />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <TokenGenerator />
      </Drawer>

      <Button id="btn" onClick={alertCompo}>
        Ask Us Anything
      </Button>

      <br />

      <Button onClick={handleCommingSoon} id="btn">
        Quiz
      </Button>

      <br />

      <Button onClick={handleCommingSoon} id="btn">
        Gengiz Khan
      </Button>

      <br />

      <Layout>
        <Footer className="site-page-footer">All rights reserved</Footer>
      </Layout>
    </div>
  );
}

/* export default function homePage() {
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
} */
