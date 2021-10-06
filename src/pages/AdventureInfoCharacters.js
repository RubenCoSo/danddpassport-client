import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import CharacterCard from "../components/CardCharacter";

const API_URL = process.env.REACT_APP_API_URL;


export default function AdventureInfoCharacters (props) {
    const [characters, setCharacters] = useState()
    console.log(props);
    const adventureId = props.match.params.id
    const storedToken = localStorage.getItem("authToken");

    useEffect(()=>{

        axios.get(`${API_URL}/charactersInAdventure`,{headers: { Authorization: `Bearer ${storedToken}` }})
        .then((charactersInfo)=>{
            setCharacters(charactersInfo.data)
        })
    })


    return(
        <Container>
            <Row>
                <Col>
                <Link to={"/adventure/addCharacter"}><Button variant="primary" size="lg">
          Add character
        </Button></Link>
                <Link to={"/CreateNewAdventure"}><Button variant="primary" size="lg">
          Monster
        </Button></Link>
                </Col>
            </Row>
            <Row>
                {}
            </Row>
        </Container>
    )
}