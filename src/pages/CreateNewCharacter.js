import {
  
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  
} from "react-bootstrap";
import { AuthContext } from "./../context/auth.context";
import { useContext, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


export default function CreateNewCharacter() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const {user} = useContext(AuthContext);
  const handleSubmit = (e) => {
      
    e.preventDefault();
   
      
      const userId = user._id;

      const requestBody = { name, race, characterClass, userId };
  
  
      const storedToken = localStorage.getItem('authToken');
     

    
      axios
        .post(
          `${API_URL}/newCharacter`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
     
          setName("");
          setRace("");
          setCharacterClass("");
        
      
          
        })
        .catch((error) => console.log(error));
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Name
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Username"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Race
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="race"
                value={race}
                onChange={(e) => setRace(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Race"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Class
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="characterClass"
                value={characterClass}
                onChange={(e) => setCharacterClass(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Class"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

