// usestate value checks

import { useState } from "react"
import {Form,Col, Row} from 'react-bootstrap'






export default function ChooseSkills(props){
    const [checkCount, setCheckCount] = useState(0)

    const handleSelectedCheck=(e)=>{
        setCheckCount(checkCount+1)

        let isSkillInclude =e.target.value.includes('Skill')
        
        if(isSkillInclude){

            let selectedSkill = e.target.value.split(" ").pop()
            console.log(selectedSkill)
            props.selBasSkiArr.push(selectedSkill)
            console.log(`basic skills`,props.selBasSkiArr)
        }else{

            props.selSkiArr.push(e.target.value)
        }


        props.setChoosedBasicSkills(props.selBasSkiArr)
        props.setChoosedSkills(props.selSkiArr)
    }

    return (
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
        </Row>
      )
    
}

