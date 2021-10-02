import {Container,Button, CardGroup, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CharacterCard from "../components/CardCharacter";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL





function PlayerPage() {

  const [characters, setCharacters] = useState([])

  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem('authToken')

  
  const userId = user._id;

  useEffect(()=>{
    axios.get(`${API_URL}/user/${userId}`,{ headers: { Authorization: `Bearer ${storedToken}`}})
    .then((userInfo)=>{
      console.log(userInfo)
      setCharacters(userInfo.data.characters)
    })
  },[])
  
  

return (
  <Container>
    <Link to={"/characterInfo"}><Button variant="primary">Info</Button></Link>

    
    <CardGroup>
    {characters.map((character)=>{
      return (
        <Col key={character._id}>
          <CharacterCard character = {character}/> 
        </Col>)
    })}
    </CardGroup>

    <div className="mb-2">
    <Link to={"/CreateNewCharacter"}><Button variant="primary" size="lg">
          New Character
        </Button>{' '}</Link>
        </div>
  </Container>


        )
  }
export default PlayerPage;