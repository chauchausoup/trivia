import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from "react-router-dom";
import { ScreenButtonContext } from '../context/ScreenButtonContext';

  
export default  function AnswerSingleMode(props) {
    var  [buttonClicked, setButtonClicked] = useContext(ScreenButtonContext);
    const [answerArray,setAnaswerArray]=useState([])
    
    useEffect(() => {
        setAnaswerArray([...answerArray,{
            personalInfo:props.value.personalInfo,
            answer:props.value.answer
        }])
       setButtonClicked(false)
        console.log("Answer added")
      }, [props.value.answer]); //[] this is for first render
    
      useEffect(()=>{
        if(buttonClicked){
            setAnaswerArray([])
        }
      },[buttonClicked])
      
    return (
      <div>
        <ul>{answerArray.map(item=>(
            <li key={item.personalInfo.googleId}>{item.answer}</li>
        ))}</ul>
      </div>
    );
  }

  