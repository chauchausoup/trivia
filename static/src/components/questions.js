import React from 'react'
import Head from './head'
import {tokenGenerator} from '../algo/Random'

export default function Questions() {
    function checkLogin(){
        //if login then ok gets the token id for users to follow up
        //if not then Shows up the modal of antd to login for the user
        //verify the questions
        console.log()
    }

   
    return (

        <div>
        <Head/>
        <p>Please type your questions ending in "?" <strong>(one line each)</strong></p>
            <textarea name="questions" id="qTextArea" cols="30" rows="10"></textarea>
            <br/>
            <input type="button" value="Go" onClick={checkLogin}/>

        </div>
    )
}
