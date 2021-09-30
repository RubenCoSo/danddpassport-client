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


export default function CreateNewCharacter2(props) {
  const [strength, setStrength] = useState("");
  const [constitution, setConstitution] = useState("");
  const [dexterity, setDexterity] = useState("");
  const [inteligence, setInteligence] = useState("");
  const [wisdom, setWisdom] = useState("");
  const [charisma, setCharisma] = useState("");
  
console.log(props.match.params.id)

  const {user} = useContext(AuthContext);
  const handleSubmit = (e) => {
      
    e.preventDefault();
   
      
      const characterId = props.params._id;
      

      const requestBody = { strength, constitution, dexterity, wisdom, inteligence, charisma };
  
  
      const storedToken = localStorage.getItem('authToken');
     

    
      axios
        .put(
          `${API_URL}/newCharacter2`,
          requestBody,
          { headers: { Authorization: `Bearer ${storedToken}` } }        
        )
        .then((response) => {
     
          setStrength("");
          setConstitution("");
          setInteligence("");
          setDexterity("");
          setWisdom("");
          setCharisma("");
        
      
          
        })
        .catch((error) => console.log(error));
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Strength
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Strength"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Constitution
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="constitution"
                value={constitution}
                onChange={(e) => setConstitution(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Constitution"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
             Dexterity
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="dexterity"
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Dexterity"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Inteligence
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="inteligence"
                value={inteligence}
                onChange={(e) => setInteligence(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Inteligence"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Wisdom
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Wisdom"
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Charisma
            </Form.Label>
            <InputGroup className="mb-2">
              <FormControl
                name="charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value)}
                id="inlineFormInputGroup"
                placeholder="Charisma"
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