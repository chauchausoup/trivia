import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { tokenArray } from "../data/tkn";

export default function Tokener(props) {
  var history = useHistory();
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(true);

  const tokenValidator = () => {
    console.log(props.mode)
    if (tokenArray.includes(value)) {
      setFlag(false);
      console.log("yeah");
      history.push(`/${props.mode}/`);
    }
    
  };
  const inputChange = (e) => {
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
}
