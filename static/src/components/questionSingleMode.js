import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import {ScreenButtonContext} from '../context/ScreenButtonContext'


export default function QuestionSingleMode(props) {
    var  [buttonClicked, setButtonClicked] = useContext(ScreenButtonContext);
    
    var history = useHistory();
    var [questions, setQuestions] = useState([]); //array
    var [counter, setCounter] = useState(0); //integer
    
  
    useEffect(() => {
      setButtonClicked(false)
      setQuestions(props.value.questions)
      setCounter(props.value.questions.length)
      console.log("Question chages")
    }, [props.value.questions]); //[] this is for first render
  
  
  
    function nextQuestion() {
      setButtonClicked(true)
      console.log("button hit")
      setQuestions(questions.filter((e) => e !==questions[0]));
      console.log(questions)
      setCounter(prev=>--prev);
      console.log(counter)
      if(counter === 1){
        history.push(`/thank/`)
      }
    }
  
  
    return (
      <div>
        <h1>{questions[0]}</h1>
        <button onClick={nextQuestion}>{counter>1 ? "next" : "finish"}</button>
      </div>
    );
  }