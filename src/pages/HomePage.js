import {Container,Row,Col,Form,Button,InputGroup, FormControl} from "react-bootstrap"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container>
  
    <Col xs="auto" className="my-1" id="login">
    <Link button to={"/login"}> <b>Login</b> </Link>

      
    </Col>

</Container>

  );
}
export default HomePage;