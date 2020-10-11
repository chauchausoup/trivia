import React from 'react'

export default function Questions() {
    return (
        <div>
        <p>Please type your questions ending in "?" <strong>(one line each)</strong></p>
            <textarea name="questions" id="qTextArea" cols="30" rows="10"></textarea>
            <input type="button" value="Go"/>

        </div>
    )
}
