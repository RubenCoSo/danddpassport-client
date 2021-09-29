import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <div
        class="row index-row justify-content-center align-items-center"
        id="homemessage"
      >
        <div class="content">
          <h2 class="card-title">Welcome adventurous</h2>
          <h1 class="card-subtitle">
            May your days be long, and your hardships few
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
