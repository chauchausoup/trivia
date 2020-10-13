import React from 'react';
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
 
}
 
export default function Authen(props) {
    return (
        <div>
             <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={()=>{}}
                onFailure={()=>{}}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

 
 
