import {Container,Row,Col,Form,Button,InputGroup, FormControl} from "react-bootstrap"

function HomePage() {
  return (
    <Container>
<<<<<<< Updated upstream
    <Form>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
       Mail
      </Form.Label>
      <Form.Control id="inlineFormInputName" placeholder="Email" />
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
       Password
      </Form.Label>
      <InputGroup>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Password" />
      </InputGroup>
    </Col>
    <Col sm={3} className="my-1">
      <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
       Name
      </Form.Label>
      <InputGroup>
        <FormControl id="inlineFormInputGroupUsername" placeholder="Name" />
      </InputGroup>
    </Col>
=======
>>>>>>> Stashed changes
    
    <Col xs="auto" className="my-1">
      <Button type="submit" id="login"><b>LogIn</b></Button>
      
    </Col>
 
</Container>

  );
}
export default HomePage;