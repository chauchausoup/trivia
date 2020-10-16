import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Thank() {
    let history =useHistory();

    return (
        <div>
            <h1>Thank you for joining the session.....</h1>
            <p>CLick here for the new session stream...</p>
            <button onClick={()=>(history.push(`/screen/`))}>Screen</button>
        </div>
    )
}
