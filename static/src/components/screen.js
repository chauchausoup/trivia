import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import QuestionSingleMode from './questionSingleMode'
import AnswerSingleMode from './AnswerSingleMode'

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Screen() {
  var [qValue, setQuestion] = useState({ personalInfo: {}, questions: [] });
  var [aValue, setAnswer] = useState({ personalInfo: {}, answer: "" });

  useEffect(() => {
    socket.on("screenAns", (input) => {
      setAnswer(input);
    });
    //console.log(aValue);
  }, [aValue]);

  useEffect(() => {
    socket.on("screenQs", (arrayValue) => {
      setQuestion(JSON.parse(arrayValue));
    });
  }, [qValue]);

  return (
    <div>
      <h2>Screen</h2>
      <QuestionSingleMode value={qValue} />
      <AnswerSingleMode value={aValue}/>
    </div>
  );
}
