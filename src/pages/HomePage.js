import {Container,Row,Col,Form,Button,InputGroup, FormControl} from "react-bootstrap"

function HomePage() {
  return (
    <Container>
    <Form>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
       Name
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="User Name" />
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
       Username
      </Form.Label>
      <InputGroup>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Password" />
      </InputGroup>
    </Col>
    
    <Col xs="auto" className="my-1">
      <Button type="submit" id="login"><b>LogIn</b></Button>
      
    </Col>
  </Row>
</Form>
</Container>

  );
}
export default HomePage;