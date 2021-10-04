// usestate value checks

import { useState } from "react"
import {Form,Col, Row} from 'react-bootstrap'


let selEquiArr = []


export default function ChooseEquipment(props){
    const [checkCount, setCheckCount] = useState(0)
    const [disabledChecks, setDisabledChecks] = useState(false)
   

    const handleSelectedCheck=(e)=>{
        console.log(e.target.value)
        setCheckCount(checkCount+1)
        selEquiArr.push(e.target.value)
        props.setChoosedEquipment(selEquiArr)
    }

    // console.log(props.equipment)
    // props.equipment.forEach((option)=>{
    //     if(!option.name){
    //         if(option[0].equipment.name.length>0){
    //             option.name = option[0].equipment.name
    //         }  
            
    //     }
    // })

    // return null


    return (

        <Row>
            <h1>Choose {props.allowedCheck} Equipment</h1>
            <Col>
            {props.equipment.map((equipmentOptions) => {

                
            return (equipmentOptions.equipment ? 
                
                
                <div key={equipmentOptions.equipment?.name} className="mb-3">
                    <Form.Check 
                    type= "checkbox"
                    id={equipmentOptions.equipment?.name}
                    label={equipmentOptions.equipment?.name}
                    value={equipmentOptions.equipment?.name}
                    onChange={handleSelectedCheck}
                    disabled={checkCount===props.allowedCheck ? true : false}
                    />
                </div>
                : null)
            })}
            </Col>
        </Row>
      )
    
}

