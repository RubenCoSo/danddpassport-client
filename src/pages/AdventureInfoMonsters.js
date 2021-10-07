import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import MonsterCard from "../components/MonsterCard";

const API_URL = process.env.REACT_APP_API_URL;


export default function AdventureInfoMonsters (props) {
    const [monsters, setMonsters] = useState()
    console.log(props);
    const adventureId = props.match.params.id
    const storedToken = localStorage.getItem("authToken");

    function getMonsters(){
        axios.get(`${API_URL}/monstersInAdventure/${adventureId}`,{headers: { Authorization: `Bearer ${storedToken}` }})
        .then((adventure)=>{
            console.log(`monstersInfo`,adventure);
            setMonsters(adventure.data.monsters)
            console.log(monsters);
        })
    }

    useEffect(()=>{
        getMonsters()
        
    },[])




    return (
        <Container>
            <Row>
                <Col>
                <Link to={`/adventureInfo/addMonster/${adventureId}`}><Button variant="primary" size="lg">
          Add Monster
        </Button></Link>
                <Link to={`/adventureInfo/characters/${adventureId}`}><Button variant="primary" size="lg">
          Character
        </Button></Link>
                </Col>
            </Row>
            <Row>
            {monsters ? monsters.map((monster)=>{
                return (
                <Col key= {monster._id}>
                <MonsterCard monster = {monster} getMonsters ={getMonsters}/>
                </Col>
                )
            }):null}
                
            </Row>
        </Container>
    )
    
}