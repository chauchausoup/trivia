import React, { useState } from "react";
import { Button, PageHeader, Modal } from "antd";
import Authen from "./authen";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router,
  Switch,
  Link,
  Route } from "react-router-dom";
import HomePage from './homePage'
import TokenInput from './tokenInput';

export default function Head2(){
  var history =useHistory();

/* function screenButtonHandler(e){
  e.preventDefault();
  history.push(`/token/`)
  window.location.reload()
} */
  return (
    <Router>

   
      <div className="head">
         {/*  <Switch>
          <Route path="/screen">
            <TokenInput/>
          </Route>
          </Switch> */}
        

        <PageHeader
          title="Trivia"
          ghost={true}
          style={{
            backgroundColor: "lightgray",
            fontStyle: "italic",
          }}
          extra={[

            <Authen className="authenButton"/>,
            <Link to="/screen"  target="_blank">
            <Button type="primary" className="screenButton">Screen</Button>
            </Link>,
            <Link to="/mcq"  target="_blank">
            <Button type="primary" className="chooserButton">App</Button>
            </Link>
          ]}
        />

      </div>
   
    </Router>

  );
}
