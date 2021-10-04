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
const DNDAPI = "https://www.dnd5eapi.co/api/";

const API_URL = process.env.REACT_APP_API_URL;

export default function CreateNewCharacter(props) {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [races, setRaces] = useState([]);
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`${DNDAPI}races`)
    .then((races) => {
      axios.get(`${DNDAPI}classes`)
      .then((classes) => {
        setClasses(classes.data.results);
        setRaces(races.data.results);
       
        setIsLoading(false)
      });
    });
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = user._id;

    const requestBody = { name, race, characterClass, userId };

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/newCharacter`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response);

        setName("");
        setRace("");
        setCharacterClass("");
        props.history.push(`/createnewcharacter2/${response.data._id}`)
        
      })
      .catch((error) => console.log(error));

      
  };



  return (
    <Form onSubmit={handleSubmit} className="formChar">
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInputGroup">
          <b>Name</b>
          </Form.Label>
          <InputGroup className="mb-2" aria-label="Toggle navigation">
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
                
              >
               <b> Race </b>
              </Form.Label>
              <Form.Select
                className="me-sm-2"
                id="inlineFormCustomSelect"
                onChange={(e) => setRace(e.target.value)}
              >
                <option value="0">Choose...</option>
                {isLoading ? null : races.map((race) => {
                  return <option value={race.name}>{race.name}</option>;
                })}
              </Form.Select>
            </Col>
          </Row>
        </Form>
        <Col xs="auto" className="my-1">
          <Form.Label
            className="me-sm-2"
            htmlFor="inlineFormCustomSelect"
            
          >
           <b> Class</b>
          </Form.Label>
          <Form.Select
            className="me-sm-2"
            id="inlineFormCustomSelect"
            onChange={(e) => setCharacterClass(e.target.value)}
          >
            <option value="0">Choose...</option>
            { isLoading ? null : classes.map((classes) => {
              return <option key={classes.name} value={classes.name}>{classes.name}</option>;
            })}
          </Form.Select>
        </Col>

        <Col xs="auto">
          <Button type="submit" className="mb-2" id="sub">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
