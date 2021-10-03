// usestate value checks

import { useState } from "react"
import {Form, Button,Col, Row} from 'react-bootstrap'
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;


let selEquiArr = []


export default function ChooseEquipment(props){
    const [checkCount, setCheckCount] = useState(0)
    const [selectedEquipment, setSelectedEquipment] = useState([])
    const [disabledButton, setDisabledButton] = useState(false)
    const [disabledChecks, setDisabledChecks] = useState(false)

    const storedToken = localStorage.getItem('authToken');

   

    const handleSelectedCheck=(e)=>{
        console.log(e.target.value)
        setCheckCount(checkCount+1)
        let isCheckDisabled = checkCount===props.allowedCheck ? true : false
        setDisabledChecks(isCheckDisabled)

        selEquiArr.push(e.target.value)
        
    }


    const handleSubmit = (e) => {
      
        e.preventDefault();

        setSelectedEquipment(selEquiArr)
            
        const requestBody = {selectedEquipment, characterId:props.characterId};
        
        axios
        .put(
            `${API_URL}/character/Equipment`,
            requestBody,
            { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
            console.log(response)
            setCheckCount(0)
            setDisabledButton(true)
            setDisabledChecks(true)

        })
        .catch((error) => console.log(error));
    };

    console.log(props.equipment)
    

    return null


    // return (
    //     <Form onSubmit={handleSubmit} className="formChar">
    //     <Row>
    //     <h1>Choose {props.allowedCheck} Equipment</h1>
    //     <Col>
    //     {props.equipment.map((equipmentOptions) => {
    //       return (
    //         <div key={equipmentOptions.equipment.name} className="mb-3">
    //             <Form.Check 
    //             type= "checkbox"
    //             id={equipmentOptions.equipment.name}
    //             label={equipmentOptions.equipment.name}
    //             value={equipmentOptions.equipment.name}
    //             onChange={handleSelectedCheck}
    //             disabled={disabledChecks}
    //             />
    //         </div>)
    //     })}
    //     </Col>
    //     <Col>
    //     <Button type="submit" className="mb-2" id="sub" disabled={disabledButton}>
    //         Submit
    //     </Button>
    //     </Col>
    //     </Row>
    //   </Form>
    //   )
    
}

