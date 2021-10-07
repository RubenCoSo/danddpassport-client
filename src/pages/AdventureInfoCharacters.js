import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CharacterAdventureCard from "../components/CharacterAdventureCard ";
const API_URL = process.env.REACT_APP_API_URL;


export default function AdventureInfoCharacters (props) {
    const [characters, setCharacters] = useState()
    console.log(props);
    const adventureId = props.match.params.id
    const storedToken = localStorage.getItem("authToken");

    useEffect(()=>{

        axios.get(`${API_URL}/charactersInAdventure/${adventureId}`,{headers: { Authorization: `Bearer ${storedToken}` }})
        .then((adventure)=>{
            console.log(`charactersInfo`,adventure);
            setCharacters(adventure.data.characters)
            console.log(characters);
        })
    },[])


    return characters ? (
        <Container>
            <Row>
                <Col>
                <Link to={`/adventureInfo/addCharacter/${adventureId}`}><Button variant="primary" size="lg">
          Add character
        </Button></Link>
                <Link to={`/adventureInfo/monsters/${adventureId}`}><Button variant="primary" size="lg">
          Monsters
        </Button></Link>
                </Col>
            </Row>
            <Row>
            {characters.map((character)=>{
                
                return (
                <Col key= {character.characterName}>
                <CharacterAdventureCard character = {character}/>
                </Col>
                )
            })}
                
            </Row>
        </Container>
    )
    :null
}