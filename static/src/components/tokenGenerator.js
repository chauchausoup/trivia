import React, { useState } from "react";

export default function TokenGenerator() {
  const [st, setST] = useState("");
  const [at, setAT] = useState("");
  const [maxUsers, setMaxUsers] = useState(0);
  const [et, setET] = useState({
    min45: false,
    hrs2: false,
    hrs4: false,
    hrs6: false,
  });

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
  const handleMin45 = (e) => {
    e.preventDefault();
    console.log("45 selected")
    setET((prevState) => {
    return { ...prevState,
      min45: true,
    }});
  };

  const handleHrs2 = (e) => {
    e.preventDefault();
    setET((prevState) => ({
      ...prevState,
      hrs2: true,
    }));
  };
  const handleHrs4 = (e) => {
    e.preventDefault();
    setET((prevState) => ({
      ...prevState,
      hrs4: true,
    }));
  };
  const handleHrs6 = (e) => {
    e.preventDefault();
    setET((prevState) => ({
      ...prevState,
      hrs6: true,
    }));
  };

  const submitHandler=(e)=>{
      e.preventDefault()
    console.log(st,at,maxUsers,et)
  }

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
      <label>45 mins</label>
      <input type="radio" name="min45" id="min45" onChange={handleMin45} />
      <br />
      <label>hrs2</label>
      <input type="radio" name="hrs2" id="hrs2" onChange={handleHrs2} />
      <br />
      <label>hrs4</label>
      <input type="radio" name="hrs4" id="hrs4" onChange={handleHrs4} />
      <br />
      <label>hrs6</label>
      <input type="radio" name="hrs6" id="hrs6" onChange={handleHrs6}  />
      <br />
      <br />
      <input type="submit" value="Submit"/>
    </form>
  );
}
