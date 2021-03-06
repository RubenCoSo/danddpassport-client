import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
const API_URL = process.env.REACT_APP_API_URL;

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { logInUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        const token = response.data.authToken;
        logInUser(token);
        props.history.push("/chooserol");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    // <div className="LoginPage">
    //   <h1>Login</h1>

    //   <form onSubmit={handleLoginSubmit}>
    //     <label>Email:</label>
    //     <input type="text" name="email" value={email} onChange={handleEmail} />

    //     <label>Password:</label>
    //     <input type="password" name="password" value={password} onChange={handlePassword} />

    //     <button type="submit">Login</button>
    //   </form>
    //   { errorMessage && <p className="error-message">{errorMessage}</p> }

    //   <p>Don't have an account yet?</p>
    //   <Link to={"/signup"}> Sign Up</Link>
    // </div>

    <Container>
      <Row sm={1} md={1}>
        <Col>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="loginSingup">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="loginSingup">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
