import axios from "axios"
import { useEffect, useState } from "react"
import {Container, Row, Col} from 'react-bootstrap'
import React from "react";


const DNDAPI = "https://www.dnd5eapi.co/api/";


export default function SkillInfo (props) {
    const [skillInfo, setSkillInfo] = useState()

    let skillString
    let skillStringProps = props.match.params.skill

    skillString = skillStringProps.replace(/[^a-z0-9\s-]/ig,'')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    
    console.log(skillString);

    useEffect(()=>{
        axios.get(`${DNDAPI}skills/${skillString}`)
        .then((skll)=>{
            console.log(`res`,skll)
            setSkillInfo(skll.data)
          console.log(`set`,skll);
        })
    },[])



    // return null
    
    return skillInfo ? (
        <Container>
            <Row>
            <Col>
                <h1>{skillInfo.name}</h1>
            </Col>
            </Row>

            <Row>
            <Col>
                <h1>{skillInfo.ability_score.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col>
                <p>{skillInfo.desc}</p>
            </Col>
            </Row>
            
        </Container>
    )
    :null

}
