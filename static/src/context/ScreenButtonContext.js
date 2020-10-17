import React,{useState,createContext} from 'react';
export const ScreenButtonContext = createContext();

export const ScreenButtonProvider=(props)=>{
    const [buttonClicked, setButtonClicked] = useState(false);
   
    return(
        <ScreenButtonContext.Provider 
            value={[buttonClicked, setButtonClicked]} 
            
        >
            {props.children}
        </ScreenButtonContext.Provider>
    )
    
}
