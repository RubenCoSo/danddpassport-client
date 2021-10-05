import {
  
  Row,
  Col,
  Form,
  Button,
  Container,
  
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ChooseSkills from "../components/ChooseSkillsForm";
import React from "react";

const API_URL = process.env.REACT_APP_API_URL;
const DNDAPI = "https://www.dnd5eapi.co/api/";

let skiPerClass=[]
let selBasSkiArr = []
let selSkiArr = []


export default function CreateNewCharacter3(props) {
  const [skillsPerClass, setSkillsPerClass] = useState()
  const [chooseCharacterSkills, setChooseCharacterSkills] = useState()
  const [diceHits, setDiceHits] =useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [choosedSkills, setChoosedSkills] = useState()
  const [choosedBasicSkills, setChoosedBasicSkills] = useState()


  const characterId = props.match.params.id;
  const characterClass = props.match.params.characterClass.toLowerCase()
  const storedToken = localStorage.getItem('authToken');
  
  useEffect(()=>{
      axios.get(`${DNDAPI}/classes/${characterClass}`)
      .then((classInfo)=>{
        classInfo.data.proficiencies.forEach((skill)=>{
          console.log(`FOREACH`,skill.name)
          skiPerClass.push(skill.name)
          console.log(`skiPerClass`, skiPerClass)
        })
        setChooseCharacterSkills(classInfo.data.proficiency_choices)
        setDiceHits(classInfo.data.hit_die)
        setSkillsPerClass(skiPerClass)
        setIsLoading(false)
      })
      
  },[])



  const handleSubmit = (e) => {
      
    e.preventDefault();


    console.log(`skill per class`, skillsPerClass);
    console.log(`choosedSkills`,choosedSkills);
    console.log(`choosedBasicSkills`,choosedBasicSkills);

    const requestBody = {diceHits, skillsPerClass,choosedSkills, choosedBasicSkills,characterId};

    axios
      .put(
        `${API_URL}/character/skills`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }        
      )
      .then((response) => {
        
        skiPerClass=[]
        selBasSkiArr = []
        selSkiArr = []
        setDiceHits(0)
        setSkillsPerClass()
        setChoosedSkills()
        setChoosedBasicSkills()
        props.history.push(`/createNewCharacter4/${characterId}/${characterClass}`)

      })
      .catch((error) => console.log(error));
    };


    return (
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            {isLoading ? null : chooseCharacterSkills.map((choose)=>{
              return (
                <Col>
                  <ChooseSkills 
                  proficiencies={choose.from}  
                  allowedCheck={choose.choose}  
                  characterId ={characterId}
                  setChoosedSkills = {setChoosedSkills}
                  setChoosedBasicSkills = {setChoosedBasicSkills}
                  selBasSkiArr =  {selBasSkiArr}  
                  selSkiArr = {selSkiArr}
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