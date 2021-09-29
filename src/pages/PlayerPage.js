import {Container,Row,Col,Form,Button,InputGroup, FormControl, Card} from "react-bootstrap"
import { Link } from "react-router-dom";


function PlayerPage() {
    return (
  <Container>
<Link to={"/characterInfo"}><Button variant="primary">Info</Button></Link>
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
        </Container>
        )
    }
//prueba
export default PlayerPage;