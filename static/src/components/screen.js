import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Screen() {

  var [qValue, setQuestion] = useState("");
  var [aValue, setAnswer] = useState({personalInfo:{},answer:""});
  
  useEffect(() => {
    socket.on("screenAns", (input) => {
      setAnswer(input);
    });
    //console.log(aValue);
  }, [aValue]);

  useEffect(() => {
    socket.on("screenQs", (arrayValue) => {
      setQuestion(arrayValue);
     
    });
    console.log((qValue));
    

  }, [qValue]);


  return (
    <div>
      <h2>Screen</h2>
      <p>{}</p>
      <QuestionSingleMode qObject={qValue} /> 
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
  var a=(JSON.parse(JSON.stringify(props.qObject))[0]);
 console.log(a) 

 /*  var [questions,setQuestions]=useState(props.value.questions);
  var [renderQuestion,setRenderQuestion]=useState("")
  var [counter,setCounter]=useState(props.value.questions.length) */

/* useEffect(()=>{
 console.log(questions)
  setRenderQuestion(questions[0])
},[props.value.questions]) */
  
  
/*  function nextQuestion(){
  setQuestions(questions.splice(0,1))
  setRenderQuestion(questions[0])
  setCounter(prevCount=>prevCount--)
} */

  return(
    <div>
    <p>{}</p>
   {/*  <p>{JSON.stringify(questions)}</p>
      <h1>{renderQuestion}</h1>
      <button onClick={nextQuestion}>{counter ? "next" : "finish"}</button> */}
      
    </div>
  )
}