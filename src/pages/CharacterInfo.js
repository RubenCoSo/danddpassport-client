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
           Aquí las estadisticas del personaje
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

</Container>
        )
    }

export default CharacterInfo;