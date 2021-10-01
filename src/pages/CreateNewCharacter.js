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


export default function CreateNewCharacter(props) {
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
        .then((response) => { console.log(response)
     
          setName("");
          setRace("");
          setCharacterClass("");
          return(
          props.history.push(`/createnewcharacter2/${response.data._id}`))
        
      
          
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
                placeholder="Name"
              />
            </InputGroup>
          </Col>
          <Form>
  <Row className="align-items-center">
    <Col xs="auto" className="my-1">
      <Form.Label
        className="me-sm-2"
        htmlFor="inlineFormCustomSelect"
        visuallyHidden
      >
        Preference
      </Form.Label>
      <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="0">Choose...</option>
        <option value="1">Dragonborn</option>
        <option value="2">Dwarf</option>
        <option value="3">Elf</option>
        <option value="4">Gnome</option>
        <option value="5">Half-Helf</option>
        <option value="6">Halfing</option>
        <option value="7">Half-Orc</option>
        <option value="8">Human</option>
        <option value="9">Tiefling</option>
        <option value="10">Orc</option>
      </Form.Select>
    </Col>
  </Row>
</Form>
           <Col xs="auto" className="my-1">
      <Form.Label
        className="me-sm-2"
        htmlFor="inlineFormCustomSelect"
        visuallyHidden
      >
        Preference
      </Form.Label>
      <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="0">Choose...</option>
        <option value="1">Barbarian</option>
        <option value="2">Bard</option>
        <option value="3">Cleric</option>
        <option value="4">Druid</option>
        <option value="5">Figther</option>
        <option value="6">Monk</option>
        <option value="7">Paladin</option>
        <option value="8">Ranger</option>
        <option value="9">Rogue</option>
        <option value="10">Sorcerer</option>
        <option value="11">Warlock</option>
        <option value="12">Wizard</option>
        <option value="13">Artificer</option>
      </Form.Select>
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

