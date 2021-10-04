// usestate value checks

import { useState } from "react"
import {Form, Button,Col, Row} from 'react-bootstrap'
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

let selBasSkiArr = []
let selSkiArr = []


export default function ChooseSkills(props){
    const [checkCount, setCheckCount] = useState(0)
    const [selectedBasicSkills, setSelectedBasicSkills] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [disabledButton, setDisabledButton] = useState(false)
    const [disabledChecks, setDisabledChecks] = useState(false)

    const storedToken = localStorage.getItem('authToken');

   

    const handleSelectedCheck=(e)=>{
        console.log(e.target.value)
        setCheckCount(checkCount+1)

        let isSkillInclude =e.target.value.includes('Skill')
        
        if(isSkillInclude){

            let selectedSkill = e.target.value.split(" ").pop()
            console.log(selectedSkill)
            selBasSkiArr = [...selBasSkiArr,selectedSkill]
            console.log(`basic skills`,selBasSkiArr)
        }else{

            selSkiArr = [...selSkiArr,e.target.value]

            console.log(`skills`, `${selSkiArr}`)
        }
        // let isCheckDisabled = checkCount===props.allowedCheck ? true : false
        // setDisabledChecks(isCheckDisabled)
    }


    const handleSubmit = (e) => {
      
        e.preventDefault();

        setSelectedBasicSkills(selBasSkiArr)
        setSelectedSkills(selSkiArr)
            
        const requestBody = {selectedSkills, selectedBasicSkills, characterId:props.characterId};
        
        axios
        .put(
            `${API_URL}/character/skills`,
            requestBody,
            { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
            console.log(response)
            setCheckCount(0)
            setSelectedSkills([])
            setDisabledButton(true)
            setDisabledChecks(true)

        })
        .catch((error) => console.log(error));
    };




    return (
        <Form onSubmit={handleSubmit} className="formChar">
        <Row>
        <h1>Choose {props.allowedCheck} skills</h1>
        <Col>
        {props.proficiencies.map((proficiency) => (
          <div key={proficiency.name} className="mb-3">
            <Form.Check 
              type= "checkbox"
              id={proficiency.name}
              label={proficiency.name}
              value={proficiency.name}
              onChange={handleSelectedCheck}
              disabled={checkCount===props.allowedCheck ? true : false}
            />
          </div>
        ))}
        </Col>
        <Col>
        <Button type="submit" className="mb-2" id="sub" disabled={disabledButton}>
            Submit
        </Button>
        </Col>
        </Row>
      </Form>
      )
    
}

