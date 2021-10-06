import axios from "axios"
import { useEffect, useState } from "react"
import {Container, Row, Col, Button} from 'react-bootstrap'
import React from "react";


const DNDAPI = "https://www.dnd5eapi.co/api/";


export default function TraitInfo (props) {
    const [traitInfo, setTraitInfo] = useState()

    let traitString
    let traitStringProps = props.match.params.trait

    traitString = traitStringProps.replace(/[^a-z0-9\s-]/ig,'')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
    
    console.log(traitString);

    useEffect(()=>{
        axios.get(`${DNDAPI}traits/${traitString}`)
        .then((trait)=>{
            console.log(`res`,trait)
            setTraitInfo(trait.data)
          console.log(`set`,trait);
        })
    },[])



    // return null
    
    return traitInfo ? (
        <Container className="info">
            <Row>
            <Col>
                <h1>{traitInfo.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col>
                <p>{traitInfo.desc}</p>
            </Col>
            </Row>
            <Col>
              <Button onClick = {props.history.goBack}>
                  Back
              </Button>
            </Col>
            
        </Container>
    )
    :null

}
