import axios from "axios";
import { useEffect, useState } from "react";
import{ Container, Row, Col, Button} from "react-bootstrap"
import Weapon from "../components/weapon";
import Armor from "../components/Armor";
import Tools from "../components/Tools";
import AdventuringGear from "../components/AdventuringGear";
import React from "react";

const DNDAPI = "https://www.dnd5eapi.co/api/";


export default function EquipmentInfo(props){
    const [equipment, setEquipment] = useState()
  

    let equipString
    let equipStringProps = props.match.params.equip



    equipString = equipStringProps.replace(/[^a-z0-9\s-]/ig,'')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase()

    console.log(`string`,equipString)
    

    useEffect(()=>{
        axios.get(`${DNDAPI}equipment/${equipString}`)
        .then((equip)=>{
            console.log(`res`,equip)
            setEquipment(equip.data)
            console.log(`set`,equipment);
        })
    },[])

    return equipment ? (
                <Container>
            <Row>
            <Col>
                <h1>{equipment.name}</h1>
                <h3>{equipment.equipment_category.name}</h3>
            </Col>
            </Row>

            <Row>
            <Col>
                {equipment.equipment_category.index === "weapon" ? <Weapon weapon = {equipment}/> : null}
                {equipment.equipment_category.index === "armor" ? <Armor armor = {equipment}/> : null}
                {equipment.equipment_category.index === "tools" ? <Tools tools = {equipment}/> : null}
                {equipment.equipment_category.index === "adventuring-gear" ? <AdventuringGear gear = {equipment}/> : null}

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