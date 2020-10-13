import React,{useState} from 'react'
import { Button,PageHeader,Modal } from "antd";
//import Authen from './authen'
import { GoogleLogin } from 'react-google-login';


export default function Head() {
    const [visibility, setVisibility] = useState(false);

    function showPopUp(){
      setVisibility(true)
    }
    function handleClose(){
      setVisibility(false)
  
    }
    function handleRetry(){
        setVisibility(true)

    }
   
    return (
        <div>
        <div className="head">
        <PageHeader
            title="Trivia"
            ghost={true}
            style={{
                backgroundColor:"lightgray",
                fontStyle:"italic"
            }}
            extra={[
                <Button key="1" type="primary" onClick={showPopUp}>
                Login
                </Button>
            ]}
        />

        </div>
             
            <Modal
                visible={visibility}
                onOk={handleClose}
                onCancel={handleClose}
                closable={true}
                footer={null}
                width={200}
                centered={true}
                bodyStyle={{
                    padding:'40px',
                    
                    height:"200px"
                }}
            >
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={handleClose}
                onFailure={handleRetry}
                cookiePolicy={'single_host_origin'}
            />
            </Modal>
        </div>
    )
}
