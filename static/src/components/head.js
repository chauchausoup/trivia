import React,{useState} from 'react'
import { Button,PageHeader,Modal } from "antd";
import Authen from './authen'



export default function Head() {
    const [visibility, setVisibility] = useState(false);

    function showPopUp(){
      setVisibility(true)
    }
    function handleOk(){
      setVisibility(false)
  
    }
    function handleCancel(){
      setVisibility(false)
  
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
                onOk={handleOk}
                onCancel={handleCancel}
                >
                <Authen/>
            </Modal>
        </div>
    )
}
