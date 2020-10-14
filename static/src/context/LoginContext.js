import React,{useState,createContext} from 'react';
export const LoginContext = createContext();

export const LoginProvider=(props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
   
    return(
        <LoginContext.Provider value={[isLoggedIn,setIsLoggedIn]} key={Math.random}>
            {props.children}
        </LoginContext.Provider>
    )
    
}
