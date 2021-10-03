import axios from "axios";
import { useEffect, useState } from "react";
import {Container,Row,Col,Form,Button,InputGroup, FormControl, Image} from "react-bootstrap"
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function CharacterInfo(props) {

  const [character, setCharacter] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const characterId = props.match.params.id;
  console.log(characterId);
  const storedToken = localStorage.getItem('authToken');

  useEffect(()=>{
    axios.get(`${API_URL}/character/${characterId}`,{ headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response)=>{
      console.log(`character`,response.data);
      setCharacter(response.data)
      setIsLoading(false)
    })
    .catch((err)=>console.log(err))
  },[])

  // return null
  
    return (
      <Container>
        <Row>
          <Col>
            <h1>Character info</h1>
          </Col>
        </Row>
        <Row >
          <Col sm={1} md={1}>
            <Image src={isLoading ? null : character.image}></Image>
          </Col>
          <Col sm={1} md={1}>
            <h2> Name: {isLoading ? null : character.characterName}</h2>
            <h4> Race: {isLoading ? null : character.race}</h4>
            <h4> Class: {isLoading ? null : character.class}</h4>
          </Col>
          <Col sm={1} md={1}>
            <h5>Stats</h5>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
            <br/>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
            <br/>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
            <br/>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
            <br/>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
            <br/>
            <p>Constitution : {isLoading ? null : character.stats.con}</p>
          </Col>
        </Row>
      </Container>
        )
    }

export default CharacterInfo;