import { Button } from "antd";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Screen() {

  const [qValue, setQuestion] = useState({personalInfo:{},questions:[]});
  var [questions,setQuestions]=useState(qValue.questions);
  var [renderQuestion,setRenderQuestion]=useState("")
  var [counter,setCounter]=useState(questions.length-1)


  const [aValue, setAnswer] = useState({personalInfo:{},answer:""});

  useEffect(() => {
    socket.on("screenAns", (input) => {
      setAnswer(JSON.parse(input));
    });
    console.log(aValue);
  }, [aValue]);

  useEffect(() => {
    socket.on("screenQs", (arrayValue) => {
      setQuestion(prevState=>({
          ...prevState,
          personalInfo:JSON.parse(arrayValue).personalInfo,
          questions:JSON.parse(arrayValue).questions
      }));
    });
    console.log((qValue));
  }, [qValue]);

console.log(renderQuestion)

function nextQuestion(){

/*   console.log(qValue.questions)
  console.log(counter)
  console.log(questions)
  console.log(renderQuestion) */

  setQuestions(questions.splice(0,1))
  setRenderQuestion(questions[0])
  setCounter(counter--)
  
}
  return (
    <div>
      <h2>Screen</h2>
      <QuestionSingleMode value={renderQuestion} /> 
      <AnswerStack/>
      <button onClick={nextQuestion}>{counter ? "next" : "finish"}</button>
    </div>
  );
}

function AnswerStack(props) {
  return (
    <AnswerSingle/>
  );
}

function AnswerSingle(props){
  return(
    <div>
      <AnswerPhoto />
      <p>{}</p>
      <p>{}</p>
    </div>
  )
}
function AnswerPhoto(){
  return(
    <div></div>
  )
}


function QuestionSingleMode(props){
  return(
    <div>
      <h1>{props.value}</h1>
      
    </div>
  )
}