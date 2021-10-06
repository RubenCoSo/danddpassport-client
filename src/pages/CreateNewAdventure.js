import {
    Row,
    Col,
    Form,
    Button,
    InputGroup,
    FormControl,
  } from "react-bootstrap";
  import { AuthContext } from "./../context/auth.context";
  import { useContext, useEffect, useState } from "react";
  import axios from "axios";
  
  const API_URL = process.env.REACT_APP_API_URL;
  
  export default function CreateNewCharacter(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState();
    const [isError, setIsError] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const created_by = user.name;
  
      const userId = user._id;
  
      const requestBody = { created_by, userId, description, title};
  
      const storedToken = localStorage.getItem("authToken");
  

        axios.post(`${API_URL}/newAdventure`, requestBody, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          console.log(response);
  
          setDescription("");
          setTitle("");
          props.history.push(`/masterPage`)
        })
        .catch((error) => {
          setMessage("This adventure already exist");
          setIsError(true);
          props.history.push(`/createNewAdventure`);
        });
    };
  
    return (
      <Form onSubmit={handleSubmit} className="formChar">
        <Row className="align-items-center" id="loginForm">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup">
              <b>Title</b>
            </Form.Label>
            <InputGroup className="mb-2" aria-label="Toggle navigation">
              <FormControl
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Title"
              />
            </InputGroup>
            {isError ? <span>{message}</span> : null}
          </Col>
          <Form>
            <Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label className="me-sm-2" htmlFor="inlineFormCustomSelect">
                  <b> Description </b>
                </Form.Label>
                <InputGroup className="mb-2" aria-label="Toggle navigation">
              <FormControl
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Description"
              />
            </InputGroup>
              </Col>
            </Row>
          </Form>  
          <Col xs="auto">
            <Button type="submit" className="mb-2" id="sub">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
