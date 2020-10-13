import React, { useState,useContext } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import {LoginContext} from '../context/LoginContext';


export default function Authen() {
  var history = useHistory();

  /* const [isLoggedIn, setIsLoggedIn] = useState(false); */
  
  const [isLoggedIn,setIsLoggedIn]=useContext(LoginContext);

  const [accessToken, setAccessToken] = useState("");

  const login = (response) => {
    if (response.accessToken) {
      setIsLoggedIn(true);
      setAccessToken(response.accessToken);
      localStorage.setItem('setter',response.tokenId)
    }
  };

  const logout = (response) => {
    setIsLoggedIn(false);
    setAccessToken("");
    console.log(response)
    localStorage.removeItem('setter');
    window.location.reload()
  };

  const handleLoginFailure = () => {
    alert("Failed to log in");
  };

  const handleLogoutFailure = () => {
    alert("Failed to log out");
  };

  return (
    <div>
      {(isLoggedIn || localStorage.getItem('setter')) ? (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        />
        
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
       
      )}
    </div>
  );
}
