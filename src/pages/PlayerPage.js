import {Container,Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import CharacterCard from "../components/CardCharacter";
import { AuthContext } from "./../context/auth.context";





function PlayerPage() {

  const [characters, setCharacters] = useState([])

  const { user } = useContext(AuthContext);
  
  // const userId = user._id;
  

    return (
  <Container>
<Link to={"/characterInfo"}><Button variant="primary">Info</Button></Link>

<CharacterCard character = {characters}/> 

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>

<div className="mb-2">
<Link to={"/CreateNewCharacter"}><Button variant="primary" size="lg">
      New Character
    </Button>{' '}</Link>
    </div>
        </Container>


        )
    }
//prueba
export default PlayerPage;