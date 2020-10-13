import React, { useState } from "react";
import { Button, PageHeader, Modal } from "antd";
import Authen from "./authen";
import { GoogleLogin } from "react-google-login";

export default function Head() {
  const [visibility, setVisibility] = useState(false);

  function showPopUp() {
    setVisibility(true);
  }
  function handleClose() {
    setVisibility(false);
  }
  function handleRetry() {
    setVisibility(true);
  }

  return (
    <div>
      <div className="head">
        <PageHeader
          title="Trivia"
          ghost={true}
          style={{
            backgroundColor: "lightgray",
            fontStyle: "italic",
          }}
          extra={[<Authen/>]}
        />
      </div>
    </div>
  );
}
