import {
  
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Container,
  
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseEquipment from "../components/ChooseEquipmentForm";
import React from "react";

const API_URL = process.env.REACT_APP_API_URL;
const DNDAPI = "https://www.dnd5eapi.co/api/";

let savingThrowsArr = []
let startingEquipmentArr = []


export default function CreateNewCharacter3(props) {
  const [classInfo, setClassInfo] = useState()
  const [equipmentPerClass, setEquipmentPerClass] = useState()
  const [chooseCharacterEquipment, setChooseCharacterEquipment] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [hitDiceThrow, setHitDiceThrow] = useState(0)
  const [diceHits, setDiceHits] =useState(0)
  const [choosedEquipment, setChoosedEquipment] = useState()
  const [savingThrows, setSavingThrows] = useState()


  const characterId = props.match.params.id;
  const characterClass = props.match.params.characterClass.toLowerCase()
  const storedToken = localStorage.getItem('authToken');
  
  useEffect(()=>{
      axios.get(`${DNDAPI}/classes/${characterClass}`)
      .then((classInfo)=>{
        setClassInfo(classInfo)
        setChooseCharacterEquipment(classInfo.data.starting_equipment_options)
        classInfo.data.starting_equipment.forEach((equipment)=>{
          console.log(`equipment`,equipment);
          startingEquipmentArr.push(equipment.equipment.name)
        })
        setDiceHits(classInfo.data.hit_die)
        classInfo.data.saving_throws.forEach((saving) => {
          savingThrowsArr.push(saving.name)
        });
        setEquipmentPerClass(startingEquipmentArr)
        setSavingThrows(savingThrowsArr)
        setIsLoading(false)
      })
  },[])


  const handleSubmit = (e) => {
      
    e.preventDefault();

      const requestBody = {equipmentPerClass, hitDiceThrow, choosedEquipment, savingThrows, characterId};

      axios
        .put(
          `${API_URL}/character/equipment`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
          props.history.push("/playerpage")

        })
        .catch((error) => console.log(error));
    };


    // return<p>hola</p>

    return (
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInputGroup">
              <b>Hit Dice(Throw 1d{diceHits} )</b>
              </Form.Label>
              <InputGroup className="mb-2" aria-label="Toggle navigation">
                <FormControl
                  name="hitDiceThrow"
                  value={hitDiceThrow}
                  onChange={(e) => setHitDiceThrow(e.target.value)}
                  id="inlineFormInputGroup"
                  placeholder="Hit-Dice Trhow"
                />
              </InputGroup>
            </Col>
              {isLoading ? null : chooseCharacterEquipment.map((choose)=>{
                return (
                  <Col>
                    <ChooseEquipment 
                    equipment={choose.from}  
                    allowedCheck={choose.choose}  
                    characterId ={characterId}
                    setChoosedEquipment = {setChoosedEquipment}
                    />
                  </Col>
                )
              })}

            <Col>
              <Button type="submit" className="mb-2" id="sub">
                  Submit
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    )
  };