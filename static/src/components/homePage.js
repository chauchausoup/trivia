import React,{useState} from 'react';
import {PageHeader,Carousel,Button} from 'antd';
import 'antd/dist/antd.css';
import '../index.css'



const contentStyle = {
    height: '60vh',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    background: '#364d79',
  };
  

const HomePage = ()=>{
   return(
       <>
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
  <div className="setter-button">
  </div>
    <Button default>Setter</Button>
  <div className="answerer-button">
    <Button default>Answerer</Button>
  </div>
</>
   )
}
export default HomePage;


