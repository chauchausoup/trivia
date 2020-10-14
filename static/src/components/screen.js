import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "localhost:5000";
let socket = io(ENDPOINT);

export default function Screen() {
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    socket.on("screenAns", (input) => {
      setAnswer(input);
    });
    console.log(answer);
  }, [answer]);

  useEffect(() => {
    socket.on("screenQs", (arrayValue) => {
      setQuestion(arrayValue);
    });
    console.log(question);
  }, [question]);

  return (
    <div>
      <p>this is screen</p>
      {question.map((qs) => {
        return (
          <div>
            <h1>{qs}</h1>
          </div>
        );
      })}
      <Ans value={answer} />
    </div>
  );
}

function Ans(props) {
  return (
    <div>
      <p>{props.value}</p>
    </div>
  );
}
