import React, { useState } from "react";
import { Radio, Input } from "antd";
import { useHistory } from "react-router-dom";

export default function TokenGenerator() {
  var history = useHistory();

  const [st, setST] = useState("");
  const [at, setAT] = useState("");
  const [maxUsers, setMaxUsers] = useState(0);
  const [etValue, setValue] = useState(1);

  const handleST = (e) => {
    e.preventDefault();
    setST(e.target.value);
  };
  const handleAT = (e) => {
    e.preventDefault();
    setAT(e.target.value);
  };
  const handleMaxUsers = (e) => {
    e.preventDefault();
    setMaxUsers(e.target.value);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/screen/`);
    console.log(st, at, maxUsers, etValue);
  };

  /* 
WORK_LEFT:
validating the input fields as per the specifications
*/

  return (
    <form onSubmit={submitHandler}>
      <label>ST:</label>
      <input type="text" placeholder="Setter Token" onChange={handleST} />
      <br />
      <label>AT:</label>
      <input type="text" placeholder="Answerer Token" onChange={handleAT} />
      <br />
      <label>Max No of Users:</label>
      <input type="text" placeholder="Max Users" onChange={handleMaxUsers} />
      <br />
      <label>Expiry Time:</label>
      <br />

      {/* here comes the antd radio selector */}

      <Radio.Group onChange={onChange} value={etValue}>
        <Radio style={radioStyle} value={"min45"}>
          45 minutes
        </Radio>
        <Radio style={radioStyle} value={"hrs2"}>
          2 hrs
        </Radio>
        <Radio style={radioStyle} value={"hrs4"}>
          4 hrs
        </Radio>
        <Radio style={radioStyle} value={"hrs6"}>
          6 hrs
        </Radio>
      </Radio.Group>

      <br />
      <br />
      <input type="submit" value="Lets Go..." />
    </form>
  );
}
