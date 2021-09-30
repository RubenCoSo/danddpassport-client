import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Form, Col, Button } from "react-bootstrap"

const API_URL = process.env.REACT_APP_API_URL;


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, rol:"master", characters:[], adventures:[] };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => props.history.push("/login"))
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    // <div className="SignupPage">
    //   <h1>Sign Up</h1>

    //   <form onSubmit={handleSignupSubmit}>
    //     <label>Email:</label>
    //     <input type="text" name="email" value={email} onChange={handleEmail} />

    //     <label>Password:</label>
    //     <input type="password" name="password" value={password} onChange={handlePassword} />

    //     <label>Name:</label>
    //     <input type="text" name="name" value={name} onChange={handleName} />

    //     <button type="submit">Sign Up</button>
    //   </form>

    //   { errorMessage && <p className="error-message">{errorMessage}</p> }

    //   <p>Already have account?</p>
    //   <Link to={"/login"}> Login</Link>
    // </div>
    <Container>
    <Row sm={1} md={1}>
      <Col>
        <Form onSubmit={handleSignupSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleEmail} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handlePassword} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="name" value={name} onChange={handleName} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        { errorMessage && <p className="error-message">{errorMessage}</p> }
        <p>Already have an account?</p>
        <Link to={"/login"}> Login</Link>
      </Col>
    </Row>
  </Container>
  )
}

export default SignupPage;