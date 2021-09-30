import {Container,Row,Col,Form,Button,InputGroup, FormControl, Card} from "react-bootstrap"
import { Link } from "react-router-dom";

function CharacterInfo() {
    return (
        <Container>
        <p>character info xD</p>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>nombre del personaje</Card.Header>
        <Card.Body>
          <Card.Title>Information</Card.Title>
          <Card.Text>
          <ul>
           <li>·Fuerza = 20</li>
           <li>·Destreza = 20</li>
           <li>·int= 20</li>
           <li>·lo que sea= 20</li>
           </ul>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />

</Container>
        )
    }

export default CharacterInfo;