import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import {PageHeader,Carousel,Button,Descriptions} from 'antd';
import 'antd/dist/antd.css';
import '../index.css'

import Chooser from './chooser';



const contentStyle = {
    height: '60vh',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    background: '#364d79',
  };
  

const HomePage = ()=>{
var history = useHistory();

  function handleMCQ(){
    //will be taken to a new page
    //user will choose in between setter or answerer
   history.push("/mcq");
  }

  function handleCommingSoon(){
    alert('Comming Soon... Please try other features...')

  }
   return(
     <Router>

     
       <div className="homepage">
      
    <PageHeader
        className="site-page-header"
        title="Trivia"
    />


    <Carousel effect="fade" autoplay>
    <div>
      <h1 style={contentStyle}>Trivia : Where minds come together...</h1>
    </div>
    <div>
      <h1 style={contentStyle}>Fill ins</h1>
    </div>
    <div>
      <h1 style={contentStyle}>MCQs</h1>
    </div>

  </Carousel>


 <Link to="/mcq"><Button default onClick={handleMCQ}>MCQ</Button></Link> 
 <Button default onClick={handleCommingSoon}>Fill ins..</Button> 
 <Button default onClick={handleCommingSoon}>Gengiz Khan</Button>

 <PageHeader
        className="site-page-footer"
        title="All Rights Reserved"
  >
     <Descriptions size="medium" column={2}>
        <Descriptions.Item>Perseverance</Descriptions.Item>
        <Descriptions.Item>Pulchowk Campus</Descriptions.Item>
        <Descriptions.Item>ITBIE </Descriptions.Item>
        <Descriptions.Item>Lalitpur</Descriptions.Item>
        <Descriptions.Item>Nepal</Descriptions.Item>
        <Descriptions.Item></Descriptions.Item>
      </Descriptions>
    </PageHeader>

   </div>
   </Router>
   );
}
export default HomePage;


