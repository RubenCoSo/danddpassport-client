import {Container,Row,Col,Form,Button,InputGroup, FormControl} from "react-bootstrap"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container>
      <Row xs={1} md={1} lg={2} xl={3}> 
        <Col xs="auto" className="my-1" id="login">
          <Link to={"/login"}><Button>Login</Button></Link>
        </Col>
      </Row>
    </Container>

  );
}
export default HomePage;