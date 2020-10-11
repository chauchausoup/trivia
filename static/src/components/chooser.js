import React from 'react'
import {Button} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


export default function Chooser() {
    var history = useHistory();

    function handleForm(){
        history.push('/form')
    }
    function handleAnswer(){
        history.push('/answer')
    }
    return (
        <Router>
            <Link to="/mcq/form"><Button default onClick={handleForm}>Setter</Button></Link> 
            <Link to="/mcq/answer"><Button default onClick={handleAnswer}>Answerer</Button></Link> 
        </Router>

    )
}
