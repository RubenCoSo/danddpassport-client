import { Container } from "react-bootstrap";
import logo from "./images/LOGO3.png"
import {Image} from "react-bootstrap";

function HomePage() {
  return (
    <Container className= "homeImage">
      <div
        class="row index-row justify-content-center align-items-center"
        id="homemessage"
      >
        <div class="content">
        
          <h2 class="card-title"></h2>
          <h1 class="card-subtitle">
            
          </h1>

          {/* <Row xs={1} md={1} lg={2} xl={3}> 
        <Col xs="auto" className="my-1" id="login">
          <Link to={"/login"}><Button>Login</Button></Link>
        </Col>
      </Row> */}
        </div>
      </div>
    </Container>
  );
}
export default HomePage;
